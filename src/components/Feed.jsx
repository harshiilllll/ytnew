import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
// import { borderRight } from "@mui/system";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box
        className="feed"
        sx={{
          overflowY: "scroll",
          height: "90vh",
          flex: 2,
          paddingLeft: { xs: 0, lg: "70px" },
        }}
      >
        <Typography
          my={2}
          pl={2}
          sx={{
            color: "white",
            paddingLeft: { md: 0 },
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          {selectedCategory}
          <span style={{ color: "#FC1503" }}> Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
