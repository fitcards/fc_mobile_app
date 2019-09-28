import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { NavProps } from "../../models/navigation";
import { Screen } from "../../components/ui/Screen";
import { WorkoutContext } from "../../components/providers/WorkoutProvider";

export const NewWorkoutScreen: React.FC<NavProps> = ({ navigation }) => {
  const { activeWorkout, setActiveWorkout } = useContext(WorkoutContext);
  return (
    <Screen>
      <Text>New Workout</Text>
      <Text>Active Workout: {activeWorkout.toString()}</Text>
      <Button title="Start Workout" onPress={() => setActiveWorkout(true)} />
    </Screen>
  );
};
