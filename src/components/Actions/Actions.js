import React from "react";

import RecordIcon from "../RecordIcon";

import { useKeyPress } from "../../hooks/useKeyPress";

const Actions = ({ toggleRecord, isRecording }) => {
  const handleRecord = () => {
    toggleRecord();
  };

  const recordPress = useKeyPress("Enter");
  React.useEffect(() => {
    if (recordPress) {
      toggleRecord();
    }
  }, [recordPress]);

  return (
    <div>
      <button type="button" onClick={handleRecord}>
        Record <RecordIcon rec={isRecording} />
      </button>
    </div>
  );
};

export default Actions;
