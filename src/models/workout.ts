import { Card } from "./card";

export interface Workout extends Card {
  type: EWorkoutType;
  reps?: number;
}

export interface WorkoutCollection {
  [key: string]: Workout[];
}

export enum EWorkoutType {
  BURPEE = "BURPEE",
  CRUNCH = "CRUNCH",
  MOUNTAIN_CLIMBER = "MOUNTAIN_CLIMBER",
  LUNGE = "LUNGE",
  PUSHUP = "PUSHUP",
  PLANK = "PLANK",
  SQUAT = "SQUAT",
  OTHER = "OTHER"
}
