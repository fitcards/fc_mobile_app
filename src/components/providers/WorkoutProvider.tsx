import React, { useState, useEffect } from "react";
import { Workout } from "../../models/workout";
import { useWorkoutList } from "../../hooks/useWorkoutList";

interface WorkoutContextProps {
  activeWorkout: boolean;
  workoutList: Workout[];
  setActiveWorkout: (isActive: boolean) => void;
}

export const WorkoutContext = React.createContext<WorkoutContextProps>({
  activeWorkout: false,
  setActiveWorkout: () => null,
  workoutList: []
});

export const WorkoutProvider: React.FC = ({ children }) => {
  const [activeWorkout, setActiveWorkout] = useState(false);
  const { workoutList, newWorkoutList } = useWorkoutList();

  useEffect(() => {
    if (activeWorkout) {
      newWorkoutList();
    }
  }, [activeWorkout]);

  return (
    <WorkoutContext.Provider
      value={{
        activeWorkout,
        setActiveWorkout,
        workoutList
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
