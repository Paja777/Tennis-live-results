import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "../store/configureStore";
import DropDown from "../components/DropDown";

const Navbar = () => {
  const { userLoggedIn, username } = useAppSelector((state) => state.account);
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      spacing={2}
      p={2}
      sx={{
        position: "sticky",
        top: "0",
        px: 3,
        justifyContent: "space-between",
        zIndex: 25,
        backgroundColor: "white",
      }}
    >
      <Link
        to={userLoggedIn ? "/listpage" : "/logreg"}
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "rgb(23, 70, 219)",
        }}
      >
        <Typography variant="h2">{`<pajaResults/>`}</Typography>
      </Link>
      <Stack direction='row'>
      <IconButton>
        <AccountCircleIcon
          sx={{ fontSize: "44px", color: "rgb(23, 70, 219)" }}
        />
      </IconButton>

      <Stack>
        <Typography
          variant="h5"
          sx={{
            textDecoration: "none",
            color: "rgb(23, 70, 219)",
            mr: 4,
            mb: 0,
            mt:2
          }}
        >
          {userLoggedIn ? `Welcome ${username}` : " Register"}
        </Typography>

        <DropDown name={userLoggedIn ? `My profile` : ""} />
      </Stack>
      </Stack>
      </Stack>
    
  );
};

export default Navbar;
