import axios from "axios";
import { base_url, api_key } from "./api_Helper";

async function getWeather(city, apiDay) {
    const apiUrl = `${base_url}?q=${city}&cnt=${apiDay}&appid=${api_key}`;
    const { data } = await axios(apiUrl);
    return data;
}

export { getWeather };