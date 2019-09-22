import React from "react";

const Actions = ({ toggleRecord }) => {
  return (
    <div>
      <button type="button" onClick={toggleRecord}>
        Record
      </button>
    </div>
  );
};

export default Actions;
