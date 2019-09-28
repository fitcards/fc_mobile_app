import React, { useContext, useEffect } from "react";
import { Text, Button } from "react-native";
import { NavProps } from "../../models/navigation";
import { Screen } from "../../components/ui/Screen";
import { NavigationEvents } from "react-navigation";
import { WorkoutContext } from "../../components/providers/WorkoutProvider";

export const ActiveWorkoutScreen: React.FC<NavProps> = ({ navigation }) => {
  const { activeWorkout, setActiveWorkout } = useContext(WorkoutContext);

  useEffect(() => {
    if (!activeWorkout) {
      navigation.goBack();
    }
  }, [activeWorkout]);

  return (
    <Screen>
      <NavigationEvents />
      <Text>ACTIVE WORKOUT</Text>
      <Button title="Finish Workout" onPress={() => setActiveWorkout(false)} />
    </Screen>
  );
};
