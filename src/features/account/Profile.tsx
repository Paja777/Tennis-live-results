import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import { useAppSelector } from "../../store/configureStore";
const Profile = () => {
    const {username} = useAppSelector(state => state.account)
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 440,
    margin: "20px auto",
  };
  let date =new Date();
  
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid >
          <img height='150vh' src={avatar} style={{marginLeft: '30%'}} alt="avatar" />
        </Grid>
        <Typography variant='h5' sx={{ml: '42%'}}>{username}</Typography>
        <Typography variant='h5' color='grey' sx={{ml: '25%', mt:3}}>Profile information</Typography>
        <Paper elevation={7} sx={{}}>
        <Typography variant='h6' color='purple' sx={{ml: '23%', mt:3}}>{`Registration date ${date.toString().slice(0,9)}`}   </Typography>
        </Paper>
        <Paper elevation={7} sx={{}}>
        <Typography variant='h6' color='purple' sx={{ml: '23%', mt:3}}>{`favourite games`}   </Typography>
        </Paper>
        
        
        
      </Paper>
    </Grid>
  );
};

export default Profile;
