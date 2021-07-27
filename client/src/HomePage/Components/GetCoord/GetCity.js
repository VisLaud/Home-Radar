import Geocode from "react-geocode";
//convert address to geocode
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

export const GetCity = async (coord) => {
  let city = "";
  await Geocode.fromLatLng(coord.lat, coord.lng).then(
    (response) => {
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (
          let j = 0;
          j < response.results[0].address_components[i].types.length;
          j++
        ) {
          switch (response.results[0].address_components[i].types[j]) {
            case "locality":
              city = response.results[0].address_components[i].long_name;
              break;
          }
        }
      }
    },
    (error) => {
      console.error(error);
    }
  );

  return city;
};

export default GetCity;
