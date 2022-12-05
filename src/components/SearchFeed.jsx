import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SerchFeed = () => {
  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setvideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        my={2}
        pl={2}
        sx={{
          color: "black",
          paddingLeft: { md: 0 },
          fontSize: "28px",
          fontWeight: "700",
        }}
      >
        Search Results for:
        <span style={{ color: "#FC1503" }}> {searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SerchFeed;
