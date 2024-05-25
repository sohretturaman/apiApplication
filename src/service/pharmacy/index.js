import { GET_DUTY_PHARMACY } from "../NetworkPaths"
import { get } from "../main";

const getDutyPharmacy =(detailUrl)=>{
     const  urlSent = GET_DUTY_PHARMACY+detailUrl;
     console.log('url sent in getdutyPharmacy',urlSent)
     return get(urlSent);
    
}

export {getDutyPharmacy}