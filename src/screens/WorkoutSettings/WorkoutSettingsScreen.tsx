import React from "react";
import { Text } from "react-native";
import { NavProps } from "../../models/navigation";
import { Screen } from "../../components/ui/Screen";

export const WorkoutSettingsScreen: React.FC<NavProps> = () => {
  return (
    <Screen>
      <Text>Settings: Ensure variety, number of workouts, recommend reps</Text>
    </Screen>
  );
};
