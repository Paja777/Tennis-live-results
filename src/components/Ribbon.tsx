import { Stack, Typography } from "@mui/material";
import { useAppSelector } from "../store/configureStore";



const Ribbon = () => {
  const {duration} = useAppSelector(state => state.mainMatch)
  return (
    <Stack
      direction="row"
      sx={{
        
        height: "6vh",
        justifyContent: "center",
        pb: 4
      }}
    >
      
      <Typography variant='h6' fontWeight="bolder" color='text.secondary' sx={{pb: 2, mt: 3, }}>Duration time:  {duration? duration : '02 : 30'} </Typography>
    </Stack>
  );
};

export default Ribbon;
