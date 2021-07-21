import axios from 'axios';

let data = null;
async function GetData(lat, lng, radius, type) {
    await axios.get(`https://home-radar.herokuapp.com/googleplaces?lat=${lat}&lng=${lng}&radius=${radius}&type=${type}`).then(res => data = res.data)
    return data;
}

export default GetData;