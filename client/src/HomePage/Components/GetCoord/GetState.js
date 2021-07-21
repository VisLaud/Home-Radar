import Geocode from 'react-geocode';
//convert address to geocode
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);


const GetState = async (coord) => {
    let state = '';
    await Geocode.fromLatLng(coord.lat, coord.lng).then(
        (response) => {
            for (let i = 0; i < response.results[0].address_components.length; i++) {
                for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                    switch (response.results[0].address_components[i].types[j]) {
                        case "administrative_area_level_1":
                            state = response.results[0].address_components[i].short_name;
                            break;
                    }
                }
            }
        },
        (error) => {
            console.error(error);
        }
    );

    return state;
}

export default GetState;
