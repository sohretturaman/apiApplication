import { GET_PRAYER_TIMES } from "../NetworkPaths"
import { get } from "../main"

const getPrayerTimes = (detailUrl)=>{

 const urlSent = GET_PRAYER_TIMES + detailUrl
 console.log('url sent in getPrayerTimes',urlSent)
 return get(urlSent)

}

export {getPrayerTimes}