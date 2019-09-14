import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { shuffle } from "lodash";
import { CardStack } from './src/components/ui/CardStack';
import { WORKOUTS } from './src/data/workouts';
import { ICard } from './src/models/card';

export default function App() {

const [workoutList, setWorkoutList] = useState<ICard[]>([]);

const startWorkout = () => {
  const shuffled = shuffle(WORKOUTS);
  setWorkoutList(shuffled)
}

const endWorkout = () => {
  setWorkoutList([])
}

  return (
    <SafeAreaView style={styles.container}>
     {workoutList.length > 0 ?
   <CardStack cards={workoutList} handleLastCard={endWorkout} />
     : 
     <Button title={"Start Workout"} onPress={() => startWorkout()}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
