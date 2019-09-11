import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { shuffle } from "lodash";
import { CardStack } from "./src/components/ui/CardStack";
import { WORKOUTS, EWorkoutType } from "./src/data/workouts";
import { Card } from "./src/models/card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const useWorkoutSet = function() {
  const [workoutList, setWorkoutList] = useState<Card[]>([]);
  // -  get 1 of each type + all other types
  return {
    workoutList
  };
};

export default function App() {
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [workoutList, setWorkoutList] = useState<Card[]>([]);
  const [currentRep, setCurrentRep] = useState(0);
  const WORKOUT_QTY = 10;

  const getWorkoutTypes = () => {
    const names: string[] = [];
    for (const n in EWorkoutType) {
      if (typeof EWorkoutType[n] === "string") names.push(n);
    }
    console.log(names); // ['Red', 'Green', 'Blue', '10']
    return names;
  };

  const startWorkout = () => {
    const shuffled = shuffle(WORKOUTS);
    const list = shuffled.slice(0, WORKOUT_QTY);
    setWorkoutList(list);
    setCurrentRep(currentRep + 1);
    setActiveWorkout(true);
  };

  const endWorkout = () => {
    setActiveWorkout(false);
    setCurrentRep(0);
    setWorkoutList([]);
  };

  const endRep = () => {
    setCurrentRep(currentRep + 1);
    setActiveWorkout(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10, backgroundColor: "yellow" }}>
        <Text>adsada</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "black", minHeight: 200 }}>
        {getWorkoutTypes() &&
          getWorkoutTypes().map((wt, index) => (
            <View
              key={index.toString()}
              style={{ padding: 10, backgroundColor: "yellow" }}
            >
              <Text>{wt}</Text>
            </View>
          ))}
      </View>
      {/* {activeWorkout ? (
        <View>
          <Text>Current Rep: {currentRep}</Text>
          <CardStack
            cards={workoutList}
            handleLastCard={endRep}
            handleCancel={endWorkout}
          />
        </View>
      ) : workoutList.length === 0 ? (
        <View>
          <Button title={"Start Workout"} onPress={() => startWorkout()} />
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
      )} */}
    </SafeAreaView>
  );
}
