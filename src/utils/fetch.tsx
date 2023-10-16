import axios, {Method} from 'axios';
import { playersArray } from '../playersArray';
import { parseTimestamp } from './utilFunctions';


const apiKey = process.env.REACT_APP_API_KEY;

const options = {
  method: 'GET' as Method,
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
  params: {
    Category: 'tennis',
    Timezone: '1'
  },
  headers: {
    'X-RapidAPI-Key': '95f8eb4e03msh1cbfb4cb32ce074p12d535jsn9414e964f13',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
};

   export const FetchData = async() => {

        try { 
            const response = await axios.request(options);
            console.log(response.data);
            const mainMatchData =  dataExctractor(response.data.Stages);
            return mainMatchData;
        } catch (error) {
            console.error(error);
            return { error: 'An error occurred' };
        }
    }
    const dataExctractor = (data: any) => {
  
    const onServe: number = data[0].Events[0].Esrv;

    const points = { player1: data[0].Events[0].Tr1G, player2: data[0].Events[0].Tr2G };

  
    const finishedSets = {
      p1s1: data[0].Events[0].Tr1S1,
      p2s1: data[0].Events[0].Tr1S2,
      p1s2: data[0].Events[0].Tr1S3,
      p2s2: data[0].Events[0].Tr2S1,
      p1s3: data[0].Events[0].Tr2S2,
      p2s3: data[0].Events[0].Tr2S3,
      p1sum: parseInt(data[0].Events[0].Tr1S1 || 0) + parseInt(data[0].Events[0].Tr1S2 || 0) + parseInt(data[0].Events[0].Tr1S3 || 0),
      p2sum: parseInt(data[0].Events[0].Tr2S1 || 0) + parseInt(data[0].Events[0].Tr2S2 || 0) + parseInt(data[0].Events[0].Tr2S3 || 0),
    };

    const name = { player1:  data[0].Events[0].T1[0].Nm, player2: data[0].Events[0].T2[0].Nm };

    const time: string = data[0].Events[0].Esd.toString();
    const timeFormated: string = parseTimestamp(time);
    const duration = timeFormated;

  
  function rankFinder(player: any, name: string | undefined) {
    if (player.name.includes(name?.split(' ')[0]) && player.name.includes(name?.split(' ')[1])) {
      return player.ranking;
    }
  }
  const playerRank1 = playersArray.filter((player: any) => rankFinder(player, name?.player1));
  const playerRank2 = playersArray.filter((player: any) => rankFinder(player, name?.player2));
   const rank = {player1: playerRank1[0].ranking, player2: playerRank2[0].ranking };

   return {
  onServe, points, finishedSets, name, duration
  }
  };




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
    
 
    
   



