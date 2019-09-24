import { useState, useEffect } from "react";
import { useTimer } from "./useTimer";

// source: https://codesandbox.io/embed/6l1yz11nq3
export const useStopwatch = () => {
    const [laps, setLaps] = useState([]);
    const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer();
  
    const handleReset = () => {
      setIsRunning(false);
      setElapsedTime(0);
      setLaps([]);
    };
  
    const handleAddLap = () => {
      const prevTotal =
        laps.length > 0 ? laps.reduce((acc, curr) => acc + curr, 0) : 0;
      const currentLap = laps.length > 0 ? elapsedTime - prevTotal : elapsedTime;
      isRunning && setLaps([...laps, currentLap]);
    };
  
    return {
      elapsedTime: elapsedTime.toFixed(1),
      laps,
      addLap: () => handleAddLap(),
      resetTimer: () => handleReset(),
      startTimer: () => setIsRunning(true),
      stopTimer: () => setIsRunning(false),
      isRunning
    };
  };