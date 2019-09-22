import React from "react";
import { Player } from "video-react";

import "../../../node_modules/video-react/dist/video-react.css";

const VideoPlayer = ({ url, innerRef }) => {
  return (
    <Player ref={innerRef}>
      <source src={url} />
    </Player>
  );
};

export default VideoPlayer;
