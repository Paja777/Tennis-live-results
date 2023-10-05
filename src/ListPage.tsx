import { useEffect, useState } from "react";
import { FetchData } from "./fetch";
import { Typography } from "@mui/material";

const ListPage = () => {
  const [matches, setMatches] = useState<string[] | null>(null);

  useEffect(() => {
    FetchData().then((data) => matchMaker(data));
  }, []);

  const matchMaker = (data: any) => {
    const events: { string: string | number }[] = data
      .map((tour: any) => {
        return tour.Events;
      })
      .flat();

    const teams: string[] = events.map((event: any) => {
      return `Match: ${event.T1[0].Nm} vs ${event.T2[0].Nm}`;
    });
    setMatches(teams);

    console.log(teams);
  };

  if (matches === null) return <Typography variant='h2'>...Loading</Typography>

  

  return (
    <>
    
    {matches?.map(match =>( 
      <Typography key={match} variant='h5'>{match}</Typography>
    ))}
    </>
  );
};

export default ListPage;
