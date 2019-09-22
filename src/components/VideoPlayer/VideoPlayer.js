import React from "react";
import { Player, ControlBar, ReplayControl, ForwardControl } from "video-react";

import "../../../node_modules/video-react/dist/video-react.css";

const VideoPlayer = ({ url, innerRef }) => {
  return (
    <Player ref={innerRef}>
      <source src={url} />
      <ControlBar autoHide={false}>
        <ReplayControl seconds={5} order={2.1} />
        <ForwardControl seconds={5} order={3.1} />
      </ControlBar>
    </Player>
  );
};

export default VideoPlayer;
