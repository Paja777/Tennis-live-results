import { Stack, Typography } from "@mui/material";


interface Props{
    durationTime: string | undefined;
}

const Ribbon = ({durationTime}: Props) => {
  return (
    <Stack
      direction="row"
      sx={{
        
        height: "6vh",
        justifyContent: "center",
        pb: 4
      }}
    >
      
      <Typography variant='h6' fontWeight="bolder" color='text.secondary' sx={{pb: 2, mt: 3, }}>Duration time:  {durationTime? durationTime : '02 : 30'} </Typography>
    </Stack>
  );
};

export default Ribbon;
