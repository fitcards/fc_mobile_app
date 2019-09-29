import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { NavProps } from "../../models/navigation";
import { Screen } from "../../components/ui/Screen";
import { NavigationEvents } from "react-navigation";
import { WorkoutContext } from "../../providers/WorkoutProvider";
import { CardStack } from "../../components/ui/CardStack";

export const ActiveWorkoutScreen: React.FC<NavProps> = ({ navigation }) => {
  const {
    activeWorkout,
    currentRep,
    setCurrentRep,
    setActiveWorkout,
    endWorkout,
    workoutList
  } = useContext(WorkoutContext);

  const handleRepCompleted = () => {
    setActiveWorkout(false);
  };

  const handleAnotherRep = () => {
    setCurrentRep(currentRep + 1);
    setActiveWorkout(true);
  };

  const handleEndWorkout = () => {
    endWorkout();
    navigation.goBack();
  };

  return (
    <Screen>
      <NavigationEvents
        onWillBlur={() => {
          if (activeWorkout) {
            endWorkout();
          }
        }}
      />
      {activeWorkout ? (
        <>
          <Text>Current Rep: {currentRep}</Text>
          <CardStack
            cards={workoutList.map(wkout => ({
              ...wkout,
              subTitle: wkout.reps ? `Reps: ${wkout.reps}` : undefined
            }))}
            handleLastCard={handleRepCompleted}
          />
        </>
      ) : (
        <>
          <Button
            title={"Another Rep"}
            onPress={() => {
              handleAnotherRep();
            }}
          />
          <Button title={"End Workout"} onPress={() => handleEndWorkout()} />
        </>
      )}
    </Screen>
  );
};
