import React from "react";

const formatteTime = time => {
  const padZero = num => num.toString().padStart(2, "0");

  const hours = Math.floor(time / 360);
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${hours ? `${hours}:` : ""}${padZero(minutes)}:${padZero(seconds)}`;
};

const Timecodes = ({ timecodes, removeTimecode }) => {
  const renderTimecode = ({ id, start, end }) => {
    return (
      <div key={id}>
        {formatteTime(start)} - {formatteTime(end)}{" "}
        <button onClick={removeTimecode(id)}>remove</button>
      </div>
    );
  };

  return <div>{timecodes.map(renderTimecode)}</div>;
};

export default Timecodes;
