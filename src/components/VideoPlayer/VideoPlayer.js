import React from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  ProgressControl
} from "video-react";
import Style from "style-it";

import "video-react/dist/video-react.css";
import "./VideoPlayer.css";

const getCurrentPercent = (time, duration) => {
  const percent = (time / duration) * 100;
  return percent.toFixed(4);
};

const VideoPlayer = ({ timecodes, url, innerRef }) => {
  const lineBackgrounds = React.useMemo(() => {
    if (!innerRef.current) {
      return "none";
    }
    const { player } = innerRef.current.getState();
    const duration = player.duration;
    const opacityBackground = "rgba(0, 0, 0, 0)";
    const coloredBackground = "rgba(255, 0, 0, 0.5)";
    return timecodes
      .map(timecode => {
        const startPercent = `${getCurrentPercent(timecode.start, duration)}%`;
        const endPercent = `${getCurrentPercent(timecode.end, duration)}%`;
        return `linear-gradient(to right,${opacityBackground} 0%,${opacityBackground} ${startPercent},${coloredBackground} ${startPercent},${coloredBackground} ${endPercent},${opacityBackground} ${endPercent},${opacityBackground} 100%)`;
      })
      .join(",");
  }, [timecodes, innerRef]);

  return (
    <>
      <Style>
        {`.video-player__progress .video-react-load-progress:after {
          background: ${lineBackgrounds};
        }`}
      </Style>
      <Player ref={innerRef}>
        <source src={url} />
        <ControlBar autoHide={false}>
          <ReplayControl seconds={5} order={2.1} />
          <ForwardControl seconds={5} order={3.1} />
          <ProgressControl className="video-player__progress" order={5.1} />
        </ControlBar>
      </Player>
    </>
  );
};

export default VideoPlayer;
