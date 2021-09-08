import axios from 'axios';

const url = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "d8a3cdd1d7cdbc5d82db2037b43d27d1";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(url, {
      params: {
          q: query,
          units: 'metric',
          APPID: api_key,
      },
    });
    return data;
}
