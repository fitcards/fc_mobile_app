import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { shuffle } from "lodash";
import { CardStack } from "./src/components/ui/CardStack";
import { WORKOUTS } from "./src/data/workouts";
import { ICard } from "./src/models/card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// workout states: no workout, active workout
// rep 0, rep 1 (first workout), rep n

export default function App() {
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [workoutList, setWorkoutList] = useState<ICard[]>([]);
  const [currentRep, setCurrentRep] = useState(0);
  const WORKOUT_QTY = 10;

  const startWorkout = () => {
    const shuffled = shuffle(WORKOUTS);
    const list = shuffled.slice(0, WORKOUT_QTY);
    setWorkoutList(list);
    setCurrentRep(currentRep + 1);
    setActiveWorkout(true);
  };

  const endWorkout = () => {
    setActiveWorkout(false);
    setWorkoutList([]);
  };

  const endRep = () => {
    setCurrentRep(currentRep + 1);
    setActiveWorkout(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {activeWorkout ? (
        <CardStack
          cards={workoutList}
          handleLastCard={endRep}
          handleCancel={endWorkout}
        />
      ) : workoutList.length === 0 ? (
        <Button title={"Start Workout"} onPress={() => startWorkout()} />
      ) : (
        <>
          <Button
            title={"Another Rep"}
            onPress={() => {
              setActiveWorkout(true);
            }}
          />
          <Button title={"End Workout"} onPress={() => endWorkout()} />
        </>
      )}
    </SafeAreaView>
  );
}
