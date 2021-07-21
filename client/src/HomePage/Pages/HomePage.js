import { Link } from 'react-router-dom';
import styles from './HomePage.css'
import { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { GetCoord, Radar, DataCards, GetData, RatingCard, GetState, GetCrimeRate } from '../Components/index';


function HomePage(props) {
    const [MapConfig, SetConfig] = useState({ zoom: 15 });
    const [UserInput, SetUserInput] = useState({ input: "", radius: 0, type: 'default: All' });
    const [Data, SetData] = useState();

    const [r, SetR] = useState();
    const [s, SetS] = useState();
    const [p, SetP] = useState();
    const [g, SetG] = useState();
    const [h, SetH] = useState();
    const [cr, SetCR] = useState();

    function handleChange(e) {
        e.preventDefault();
        SetUserInput({ ...UserInput, input: e.target.value });
    }

    function RangeSelectorChange(e) {
        SetUserInput({ ...UserInput, radius: e.target.value * 1609 });
    }

    function TypeSelectorChange(e) {
        SetUserInput({ ...UserInput, type: e.target.value });
    }

    async function FetchUserInput(e) {
        e.preventDefault();
        //individual displaying
        if (UserInput.input && (UserInput.type != 'default: All')) {
            SetR(null);
            SetS(null);
            SetP(null);
            SetG(null);
            SetH(null);
            await GetCoord(UserInput.input).then(res => {
                //set the map properties
                SetConfig({ ...MapConfig, coordinates: res, zoom: 15 })
                //get the individual places data
                GetData(res.lat, res.lng, UserInput.radius, UserInput.type).then(res => { SetData(res); console.log(res.map(r => r.rating)) })
            }).catch(err => console.log(err));
        }

        //accumulative displaying
        if (UserInput.input && (UserInput.type == 'default: All')) {
            SetData(null);
            await GetCoord(UserInput.input).then(res => {
                //set the map properties
                SetConfig({ ...MapConfig, coordinates: res, zoom: 15 })
                //get the state shortname
                GetState(res).then(state => GetCrimeRate(state).then(crime => SetCR(crime)))
                //restaurant
                GetData(res.lat, res.lng, UserInput.radius, 'restaurant').then(res => SetR(res))
                //school
                GetData(res.lat, res.lng, UserInput.radius, 'school').then(res => SetS(res))
                //park
                GetData(res.lat, res.lng, UserInput.radius, 'park').then(res => SetP(res))
                //gym
                GetData(res.lat, res.lng, UserInput.radius, 'gym').then(res => SetG(res))
                //hospital
                GetData(res.lat, res.lng, UserInput.radius, 'hospital').then(res => SetH(res))
            }).catch(err => console.log(err));
        }
    }

    const result = (d) => {
        return d.map((res) =>
            <div className='data-card'>
                <DataCards icon={res.icon} name={res.name} vicinity={res.vicinity} photo_reference={res.photos && res.photos[0].photo_reference} business_status={res.opening_hours && res.opening_hours.open_now}></DataCards>
            </div>
        )
    }

    const pinMarkers = (Data) => {
        return Data.map((res) =>
            <Marker
                position={res.geometry.location}
                icon={
                    {
                        url: res.icon,
                        scaledSize: { width: 22, height: 22 }
                    }
                }
            >
            </Marker >
        )
    }

    //filter undefine rating
    const filterRating = (data) => {
        return data.map(r => r.rating).filter(a => { if (a) return a })
    }

    //calculate avg from an arr
    const avg = (arr) => {
        let sum = 0;
        for (let a in arr) {
            sum += arr[a];
        }
        return sum / arr.length
    }

    //return an object of all rating
    const getRating = (h, s, r, p, g, cr) => {
        const hospital_rating = avg(filterRating(h))
        const school_rating = avg(filterRating(s))
        const restaurant_rating = avg(filterRating(r))
        const park_rating = avg(filterRating(p))
        const gym_rating = avg(filterRating(g))

        return <RatingCard hospital_rating={hospital_rating} school_rating={school_rating} restaurant_rating={restaurant_rating} park_rating={park_rating} gym_rating={gym_rating} crime_rate={cr}></RatingCard>
    }

    return (
        <>
            <div className='home-page'>
                <div className='top-section'>
                    <div className='radar-container'>
                        <Radar></Radar>
                    </div>
                    <div className='header'>
                        <h1 className='header-name'>Home Radar</h1>
                    </div>

                    <div className='search-block'>
                        <div className='search-form'>
                            <input type='text' className='search-bar' placeholder='search a place' onChange={handleChange} />
                            <button className='search-btn' onClick={FetchUserInput}><div className='btn-highlight'></div></button>
                            <div className='selector-container'>
                                <div>
                                    <select className='range-selector' onChange={RangeSelectorChange}>
                                        <option className='range-option'>Range Selector: Miles</option>
                                        <option className='range-option'>1</option>
                                        <option className='range-option'>5</option>
                                        <option className='range-option'>10</option>
                                        <option className='range-option'>25</option>
                                        <option className='range-option'>50</option>
                                    </select>

                                    <select className='type-selector' onChange={TypeSelectorChange}>
                                        <option className='type-option'>default: All</option>
                                        <option className='type-option'>hospital</option>
                                        <option className='type-option'>school</option>
                                        <option className='type-option'>restaurant</option>
                                        <option className='type-option'>park</option>
                                        <option className='type-option'>gym</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map"> <Map
                    google={props.google}
                    center={MapConfig.coordinates}
                    zoom={MapConfig.zoom}
                    defaultZoom={15}
                    initialCenter={{ lat: 37.3351874, lng: -121.8810715 }}
                >
                    <Marker
                        position={MapConfig.coordinates}>
                    </Marker>
                    {Data && pinMarkers(Data)}
                </Map>
                </div>
                {Data &&
                    <div className='data-table'>
                        {Data && result(Data)}
                    </div>
                }
                {
                    h && r && s && g && p &&
                    <>
                        <h3 className='caption'>Hospital</h3>
                        <div className='data-table'>
                            {h && result(h)}
                        </div>
                        <h3 className='caption'>School</h3>
                        <div className='data-table'>
                            {s && result(s)}
                        </div>
                        <h3 className='caption'>Restaurant</h3>
                        <div className='data-table'>
                            {r && result(r)}
                        </div>
                        <h3 className='caption'>Park</h3>
                        <div className='data-table'>
                            {p && result(p)}
                        </div>
                        <h3 className='caption'>Gym</h3>
                        <div className='data-table'>
                            {g && result(g)}
                        </div>
                        <div>{getRating(h, s, r, p, g, cr)}</div>
                    </>
                }

            </div>
        </>
    )
}

const GM = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(HomePage)

export default GM;