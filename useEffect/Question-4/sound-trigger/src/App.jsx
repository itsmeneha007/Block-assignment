import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);
  const intervalRef = useRef(null);
  const soundUrl = "https://www.soundjay.com/button/beep-07.wav";
  const audioRef = useRef(new Audio(soundUrl));

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  useEffect(() => {
    if (seconds === targetTime && running) {
      audioRef.current.play().catch(() => {
        console.log("Sound played (or simulated in console)");
      });
      setRunning(false); 
    }
  }, [seconds, targetTime, running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div className="app">
      <h1>React Stopwatch with Sound</h1>

      <div className="timer">{seconds} sec</div>

      <div className="controls">
        <button onClick={handleStart} disabled={running}>
          Start
        </button>
        <button onClick={handleStop} disabled={!running}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div className="target-input">
        <label>Set Target Time (seconds): </label>
        <input
          type="number"
          value={targetTime}
          onChange={(e) => setTargetTime(Number(e.target.value))}
          min="1"
        />
      </div>
    </div>
  );
}

export default App;
