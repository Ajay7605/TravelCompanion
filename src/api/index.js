import axios from 'axios';
// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
// `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`



export const getPlacesData = async(type,sw,ne)=>{
    try{
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
                params: {
                  bl_latitude:sw.lat,
                  tr_latitude:ne.lat,
                  bl_longitude:sw.lng,
                  tr_longitude:ne.lng,
              
                },
                headers: {
                  'x-rapidapi-key':   process.env.REACT_APP_RAPIDAPI_KEY,
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
                }
              })
              console.log(data)
            return data
    }catch(error){
        console.log(error)
    }
}



// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//     restaurant_tagcategory_standalone: '10591',
//     restaurant_tagcategory: '10591',
//     limit: '30',
//     currency: 'USD',
//     open_now: 'false',
//     lunit: 'km',
//     lang: 'en_US'
//   },
//   headers: {
//     'x-rapidapi-key': '5b1b70b804mshf019a4c53b25d64p1247cfjsnc9400c7655a2',
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }