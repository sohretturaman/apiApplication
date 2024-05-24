import { GET_DUTY_PHARMACY } from "../NetworkPaths"
import { get } from "../main";

const getDutyPharmacy =(detailUrl)=>{
     const  urlSent = GET_DUTY_PHARMACY+detailUrl;
     return get(urlSent);
    
}

export {getDutyPharmacy}