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


export const TYPED_WORKOUTS = {
  [EWorkoutType.BURPEE]: [
    {
      title: "Half burpees",
      type: EWorkoutType.BURPEE
    },
  ],
  [EWorkoutType.CRUNCH]: [
    {
      title: "Bicycle crunches",
      type: EWorkoutType.CRUNCH
    },
    {
      title: "Regular crunches",
      type: EWorkoutType.CRUNCH
    },
  ],
  [EWorkoutType.LUNGE]: [
    {
      title: "Forward Lunges",
      type: EWorkoutType.LUNGE
    },
    {
      title: "Backward Lunges",
      type: EWorkoutType.LUNGE
    },
  ],
  [EWorkoutType.MOUNTAIN_CLIMBER]: [
    {
      title: "Mountain Climbers",
      type: EWorkoutType.MOUNTAIN_CLIMBER
    },
  ],
  [EWorkoutType.PLANK]: [
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
      title: "Side to side plank",
      type: EWorkoutType.PLANK
    },
  ],
  [EWorkoutType.PUSHUP]: [
    {
      title: "Plank Pushups",
      description: "High to low",
      type: EWorkoutType.PUSHUP
    },
    {
      title: "Pushups",
      type: EWorkoutType.PUSHUP
    },
  ],
  [EWorkoutType.SQUAT]: [
    {
      title: "Regular Squats",
      type: EWorkoutType.SQUAT
    },
    {
      title: "Jumping Squats",
      type: EWorkoutType.SQUAT
    },
  ],
}

export const OTHER_WORKOUTS = [
  {
    title: "Butt kickers",
    type: EWorkoutType.OTHER,
  },
  {
    title: "High knees",
    type: EWorkoutType.OTHER,
  },
  {
    title: "Jumping Jacks",
    type: EWorkoutType.OTHER,
  },
  {
    title: "Leg lifts",
    type: EWorkoutType.OTHER,
  },
  {
    title: "Rollers",
    description: "Equipment needed",
    type: EWorkoutType.OTHER,
  },
  {
    title: "Situps",
    type: EWorkoutType.OTHER,
  },
  {
    title: "Superman",
    type: EWorkoutType.OTHER,
  },
  {
    title: "Russian Twist",
    type: EWorkoutType.OTHER,
  }
]
