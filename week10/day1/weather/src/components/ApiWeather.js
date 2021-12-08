import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '3b665aa48a63a048672e4b956d13d3df';



export const getWeatherData = async (cityName) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityName}&appid=${apiKey}`)
        return data;
    } catch(e) {
        throw new Error(e)
    }
}

