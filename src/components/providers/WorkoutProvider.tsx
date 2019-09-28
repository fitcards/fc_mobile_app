import React, { useState, useEffect } from "react";
import { Workout } from "../../models/workout";
import { useWorkoutList } from "../../hooks/useWorkoutList";

interface WorkoutContextProps {
  activeWorkout: boolean;
  currentRep: number;
  workoutList: Workout[];
  startWorkout: () => void;
  endWorkout: () => void;
  handleRepCompleted: () => void;
}

export const WorkoutContext = React.createContext<WorkoutContextProps>({
  activeWorkout: false,
  handleRepCompleted: () => null,
  startWorkout: () => null,
  endWorkout: () => null,
  workoutList: [],
  currentRep: 0
});

export const WorkoutProvider: React.FC = ({ children }) => {
  const [activeWorkout, setActiveWorkout] = useState(false);
  const { workoutList, newWorkoutList } = useWorkoutList();
  const [currentRep, setCurrentRep] = useState(0);

  useEffect(() => {
    if (activeWorkout) {
      newWorkoutList();
    }
  }, [activeWorkout]);

  const startWorkout = () => {
    setCurrentRep(currentRep + 1);
    setActiveWorkout(true);
  };

  const endWorkout = () => {
    setCurrentRep(0);
    setActiveWorkout(false);
  };

  const handleRepCompleted = () => {
    setCurrentRep(currentRep + 1);
  };

  return (
    <WorkoutContext.Provider
      value={{
        activeWorkout,
        currentRep,
        handleRepCompleted,
        startWorkout,
        endWorkout,
        workoutList
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
