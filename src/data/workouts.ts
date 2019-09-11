import { Card } from "../models/card";

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

interface Workout extends Card {
  type: EWorkoutType;
}

export const WORKOUTS: Workout[] = [
  {
    title: "Bicycle crunches",
    type: EWorkoutType.CRUNCH
  },
  {
    title: "Burpees",
    description: "With pushup?",
    type: EWorkoutType.PUSHUP
  },
  {
    title: "Butt kickers",
    type: EWorkoutType.OTHER
  },
  {
    title: "Crunches",
    type: EWorkoutType.CRUNCH
  },
  {
    title: "Half burpees",
    type: EWorkoutType.BURPEE
  },
  {
    title: "High knees",
    type: EWorkoutType.OTHER
  },
  {
    title: "Jumping Jacks",
    type: EWorkoutType.OTHER
  },
  {
    title: "Jumping Squats",
    type: EWorkoutType.SQUAT
  },
  {
    title: "Leg lifts",
    type: EWorkoutType.OTHER
  },
  {
    title: "Lunges (forward)",
    type: EWorkoutType.LUNGE
  },
  {
    title: "Mountain Climbers",
    type: EWorkoutType.MOUNTAIN_CLIMBER
  },
  {
    title: "Plank",
    type: EWorkoutType.PLANK
  },
  {
    title: "High Plank",
    type: EWorkoutType.PLANK
  },
  {
    title: "Plank with knee tap",
    type: EWorkoutType.PLANK
  },
  {
    title: "Plank - side to side",
    type: EWorkoutType.PLANK
  },
  {
    title: "Plank Pushups",
    description: "High to low",
    type: EWorkoutType.PLANK
  },
  {
    title: "Pushups",
    type: EWorkoutType.PUSHUP
  },
  {
    title: "Rollers",
    description: "Equipment needed",
    type: EWorkoutType.OTHER
  },
  {
    title: "Situps",
    type: EWorkoutType.OTHER
  },
  {
    title: "Squats",
    type: EWorkoutType.SQUAT
  },
  {
    title: "Superman",
    type: EWorkoutType.OTHER
  },
  {
    title: "Mountain Climbers",
    type: EWorkoutType.MOUNTAIN_CLIMBER
  },
  {
    title: "Russian Twist",
    type: EWorkoutType.OTHER
  }
];
