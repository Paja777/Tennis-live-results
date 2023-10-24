import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchData, fetchImages } from "../utils/fetch";
import { parseTimestamp } from "../utils/utilFunctions";
import { playersArray } from "../utils/playersArray";
import Ribbon from "../components/Ribbon";
import MainMatch from "../features/mainMatch/MainMatch";
import ScoreField from "../components/ScoreField";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { addData, changeTextSliderColor, setImage1 } from "../features/mainMatch/mainMatchSlice";
import Footer from "./Footer";
import Modal from "../components/Modal";

const HomePage = () => {
  const {userLoggedIn} = useAppSelector(state => state.mainMatch);
  const dispatch = useAppDispatch();
  dispatch(changeTextSliderColor("rgb(179, 237, 97)"));
  const dataExctractor = (data: any) => {
    const onServe: number = data[0].Events[0].Esrv;
    console.log(onServe);

    const points = {
      player1: data[0].Events[0].Tr1G,
      player2: data[0].Events[0].Tr2G,
    };
    console.log(points);

    const finishedSets = {
      p1s1: data[0].Events[0].Tr1S1 || null,
      p2s1: data[0].Events[0].Tr2S1 || null,
      p1s2: data[0].Events[0].Tr1S2 || null,
      p2s2: data[0].Events[0].Tr2S2 || null,
      p1s3: data[0].Events[0].Tr2S3 || null,
      p2s3: data[0].Events[0].Tr2S3 || null,
      p1sum: data[0].Events[0].Tr1 || null,
      p2sum: data[0].Events[0].Tr2 || null,
    };

    const name = {
      player1: data[0].Events[0].T1[0].Nm,
      player2: data[0].Events[0].T2[0].Nm,
    };

    const time: string = data[0].Events[0].Esd.toString();
    const timeFormated: string = parseTimestamp(time);
    const duration: string = timeFormated;

    function rankFinder(player: any, name: string | undefined) {
      if (
        player.name.includes(name?.split(" ")[0]) &&
        player.name.includes(name?.split(" ")[1])
      ) {
        return player.ranking;
      }
    }
    const playerRank1 = playersArray.filter((player: any) =>
      rankFinder(player, name?.player1)
    );
    const playerRank2 = playersArray.filter((player: any) =>
      rankFinder(player, name?.player2)
    );
    const rank = {
      player1: playerRank1[0].ranking,
      player2: playerRank2[0].ranking,
    };
    dispatch(addData({ onServe, points, finishedSets, name, duration }));
  };

  useEffect(() => {
    FetchData()
      .then((data) => {
        if (data) {
          dataExctractor(data);
        }
      })
      .catch((error) => console.log(error));
  }, [dataExctractor]);

  useEffect(() => {
    fetchImages()
      .then((data) => {
        if (data) dispatch(setImage1(data.url));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Modal />
      <Stack>

        { userLoggedIn && <Link
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
        </Link>}
        <Ribbon />
        <MainMatch />
      </Stack>
      <Footer />
    </>
  );
};

export default HomePage;
