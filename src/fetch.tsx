import axios, {Method} from 'axios';

const options = {
  method: 'GET' as Method,
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
  params: {
    Category: 'tennis',
    Timezone: '-7'
  },
  headers: {
    'X-RapidAPI-Key': 'a58c769d0cmsh0132917213024a4p17800ajsnd9e96ebcf045',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
};


   export const FetchData = async() => {

        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data.Stages;
        } catch (error) {
            console.error(error);
        }
    }
 
    
   



