import axios from "axios";
import { rapidApiKey } from "../constants";

const searchEndpoint = 'https://weatherapi-com.p.rapidapi.com/search.json';
const forcastEndpoint = 'https://weatherapi-com.p.rapidapi.com/forecast.json';

const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params,
        headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      try{
        const response = await axios.request(options);
        return response.data;
      }catch(error){
        console.log('error: ',error);
        return {};
    }
}

export const fetchWeatherForecast = params=>{
    return apiCall(forcastEndpoint, params);
}

export const fetchLocations = params=>{
    return apiCall(searchEndpoint, params);
}
