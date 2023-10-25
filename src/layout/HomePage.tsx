import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchData, fetchImages } from "../utils/fetch";
import { parseTimestamp } from "../utils/utilFunctions";
import { playersArray } from "../utils/playersArray";
import Ribbon from "../components/Ribbon";
import MainMatch from "../features/mainMatch/MainMatch";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import {
  addData,
  changeTextSliderColor,
  setImage1,
} from "../features/mainMatch/mainMatchSlice";
import Footer from "./Footer";
import Modal from "../components/Modal";

const HomePage = () => {
  const { userLoggedIn } = useAppSelector((state) => state.account);
  const { stage, name: {player1, player2} } = useAppSelector((state) => state.mainMatch);
  const dispatch = useAppDispatch();
  dispatch(changeTextSliderColor("rgb(179, 237, 97)"));

  const matchMaker = (data: any) => { // function that recives data from APi and extract shape it in forms for further usage in app

    const events = data.map((tour: any) => { // finding right stage with stage name from list item
      if (tour.Snm === stage) {
        return tour.Events;
      }
    });
     
    const Match =  events.map((event : any) => { // finding right Match with player names from list item
      if(event.T1[0].Nm == player1 && event.T2[0].Nm == player2){
         return event;
      }
    });
    
    const onServe: number = Match.Esrv;

    const points = {
      player1: Match.Tr1G,
      player2: Match.Tr2G,
    };
    console.log(points);

    const finishedSets = {
      p1s1: Match.Tr1S1 || null,
      p2s1: Match.Tr2S1 || null,
      p1s2: Match.Tr1S2 || null,
      p2s2: Match.Tr2S2 || null,
      p1s3: Match.Tr2S3 || null,
      p2s3: Match.Tr2S3 || null,
      p1sum: Match.Tr1 || null,
      p2sum: Match.Tr2 || null,
    };

    const name = {
      player1: Match.T1[0].Nm,
      player2: Match.T2[0].Nm,
    };

    const time: string = Match.Esd.toString();
    const timeFormated: string = parseTimestamp(time);
    const duration: string = timeFormated;

    
    const playerRank1 = playersArray.filter((player: any) =>{
      return  player.name.includes(player1.split(" ")[0]) && player.name.includes(player1.split(" ")[1])
  }
    );
    const playerRank2 = playersArray.filter((player: any) =>{
      return  player.name.includes(player2.split(" ")[0]) && player.name.includes(player2.split(" ")[1])
    }
    );
    const rank = {
      player1: playerRank1[0].ranking,
      player2: playerRank2[0].ranking,
    };
    dispatch(addData({ onServe, points, finishedSets, name, duration, rank }));
  };

  useEffect(() => {
    FetchData()
      .then((data) => {
        if (data) {
          matchMaker(data);
        }
      })
      .catch((error) => console.log(error));
  }, [matchMaker]);

  useEffect(() => {
    fetchImages()
      .then((data) => {
        if (data) dispatch(setImage1(data.url));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {!userLoggedIn && <Modal />}
      <Stack>
        {userLoggedIn && (
          <Link
            to="/listpage"
            style={{
              justifyContent: "center",
              height: "22vh",
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h4"
              sx={{ ml: "37%", mt: 6 }}
            >{`>>All Live Matches List`}</Typography>
          </Link>
        )}
        <Ribbon />
        <MainMatch />
      </Stack>
      <Footer />
    </>
  );
};

export default HomePage;
