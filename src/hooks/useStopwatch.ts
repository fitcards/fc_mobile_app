import { useState } from "react";
import { useTimer } from "./useTimer";

// source: https://codesandbox.io/embed/6l1yz11nq3

// function millisToMinutesAndSeconds(millis) {
//   const minutes = Math.floor(millis / 60000);
//   const seconds = ((millis % 60000) / 1000).toFixed(0);
//   return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
// }

// function msToHMS(ms) {
//   // 1- Convert to seconds:
//   let seconds = ms / 1000;
//   // 2- Extract hours:
//   const hours = seconds / 3600; // parseInt(seconds / 3600); // 3,600 seconds in 1 hour
//   seconds = seconds % 3600; // seconds remaining after extracting hours
//   // 3- Extract minutes:
//   const minutes = seconds / 60; // parseInt(seconds / 60); // 60 seconds in 1 minute
//   // 4- Keep only seconds not extracted to minutes:
//   seconds = seconds % 60;
//   return `${Math.floor(hours)} hours and ${Math.floor(
//     minutes
//   )} minutes and ${seconds.toFixed()} seconds!`;
// }

export const useStopwatch = () => {
  const [laps, setLaps] = useState([]);
  const { isRunning, setIsRunning, secondsPassed } = useTimer();
  console.log("elapsedMs: ", secondsPassed);
  // const seconds = ((elapsedTime % 60000) / 1000).toFixed(0);
  // const { seconds } = msToHMS(elapsedTime);
  // console.log("elapsedTime: ", seconds);

  const handleReset = () => {
    // setIsRunning(false);
    // setElapsedTime(0);
    // setLaps([]);
  };

  const handleAddLap = () => {
    // const prevTotal =
    //   laps.length > 0 ? laps.reduce((acc, curr) => acc + curr, 0) : 0;
    // const currentLap = laps.length > 0 ? elapsedTime - prevTotal : elapsedTime;
    // isRunning && setLaps([...laps, currentLap]);
  };

  return {
    elapsedTime: secondsPassed,
    laps,
    addLap: () => handleAddLap(),
    resetTimer: () => handleReset(),
    startTimer: () => setIsRunning(true),
    pauseTimer: () => setIsRunning(false),
    stopwatchIsRunning: isRunning
  };
};
