import { EWorkoutType } from "../models/workout";

// export enum EWorkoutType {
//   BURPEE = "BURPEE",
//   CRUNCH = "CRUNCH",
//   MOUNTAIN_CLIMBER = "MOUNTAIN_CLIMBER",
//   LUNGE = "LUNGE",
//   PUSHUP = "PUSHUP",
//   PLANK = "PLANK",
//   SQUAT = "SQUAT",
//   OTHER = "OTHER"
// }

// export interface Workout extends Card {
//   type: EWorkoutType;
//   reps?: number;
// }

// interface WorkoutCollection {
//   [key: string]: Workout[]
// }

export const TYPED_WORKOUTS: WorkoutCollection = {
  [EWorkoutType.BURPEE]: [
    {
      title: "Half burpees",
      type: EWorkoutType.BURPEE,
      reps: 10
    }
  ],
  [EWorkoutType.CRUNCH]: [
    {
      title: "Bicycle crunches",
      type: EWorkoutType.CRUNCH,
      reps: 20
    },
    {
      title: "Regular crunches",
      type: EWorkoutType.CRUNCH,
      reps: 20
    }
  ],
  [EWorkoutType.LUNGE]: [
    {
      title: "Forward Lunges",
      type: EWorkoutType.LUNGE,
      reps: 10
    },
    {
      title: "Backward Lunges",
      type: EWorkoutType.LUNGE,
      reps: 10
    }
  ],
  [EWorkoutType.MOUNTAIN_CLIMBER]: [
    {
      title: "Mountain Climbers",
      type: EWorkoutType.MOUNTAIN_CLIMBER,
      reps: 20
    }
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
      type: EWorkoutType.PLANK,
      reps: 10
    },
    {
      title: "Side to side plank",
      type: EWorkoutType.PLANK,
      reps: 10
    }
  ],
  [EWorkoutType.PUSHUP]: [
    {
      title: "Plank Pushups",
      description: "High to low",
      type: EWorkoutType.PUSHUP,
      reps: 10
    },
    {
      title: "Pushups",
      type: EWorkoutType.PUSHUP,
      reps: 10
    }
  ],
  [EWorkoutType.SQUAT]: [
    {
      title: "Regular Squats",
      type: EWorkoutType.SQUAT,
      reps: 20
    },
    {
      title: "Jumping Squats",
      type: EWorkoutType.SQUAT,
      reps: 10
    }
  ]
};

export const OTHER_WORKOUTS: Workout[] = [
  {
    title: "Butt kickers",
    type: EWorkoutType.OTHER,
    reps: 20
  },
  {
    title: "High knees",
    type: EWorkoutType.OTHER,
    reps: 20
  },
  {
    title: "Jumping Jacks",
    type: EWorkoutType.OTHER,
    reps: 30
  },
  {
    title: "Leg lifts",
    type: EWorkoutType.OTHER,
    reps: 10
  },
  {
    title: "Rollers",
    description: "Equipment needed",
    type: EWorkoutType.OTHER,
    reps: 10
  },
  {
    title: "Situps",
    type: EWorkoutType.OTHER,
    reps: 20
  },
  {
    title: "Superman",
    type: EWorkoutType.OTHER,
    reps: 10
  },
  {
    title: "Russian Twist",
    type: EWorkoutType.OTHER,
    reps: 10
  }
];
