import { BASE_URL } from "./NetworkPaths"

const get =(urlOption)=>{
   return  fetch(BASE_URL+urlOption,{
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 4R1O6EVH9W33C906CoyJMH:6QK6f0Kblt8izn5HD5tDxP"
          },


    }).then((response)=>{
        if(!response.ok){
            console.log('response was not ok', response.statusText)
            throw new Error('response was not ok',response.statusText)
        }
         console.log('response.json',response.status)
        return response.json()
    })
}


export {get}

