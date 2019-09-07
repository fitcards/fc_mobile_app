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

export default function App() {
  const [workoutList, setWorkoutList] = useState<ICard[]>([]);
  const WORKOUT_QTY = 10;

  const startWorkout = () => {
    const shuffled = shuffle(WORKOUTS);
    const list = shuffled.slice(0, WORKOUT_QTY);
    setWorkoutList(list);
  };

  const endWorkout = () => {
    setWorkoutList([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {workoutList.length > 0 ? (
        <CardStack
          cards={workoutList}
          handleLastCard={endWorkout}
          handleCancel={endWorkout}
        />
      ) : (
        <Button title={"Start Workout"} onPress={() => startWorkout()} />
      )}
    </SafeAreaView>
  );
}
