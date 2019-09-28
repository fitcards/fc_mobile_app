import React, { useContext, useEffect } from "react";
import { Text, Button } from "react-native";
import { NavProps } from "../../models/navigation";
import { Screen } from "../../components/ui/Screen";
import { WorkoutContext } from "../../components/providers/WorkoutProvider";
import { AppRoutes } from "../../constants/routes";

export const NewWorkoutScreen: React.FC<NavProps> = ({ navigation }) => {
  const { activeWorkout, startWorkout, workoutList } = useContext(
    WorkoutContext
  );
  console.log("workoutList: ", workoutList);

  useEffect(() => {
    if (activeWorkout) {
      navigation.navigate(AppRoutes.ACTIVE_WORKOUT);
    }
  }, [activeWorkout]);
  return (
    <Screen>
      <Button title="Start Workout" onPress={() => startWorkout()} />
      <Text>Settings: Ensure variety, number of workouts, recommend reps</Text>
    </Screen>
  );
};
