import { useEffect, useState } from "react";
import { FetchData } from "./utils/fetch";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import background from '../src/assets/background.png';

const dummy_matches = [
  {
    id: 1,
    stage: "Roland Garros",
    player1: "Novak Djokovic",
    player2: "Rafael Nadal",
    sets: "2:1",
  },
  {
    id: 2,
    stage: "Wimbledon",
    player1: "Roger Federer",
    player2: "Andy Murray",
    sets: "3:0",
  },
  {
    id: 3,
    stage: "Australian Open",
    player1: "Serena Williams",
    player2: "Maria Sharapova",
    sets: "2:1",
  },
  {
    id: 4,
    stage: "French Open",
    player1: "Rafael Nadal",
    player2: "Dominic Thiem",
    sets: "3:2",
  },
  {
    id: 5,
    stage: "US Open",
    player1: "Naomi Osaka",
    player2: "Ashleigh Barty",
    sets: "2:0",
  },
];

const ListPage = () => {
  const [matches, setMatches] = useState<
    | {
        id: number;
        stage: string;
        player1: string;
        player2: string;
        sets: string;
      }[]
    | undefined
  >(dummy_matches);

  // useEffect(() => {
  //   FetchData()
  //     .then((data) => {
  //       if (data) matchMaker(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const matchMaker = (data: any) => {
    const events: { string: string | number }[] = data
      .map((tour: any) => {
        return tour.Events;
      })
      .flat();

    const teams: string[] = events.map((event: any) => {
      return `Match: ${event.T1[0].Nm} vs ${event.T2[0].Nm}`;
    });
    // setMatches(teams);

    console.log(teams);
  };

  if (matches === undefined)
    return <Typography variant="h2">...Loading</Typography>;

  return (
    <Box
      sx={{
        justifyItems: "center", 
        backgroundImage: `url("${background}")`,
        backgroundAttachment: 'fixed'
      }}
    >
      {matches?.map((match) => (
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem
            stage={match.stage}
            player1={match.player1}
            sets={match.sets}
            player2={match.player2}
          />
        </Link>
      ))}
    </Box>
  );
};

export default ListPage;
