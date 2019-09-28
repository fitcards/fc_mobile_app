import { useState } from "react";
import { Workout, EWorkoutType } from "../models/workout";
import { OTHER_WORKOUTS, TYPED_WORKOUTS } from "../data/workouts";
import { shuffle } from "lodash";

interface WorkoutListParams {
  newWorkoutList: () => void;
  workoutList: Workout[];
}

type WorkoutListHook = (workoutQty?: number) => WorkoutListParams;

export const useWorkoutList: WorkoutListHook = (
  workoutQty = 10
): WorkoutListParams => {
  const [workoutList, setWorkoutList] = useState<Workout[]>([]);

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

  const newWorkoutList = () => {
    const noDupeWorkouts = getNoDupeWorkouts();
    const shuffled = shuffle(noDupeWorkouts);
    const list = shuffled.slice(0, workoutQty);
    setWorkoutList(list);
  };

  return {
    newWorkoutList,
    workoutList
  };
};
