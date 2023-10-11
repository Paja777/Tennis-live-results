import { IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      p={2}
      sx={{
        position: "sticky",
        top: "0",
        justifyContent: "space-between",
        zIndex: 25,
        backgroundColor: 'white'
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" , textDecoration: 'none', color: 'rgb(23, 70, 219)'}}>
        <Typography variant="h2">{`<pajaResults/>`}</Typography>
      </Link>
      <Link to="/account" style={{ display: "flex", alignItems: "center", textDecoration:'none' }}>
        <IconButton><AccountCircleIcon sx={{fontSize: '44px', color: 'rgb(23, 70, 219)'}}/></IconButton>
        <Typography variant="h5" sx={{textDecoration:'none', color: 'rgb(23, 70, 219)', mr: 4}}>My account</Typography>
        
      </Link>
    </Stack>
  );
};

export default Navbar;
