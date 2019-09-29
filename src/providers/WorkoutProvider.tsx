import React, { useState } from "react";
import { useWorkoutList } from "../hooks/useWorkoutList";
import { Workout } from "../models/workout";
import { useStopwatch } from "../hooks/useStopwatch";

interface WorkoutContextProps {
  activeWorkout: boolean;
  setActiveWorkout: (isActive: boolean) => void;
  currentRep: number;
  setCurrentRep: (count: number) => void;
  workoutList: Workout[];
  startWorkout: () => void;
  endWorkout: () => void;
  elapsedTime: string;
}

export const WorkoutContext = React.createContext<WorkoutContextProps>({
  activeWorkout: false,
  setActiveWorkout: () => null,
  setCurrentRep: () => null,
  startWorkout: () => null,
  endWorkout: () => null,
  workoutList: [],
  currentRep: 0,
  elapsedTime: ""
});

export const WorkoutProvider: React.FC = ({ children }) => {
  const [activeWorkout, setActiveWorkout] = useState(false);
  const { workoutList, newWorkoutList, resetWorkoutList } = useWorkoutList();
  const { startTimer, pauseTimer, elapsedTime } = useStopwatch();
  const [currentRep, setCurrentRep] = useState(0);

  const startWorkout = () => {
    newWorkoutList();
    setCurrentRep(currentRep + 1);
    setActiveWorkout(true);
    startTimer();
  };

  const endWorkout = () => {
    setCurrentRep(0);
    resetWorkoutList();
    setActiveWorkout(false);
    pauseTimer();
  };

  return (
    <WorkoutContext.Provider
      value={{
        activeWorkout,
        currentRep,
        startWorkout,
        endWorkout,
        workoutList,
        setActiveWorkout,
        setCurrentRep,
        elapsedTime
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
