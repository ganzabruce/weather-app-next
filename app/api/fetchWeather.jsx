import axios from "axios";
const URLs = "http://api.weatherapi.com/v1/current.json";
const API_KEYs = "463b5d5ca14c410ebed100531252708";
console.log(URLs,API_KEYs)
export const fetchWeather = async (query) => {
    const { data } = await axios.get(URLs, {
        params: {
            key:API_KEYs,
            q: query,
            aqi:"no",
        }
    })
    return data;
}