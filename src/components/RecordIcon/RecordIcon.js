import React from "react";

import "./RecordIcon.css";

const RecordIcon = ({ rec }) => {
  return (
    <span className={`record-icon${rec ? " record-icon--rec" : ""}`}></span>
  );
};

export default RecordIcon;
