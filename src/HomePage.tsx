import { CardMedia, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchData, fetchImages } from "./utils/fetch";
import { parseTimestamp } from "./utils/utilFunctions";
import { playersArray } from "./playersArray";
import Ribbon from "./Ribbon";
import MainMatch from "./MainMatch";
import ScoreField from "./ScoreField";

const HomePage = () => {
  const [onServe, setOnServe] = useState<number | undefined>(1);
  const [points, setPoints] = useState<{
    player1: string;
    player2: string;
  } | undefined>();
  const [finishedSets, setFinishedSets] = useState<{
    p1s1: string;
    p2s1: string;
    p1s2: string | undefined;
    p2s2: string | undefined;
    p1s3: string | undefined;
    p2s3: string | undefined;
    p1sum: string | undefined;
    p2sum: string | undefined;
  } | undefined>();
  const [playerName, setPlayerName] = useState<{
    player1: string;
    player2: string;
  } | undefined>();
  const [duration, setDuration] = useState<string | undefined>();
  const [image, setImage] = useState<string | undefined>();
  const [rank, setRank] = useState<{player1: number, player2: number} | undefined>();

  // useEffect(() => {
  // FetchData().then((data) => dataExctractor(data));

  //   fetchImages().then(data => setImage(data.url))
  // }, []);

  // const dataExctractor = (data: any) => {
  
  //   setOnServe(data[0].Events[0].Esrv);

  //   setPoints({ player1: data[0].Events[0].Tr1G, player2: data[0].Events[0].Tr2G });

  
  //   setFinishedSets({
  //     p1s1: data[0].Events[0].Tr1S1,
  //     p2s1: data[0].Events[0].Tr1S2,
  //     p1s2: data[0].Events[0].Tr1S3,
  //     p2s2: data[0].Events[0].Tr2S1,
  //     p1s3: data[0].Events[0].Tr2S2,
  //     p2s3: data[0].Events[0].Tr2S3,
  //     p1sum: p1sum: parseInt(data[0].Events[0].Tr1S1 || 0) + parseINt(data[0].Events[0].Tr1S2 || 0) + parseInt(data[0].Events[0].Tr1S3 || 0);
  //     p2sum: p1sum: parseInt(data[0].Events[0].Tr2S1 || 0) + parseInt(data[0].Events[0].Tr2S2 || 0) + parseInt(data[0].Events[0].Tr2S3 || 0);
  //   });

  //   setPlayerName({ player1:  data[0].Events[0].T1[0].Nm, player2: data[0].Events[0].T2[0].Nm });

  //   const time: string = data[0].Events[0].Esd.toString();
  //   const timeFormated: string = parseTimestamp(time);
  //   setDuration(timeFormated);

  // };
  // function rankFinder(player: any, name: string | undefined) {
  //   if (player.name.includes(name?.split(' ')[0]) && player.name.includes(name?.split(' ')[1])) {
  //     return player.ranking;
  //   }
  // }
  // const playerRank1 = playersArray.filter((player: any) => rankFinder(player, playerName?.player1));
  // const playerRank2 = playersArray.filter((player: any) => rankFinder(player, playerName?.player2));
   // setRank({player1: playerRank1[0].ranking, player2: playerRank2[0].ranking })
  // console.log(playerRank1[0]?.ranking);

  return (
    <Stack>
      
      <Link to="/list" style={{ justifyContent: "center", height: "22vh", textDecoration:'none' }}>
        <Typography
          variant="h4"
          sx={{ ml: "37%", mt: 6 }}
        >{`>>All Live Matches List`}</Typography>
      </Link>
      <Ribbon durationTime={duration}  />
      <MainMatch playerImage={image} rank={rank} onServe={onServe} points={points} finishedSets={finishedSets} playerName={playerName}/>
      <ScoreField finishedSets ={finishedSets}/>
    </Stack>
  );
};

export default HomePage;
