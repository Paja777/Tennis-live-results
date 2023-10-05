import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      p={2}
      sx={{
        position: "sticky",
        background: "grey",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h2">{`<pajaResults>`}</Typography>
      </Link>
      <Link to="/account" style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5">account register</Typography>
      </Link>
    </Stack>
  );
};

export default Navbar;
