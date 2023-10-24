import { Box, Card, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/configureStore";
import { addData } from "../features/mainMatch/mainMatchSlice";
interface Props {
  player1: string;
  player2: string;
  sets: string;
  stage: string;
}
const ListItem = ({ player1, player2, stage, sets }: Props) => {
  const dispatch = useAppDispatch();
  const name = {player1, player2};
  return (
    <Container
      component={Card}
      sx={{
        height: "20vh",
        backgroundColor: "white",
        opacity: 0.9,
        justifyContent: "center",
        mt: 3,
        width: "70%",
        ml: "15%",
      }}
    >
      <Link to="/" onClick={() => dispatch(addData({stage, name}))} style={{ textDecoration: "none", width: "70%" }}>
        <Stack direction="row" sx={{ mt: 3 }}>
          <Box sx={{}}>
            <img
              height="100px"
              width="130px"
              src="https://media.kvue.com/assets/generic/images/watchLive/watchLive_1920x1080.jpg"
              alt="dummyPicture"
            />
          </Box>

          <Box sx={{ p: 4 }}>
            <Typography
              variant="h6"
              color="grey"
              fontWeight="bolder"
              sx={{ opacity: 1, zIndex: 4 }}
            >
              {stage}
            </Typography>
          </Box>
          <Box sx={{ p: 4 }}>
            <Typography
              variant="h6"
              color="rgb(23, 70, 219)"
              fontWeight="bolder"
            >
              {player1}
            </Typography>
          </Box>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" color="grey" fontWeight="bolder">
              {sets}
            </Typography>
          </Box>
          <Box sx={{ p: 4 }}>
            <Typography
              variant="h6"
              color="rgb(23, 70, 219)"
              fontWeight="bolder"
            >
              {player2}
            </Typography>
          </Box>
        </Stack>
      </Link>
    </Container>
  );
};

export default ListItem;
