import axios, {Method} from 'axios';


const apiKey = process.env.REACT_APP_API_KEY;

const options = {
  method: 'GET' as Method,
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
  params: {
    Category: 'tennis',
    Timezone: '1'
  },
  headers: {
    'X-RapidAPI-Key': apiKey? apiKey : '',
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

    const encodedParams = new URLSearchParams();
    encodedParams.set('text', 'Thanasi Kokkinakis tennis player');
    
    const options1 = {
      method: 'POST' as Method,
      url: 'https://open-ai21.p.rapidapi.com/texttoimage2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': apiKey? apiKey : '',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
      },
      data: encodedParams,
    };

    export const fetchImages = async () => {

      try {
        const response = await axios.request(options1);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    
 
    
   



