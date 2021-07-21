import Geocode from 'react-geocode';
//convert address to geocode
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
Geocode.setLanguage("en");
Geocode.setRegion("us");

let coordinate = null;
async function GetCoord(adrs) {
    await Geocode.fromAddress(adrs).then(
        (response) => {
            coordinate = response.results[0].geometry.location;
        },
        (error) => {
            console.error(error);
        }
    );

    return coordinate;
}



export default GetCoord;