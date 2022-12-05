import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      position: "sticky",
      top: "0",
      backgroundColor: "#000",
      justifyContent: "space-between",
      zIndex: "100",
      paddingInline: { xs: "12px", md: "16px", lg: "22px" },
      paddingBlock: { xs: "18px", md: "20px", lg: "28px" },
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
