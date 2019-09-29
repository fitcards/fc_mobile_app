import React, { useState } from "react";
import { useWorkoutList } from "../hooks/useWorkoutList";
import { Workout } from "../models/workout";

interface WorkoutContextProps {
  activeWorkout: boolean;
  setActiveWorkout: (isActive: boolean) => void;
  currentRep: number;
  setCurrentRep: (count: number) => void;
  workoutList: Workout[];
  startWorkout: () => void;
  endWorkout: () => void;
}

export const WorkoutContext = React.createContext<WorkoutContextProps>({
  activeWorkout: false,
  setActiveWorkout: () => null,
  setCurrentRep: () => null,
  startWorkout: () => null,
  endWorkout: () => null,
  workoutList: [],
  currentRep: 0
});

export const WorkoutProvider: React.FC = ({ children }) => {
  const [activeWorkout, setActiveWorkout] = useState(false);
  const { workoutList, newWorkoutList, resetWorkoutList } = useWorkoutList();
  const [currentRep, setCurrentRep] = useState(0);

  const startWorkout = () => {
    newWorkoutList();
    setCurrentRep(currentRep + 1);
    setActiveWorkout(true);
  };

  const endWorkout = () => {
    setCurrentRep(0);
    resetWorkoutList();
    setActiveWorkout(false);
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
        setCurrentRep
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
