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

  const startRecordTime = React.useRef(undefined);
  const toggleRecord = React.useCallback(() => {
    const { player } = playerRef.current.getState();
    const currentTime = player.currentTime;
    if (typeof startRecordTime.current !== "undefined") {
      setTimecodes(oldTimecodes => [
        ...oldTimecodes,
        {
          id: Date.now().toString(),
          start: startRecordTime.current,
          end: currentTime
        }
      ]);
      startRecordTime.current = undefined;
      setIsRecording(false);
      playerRef.current.pause();
    } else {
      startRecordTime.current = currentTime;
      setIsRecording(true);
      playerRef.current.play();
    }
  }, []);

  const [timecodes, setTimecodes] = React.useState([]);
  const removeTimecode = id => () => {
    const newTimecodes = timecodes.filter(timecode => timecode.id !== id);
    setTimecodes(newTimecodes);
  };

  const [isRecording, setIsRecording] = React.useState(false);

  return (
    <div className="app">
      {video ? (
        <div className="app__container">
          <div className="app__video">
            <VideoPlayer
              timecodes={timecodes}
              url={video}
              innerRef={playerRef}
            />
          </div>
          <div className="app__actions">
            <Actions toggleRecord={toggleRecord} isRecording={isRecording} />
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
