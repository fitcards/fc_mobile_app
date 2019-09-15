import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { shuffle } from "lodash";
import { CardStack } from "./src/components/ui/CardStack";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";

import {
  EWorkoutType,
  TYPED_WORKOUTS,
  OTHER_WORKOUTS,
  Workout
} from "./src/data/workouts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function App() {
  const [shuffling, setShuffling] = useState(false);
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [workoutList, setWorkoutList] = useState<Workout[]>([]);
  const [currentRep, setCurrentRep] = useState(0);
  const WORKOUT_QTY = 10;

  const getWorkoutTypes = (): string[] => {
    const types: string[] = [];
    for (const n in EWorkoutType) {
      if (typeof EWorkoutType[n] === "string") types.push(n);
    }
    return types;
  };

  const getNoDupeWorkouts = () => {
    const types: string[] = getWorkoutTypes();
    const list = [...OTHER_WORKOUTS];

    types.forEach(t => {
      if (TYPED_WORKOUTS[t]) {
        const index = Math.floor(Math.random() * TYPED_WORKOUTS[t].length);
        list.push(TYPED_WORKOUTS[t][index]);
      }
    });

    return list;
  };

  const workoutInit = () => {
    const noDupeWorkouts = getNoDupeWorkouts();
    const shuffled = shuffle(noDupeWorkouts);
    const list = shuffled.slice(0, WORKOUT_QTY);
    setWorkoutList(list);
    setCurrentRep(currentRep + 1);
    setActiveWorkout(true);
    activateKeepAwake();
  };

  const startWorkout = () => {
    setShuffling(true);
    setTimeout(() => {
      setShuffling(false);
      workoutInit();
    }, 1500);
  };

  const endWorkout = () => {
    setActiveWorkout(false);
    setCurrentRep(0);
    setWorkoutList([]);
    deactivateKeepAwake();
  };

  const endRep = () => {
    setCurrentRep(currentRep + 1);
    setActiveWorkout(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {activeWorkout ? (
        <View>
          <Text>Current Rep: {currentRep}</Text>
          <CardStack
            cards={workoutList.map(wkout => ({
              ...wkout,
              subTitle: wkout.reps ? `Reps: ${wkout.reps}` : undefined
            }))}
            handleLastCard={endRep}
            handleCancel={endWorkout}
          />
        </View>
      ) : workoutList.length === 0 ? (
        <View>
          {shuffling ? (
            <View>
              <Text>Shuffling cards...</Text>
            </View>
          ) : (
            <Button title={"Start Workout"} onPress={() => startWorkout()} />
          )}
        </View>
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
