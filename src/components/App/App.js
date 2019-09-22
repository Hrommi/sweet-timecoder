import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__select-file">
        <input type="file" />
      </div>
      <div className="app__container">
        <div className="app__video">Video</div>
        <div className="app__actions">Actions</div>
        <div className="app_timecodes">Timecoded</div>
      </div>
    </div>
  );
}

export default App;
