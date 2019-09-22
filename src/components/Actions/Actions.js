import React from "react";

import RecordIcon from "../RecordIcon";

const Actions = ({ toggleRecord, isRecording }) => {
  return (
    <div>
      <button type="button" onClick={toggleRecord}>
        Record <RecordIcon rec={isRecording} />
      </button>
    </div>
  );
};

export default Actions;
