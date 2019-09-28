import React, { useContext, useEffect } from "react";
import { Text, Button, View } from "react-native";
import { NavProps } from "../../models/navigation";
import { Screen } from "../../components/ui/Screen";
// import { NavigationEvents } from "react-navigation";
import { WorkoutContext } from "../../components/providers/WorkoutProvider";
import { CardStack } from "../../components/ui/CardStack";

export const ActiveWorkoutScreen: React.FC<NavProps> = ({ navigation }) => {
  const {
    activeWorkout,
    currentRep,
    handleRepCompleted,
    endWorkout,
    workoutList
  } = useContext(WorkoutContext);

  useEffect(() => {
    if (!activeWorkout) {
      navigation.goBack();
    }
  }, [activeWorkout]);

  return (
    <Screen>
      <Button title="Finish Workout" onPress={() => endWorkout()} />
      <View>
        <Text>Current Rep: {currentRep}</Text>
        {/* <Text>{elapsedTime}</Text> */}
        <CardStack
          cards={workoutList.map(wkout => ({
            ...wkout,
            subTitle: wkout.reps ? `Reps: ${wkout.reps}` : undefined
          }))}
          handleLastCard={handleRepCompleted}
          handleCancel={() => endWorkout()}
        />
      </View>
    </Screen>
  );
};
