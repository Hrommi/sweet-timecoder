import React from "react";
import { Card, Button } from "antd";
import "antd/es/card/style/css";
import "antd/es/button/style/css";

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
  }, [recordPress, toggleRecord]);

  return (
    <Card size="small" title="Actions">
      <Button
        type="danger"
        icon={isRecording ? "pause-circle" : "play-circle"}
        onClick={handleRecord}
      >
        Record
      </Button>
    </Card>
  );
};

export default Actions;
