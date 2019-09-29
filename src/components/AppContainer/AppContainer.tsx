import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { AppRoutes } from "../../constants/routes";
import { HomeScreen } from "../../screens/Home/HomeScreen";
// import { NewWorkoutScreen } from "../../screens/NewWorkout/NewWorkoutScreen";
import { ActiveWorkoutScreen } from "../../screens/ActiveWorkout/ActiveWorkoutScreen";
import { WorkoutSettingsScreen } from "../../screens/WorkoutSettings/WorkoutSettingsScreen";

const AppStack = createStackNavigator(
  {
    [AppRoutes.HOME]: {
      screen: HomeScreen
    },
    [AppRoutes.WORKOUT_SETTINGS]: {
      screen: WorkoutSettingsScreen,
      navigationOptions: () => ({
        title: "Settings"
      })
    },
    // [AppRoutes.NEW_WORKOUT]: {
    //   screen: NewWorkoutScreen,
    //   navigationOptions: () => ({
    //     title: "New Workout"
    //   })
    // },
    [AppRoutes.ACTIVE_WORKOUT]: {
      screen: ActiveWorkoutScreen,
      navigationOptions: () => ({
        title: "Active Workout"
      })
    }
  },
  {
    initialRouteName: AppRoutes.HOME
  }
);
export const AppContainer = createAppContainer(AppStack);
