import React, { useState } from "react";

interface WorkoutContextProps {
  activeWorkout: boolean;
  setActiveWorkout: (isActive: boolean) => void;
}

export const WorkoutContext = React.createContext<WorkoutContextProps>({
  activeWorkout: false,
  setActiveWorkout: () => null
});

export const WorkoutProvider: React.FC = ({ children }) => {
  const [activeWorkout, setActiveWorkout] = useState(false);

  return (
    <WorkoutContext.Provider
      value={{
        activeWorkout,
        setActiveWorkout
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};
