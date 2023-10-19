import { Box, Card, Container, Stack, Typography } from "@mui/material";
interface Props {
  player1: string;
  player2: string;
  sets: string;
  stage: string;
}
const ListItem = ({ player1, player2, stage, sets }: Props) => {
  return (
    <Container
    component={Card}
      sx={{
        height: "30vh",
        backgroundColor: "white",
        opacity: 0.9,
        justifyContent: "center",
        mt:3,
        width: '70%',
        ml: "15%",
    
      }}
    >
      <Stack direction="row" sx={{ mt: 3,  }} >
        <Box sx={{ }}>
          <img height= '160px' width="210px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgRXu0dxIvbb63TkywEE7hYpH22vbV5woEGg&usqp=CAU" alt='dummyPicture'/>
        </Box>

        <Box sx={{ p:7, }}>
          <Typography variant="h6" color='grey' fontWeight='bolder' sx={{opacity:1, zIndex:4}}>{stage}</Typography>
        </Box>
        <Box sx={{ p:7, }}>
          <Typography variant="h5" color='rgb(23, 70, 219)' fontWeight='bolder'>{player1}</Typography>
        </Box>
        <Box sx={{ p:7, }}>
          <Typography  variant="h4" color='grey' fontWeight='bolder'>{sets}</Typography>
        </Box>
       <Box sx={{ p:7, }}>
          <Typography variant="h5" color='rgb(23, 70, 219)' fontWeight='bolder'>{player2}</Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default ListItem;
