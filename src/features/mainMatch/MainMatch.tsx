import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import avatar from "../src/assets/avatar.jpg";
import ball from "../../assets/ball.jpg";
import Novak from "../../assets/Novak.webp";
import Nadal from "../../assets/nadal.png";
import { useAppSelector } from "../../store/configureStore";
import ScoreField from "../../components/ScoreField";



const MainMatch = () => {
  
  const allData = useAppSelector(state => state.mainMatch);
  const {userLoggedIn} = useAppSelector(state => state.account);
  const data = userLoggedIn ? allData : null;
  
  return (
    <>
    <Stack direction="row" > 
      <Box sx={{ width: 220, maxHeight: 450 }}>
        <Typography
          variant="h6"
          fontWeight='bolder'
          sx={{
            ml: 13,
            my: "40%",
            mt: "50%", 
            mr: "10%",
            color: "text.secondary",
          }}
        >
          {data?.rank? `player rank: ${data?.rank.player1}` : 'player rank: 1'}
        </Typography>
      </Box>

      <Card sx={{ width: 300, maxHeight: 330, opacity: "1", mt: 0, ml: 0 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              height: 280,
              width: 300,
              backgroundSize: "contain",
              bgcolor: "primary.light",
            }}
            src={data?.image ? data.image.player1 : Novak}
            alt="player1"
          />
          <CardContent>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ ml: "30%" }}
            >
              {data? data.name.player1 : 'Novak Djokovic'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Box sx={{ width: 250, maxHeight: 450, borderRight: '1px solid grey' }}>
        <Stack direction="row" sx={{ mt: "40%", ml: "15%" }}>
          {data?.onServe === 1 && <CardMedia
            component="img"
            sx={{
              height: 35,
              width: 35,
              mr: "20%",
              mt: "15%",
              backgroundSize: "contain",
              bgcolor: "primary.light",
            }}
            image={ball}
          />}
          <Typography variant="h1" sx={{ color: "rgb(39, 96, 219)", mr:2, justifyContent:'center' }}>
            {data?.points? data.points.player1 : '40'}
          </Typography>
        </Stack>
        <Typography
          variant="h4"
          sx={{
            ml: "73%",
            mt: "34%",
            fontWeight: "bolder",
            color: "rgb(23, 70, 219)",
          }}
        >
          {data? data.finishedSets.p1sum : '2'}
        </Typography>
      </Box>

      {/* second player card from here */}

      <Box sx={{ width: 250, maxHeight: 450 }}>
        <Stack direction="row" sx={{ mt: "40%", ml: "20%" }}>
          <Typography variant="h1" sx={{ color: "rgb(39, 96, 219)" }}>
            {data? data.points.player1 : '0'}
          </Typography>
          {data?.onServe === 2 && <CardMedia
            component="img"
            sx={{
              height: 35,
              width: 35,
              ml: "20%",
              mt: "15%",
              backgroundSize: "contain",
              bgcolor: "primary.light",
            }}
            image={ball}
          />}
        </Stack>

        <Typography
          variant="h4"
          sx={{
            mt: "34%",
            ml: "15%",
            fontWeight: "bolder",
            color: "rgb(23, 70, 219)",
          }}
        >
          {data? data.finishedSets.p2sum : '0'}
        </Typography>
      </Box>

      <Card sx={{ width: 300, maxHeight: 330, opacity: "1", mt: 0, ml: 0 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              height: 280,
              width: 300,
              backgroundSize: "contain",
              bgcolor: "primary.light",
            }}
            src={data?.image ? data.image.player1 : Nadal}
            alt="player2"
          />
          <CardContent>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ ml: "30%" }}
            >
              {data? data.name.player2 : "Rafael Nadal"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Box sx={{ width: 250, maxHeight: 450 }}>
        <Typography
          variant="h6"
          fontWeight='bolder'
          sx={{
            ml: 7,
            my: "40%",
            mt: "40%",
            mr: "30%",
            color: "text.secondary",
          }}
        >
          {data?.rank? `player rank: ${data.rank?.player2}` : 'player rank: 123'}
        </Typography>
      </Box>
    </Stack>
    <ScoreField />
    </>
  );
};

export default MainMatch;
