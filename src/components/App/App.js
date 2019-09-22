import React from "react";
import "./App.css";

import SelectVideo from "../SelectVideo";
import VideoPlayer from "../VideoPlayer";
import Actions from "../Actions";
import Timecodes from "../Timecodes";

function App() {
  const [video, setVideo] = React.useState();
  const selectVideo = event => {
    setVideo(URL.createObjectURL(event.target.files[0]));
  };

  const playerRef = React.useRef(null);

  const [startRecordTime, setStartRecordTime] = React.useState(undefined);
  const toggleRecord = () => {
    const { player } = playerRef.current.getState();
    const currentTime = player.currentTime;
    if (typeof startRecordTime !== "undefined") {
      setTimecodes([
        ...timecodes,
        { id: Date.now().toString(), start: startRecordTime, end: currentTime }
      ]);
      setStartRecordTime(undefined);
      playerRef.current.pause();
    } else {
      setStartRecordTime(currentTime);
      playerRef.current.play();
    }
  };

  const [timecodes, setTimecodes] = React.useState([]);
  const removeTimecode = id => () => {
    const newTimecodes = timecodes.filter(timecode => timecode.id !== id);
    setTimecodes(newTimecodes);
  };

  return (
    <div className="app">
      {video ? (
        <div className="app__container">
          <div className="app__video">
            <VideoPlayer url={video} innerRef={playerRef} />
          </div>
          <div className="app__actions">
            <Actions toggleRecord={toggleRecord} />
          </div>
          <div className="app_timecodes">
            <Timecodes timecodes={timecodes} removeTimecode={removeTimecode} />
          </div>
        </div>
      ) : (
        <div className="app__select-file">
          <SelectVideo selectVideo={selectVideo} />
        </div>
      )}
    </div>
  );
}

export default App;
