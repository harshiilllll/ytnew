import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      top: "0",
      backgroundColor: "#000",
      justifyContent: "space-between",
      zIndex: "100",
    }}
  >
    <Link to="/" style={{ alignItems: "center", display: "flex" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        variant={{ sm: "body1", md: "subtitle1" }}
        sx={{
          display: { xs: "none", md: "block" },
          color: "white",
          fontSize: "28px",
          pl: "12px",
          fontWeight: "600",
          textTransform: "uppercase",
        }}
      >
        Youvideos
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
