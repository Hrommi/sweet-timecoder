import React from "react";
import { Card, List, Button } from "antd";
import "antd/es/card/style/css";
import "antd/es/list/style/css";
import "antd/es/button/style/css";

const formatteTime = time => {
  const padZero = num => num.toString().padStart(2, "0");

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = Math.floor(time - hours * 3600 - minutes * 60);

  return `${hours ? `${hours}:` : ""}${padZero(minutes)}:${padZero(seconds)}`;
};

const Timecodes = ({ timecodes, removeTimecode }) => {
  const renderTimecode = ({ id, start, end }) => {
    return (
      <List.Item key={id}>
        <List.Item.Meta
          description={`${formatteTime(start)} - ${formatteTime(end)}`}
        ></List.Item.Meta>
        <Button
          type="link"
          size="small"
          icon="close-circle"
          onClick={removeTimecode(id)}
        />
      </List.Item>
    );
  };

  return (
    <Card size="small" title="Timecodes">
      <List size="small" dataSource={timecodes} renderItem={renderTimecode} />
    </Card>
  );
};

export default Timecodes;
