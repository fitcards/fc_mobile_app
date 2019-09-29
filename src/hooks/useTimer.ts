import { useEffect, useState, useRef } from "react";

// source: https://codesandbox.io/embed/6l1yz11nq3
export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  // const [elapsedMs, setElapsedMs] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const secondsPassed = useRef(0);

  useEffect(() => {
    if (!isRunning) {
      if (secondsPassed.current !== 0) {
        setTime(new Date().toLocaleTimeString());
        secondsPassed.current = 0;
      }
      return;
    }
    const timeout = setTimeout(() => {
      const date = new Date();
      secondsPassed.current = secondsPassed.current + 1;
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [time, isRunning]);

  return {
    isRunning,
    setIsRunning,
    // elapsedMs,
    secondsPassed: secondsPassed.current
    // setElapsedTime
  };
};
