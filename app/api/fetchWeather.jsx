import axios from "axios";
const URLs = process.env.API_URL;
const API_KEYs = process.env.API_KEY;
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