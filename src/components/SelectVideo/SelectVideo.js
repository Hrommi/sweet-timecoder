import React from "react";

const SelectVideo = ({ selectVideo }) => {
  return (
    <input
      type="file"
      accept="video/mp4,video/x-m4v,video/*"
      onChange={selectVideo}
    />
  );
};

export default SelectVideo;
