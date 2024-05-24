import {  GET_WEATHER } from "../NetworkPaths"
import { get } from "../main";

const getWeather =(detailUrl)=>{
     const  urlSent = GET_WEATHER+detailUrl;
     return get(urlSent);
    
}

export {getWeather}