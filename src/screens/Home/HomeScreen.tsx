import React, { useContext, useEffect } from "react";
import { Button, View } from "react-native";
import { AppRoutes } from "../../constants/routes";
import { NavProps } from "../../models/navigation";
import { WorkoutContext } from "../../providers/WorkoutProvider";

export const HomeScreen: React.FC<NavProps> = ({ navigation }) => {
  const { activeWorkout, startWorkout } = useContext(WorkoutContext);

  useEffect(() => {
    if (activeWorkout) {
      navigation.navigate(AppRoutes.ACTIVE_WORKOUT);
    }
  }, [activeWorkout]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => startWorkout()} title="Start Workout" />
      <Button
        onPress={() => navigation.navigate(AppRoutes.WORKOUT_SETTINGS)}
        title="Settings"
      />
    </View>
  );
};
