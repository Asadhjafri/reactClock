import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const timeNow = new Date().toLocaleTimeString();

  const [time, setTime] = useState(timeNow);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
