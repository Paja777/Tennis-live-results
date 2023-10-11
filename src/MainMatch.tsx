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
import ball from "../src/assets/ball.jpg";
import Novak from "../src/assets/Novak.webp";
import Nadal from "../src/assets/nadal.png";

interface Props {
  playerImage: string | undefined;
  playerName:{ player1: string,  player2: string} | undefined;
  rank: {player1: number, player2: number} | undefined;
  onServe: number | undefined;
  points: {player1: string, player2: string} | undefined;
  finishedSets: {
    p1s1: string;
    p2s1: string;
    p1s2: string | undefined,
    p2s2: string | undefined,
    p1s3: string | undefined,
    p2s3: string | undefined,
    p1sum: string | undefined,
    p2sum: string | undefined,
  } | undefined;
}
const MainMatch = ({ playerImage, playerName, rank, onServe, points, finishedSets }: Props) => {
  // const rankBoxLeftStyle = {
  //   ml: 13,
  //   my: "40%",
  //   mt: "50%",
  //   mr: "10%",
  //   color: "text.secondary",
  // };
  return (
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
          {rank? `player rank: ${rank.player1}` : 'player rank: 1'}
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
            src={playerImage ? playerImage : Novak}
            alt="player"
          />
          <CardContent>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ ml: "30%" }}
            >
              {playerName? playerName.player1 : 'Novak Djokovic'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Box sx={{ width: 250, maxHeight: 450, borderRight: '1px solid grey' }}>
        <Stack direction="row" sx={{ mt: "40%", ml: "15%" }}>
          {onServe === 1 && <CardMedia
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
            {points? points.player1 : '40'}
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
          {finishedSets? finishedSets.p1sum : '2'}
        </Typography>
      </Box>

      {/* Ovde pocinje desna kartica */}

      <Box sx={{ width: 250, maxHeight: 450 }}>
        <Stack direction="row" sx={{ mt: "40%", ml: "20%" }}>
          <Typography variant="h1" sx={{ color: "rgb(39, 96, 219)" }}>
            {points? points.player1 : '0'}
          </Typography>
          {onServe === 2 && <CardMedia
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
          {finishedSets? finishedSets.p2sum : '0'}
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
            src={playerImage ? playerImage : Nadal}
            alt="player"
          />
          <CardContent>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ ml: "30%" }}
            >
              {"Rafael Nadal"}
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
          {rank? `player rank: ${rank.player2}` : 'player rank: 123'}
        </Typography>
      </Box>
    </Stack>
  );
};

export default MainMatch;
