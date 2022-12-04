import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh" >
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(61,51,255,1) 13%, rgba(0,107,110,1) 43%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard marginTop="-110px" channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
