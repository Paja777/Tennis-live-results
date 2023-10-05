import { Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchData } from "./fetch";

const HomePage = () => {
  const [onServe, setOnServe] = useState<number | null>(null);
  const [points, setPoints] = useState<{
    player1: string;
    player2: string;
  } | null>(null);
  const [finishedSets, setFinishedSets] = useState<{
    p1s1: string;
    p2s1: string;
    p1s2: string | null;
    p2s2: string | null;
    p1s3: string | null;
    p2s3: string | null;
  } | null>(null);
  const [playerName, setPlayerName] = useState<{
    player1: string;
    player2: string;
  } | null>(null);

  useEffect(() => {
    FetchData().then((data) => dataExctractor(data));
  }, []);

  const dataExctractor = (data: any) => {
    const Esrv: number = data[0].Events[0].Esrv;
    setOnServe(Esrv);

    const Tr1G: string = data[0].Events[0].Tr1G;
    const Tr2G: string = data[0].Events[0].Tr2G;
    setPoints({ player1: Tr1G, player2: Tr2G });

    const Tr1S1: string = data[0].Events[0].Tr1S1;
    const Tr1S2: string = data[0].Events[0].Tr1S2;
    const Tr1S3: string = data[0].Events[0].Tr1S3;
    const Tr2S1: string = data[0].Events[0].Tr2S1;
    const Tr2S2: string = data[0].Events[0].Tr2S2;
    const Tr2S3: string = data[0].Events[0].Tr2S3;
    setFinishedSets({
      p1s1: Tr1S1,
      p2s1: Tr2S1,
      p1s2: Tr1S2,
      p2s2: Tr2S2,
      p1s3: Tr1S3,
      p2s3: Tr2S3,
    });

    const name1: string = data[0].Events[0].T1[0].Nm;
    const name2: string = data[0].Events[0].T2[0].Nm;
    setPlayerName({ player1: name1, player2: name2 });

    console.log(name1);
  };

  return (
    <Stack>
      <Link to="/list">
        <Typography variant="h4">{`>>All Live Matches List`}</Typography>
      </Link>
    </Stack>
  );
};

export default HomePage;
