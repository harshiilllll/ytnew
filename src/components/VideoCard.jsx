import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckedCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrldemoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet }}) => {
  console.log(videoId, snippet)
  return (
    <Card>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?Card.high?.url} 
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
    </Card>
  )
}

export default VideoCard