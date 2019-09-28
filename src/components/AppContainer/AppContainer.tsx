import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { AppRoutes } from "../../constants/routes";
import { HomeScreen } from "../../screens/Home/HomeScreen";
import { NewWorkoutScreen } from "../../screens/NewWorkout/NewWorkoutScreen";
import { ActiveWorkoutScreen } from "../../screens/ActiveWorkout/ActiveWorkoutScreen";

const AppNavigator = createStackNavigator(
  {
    [AppRoutes.HOME]: {
      screen: HomeScreen
    },
    [AppRoutes.NEW_WORKOUT]: {
      screen: NewWorkoutScreen,
      navigationOptions: () => ({
        title: "New Workout"
      })
    },
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
export const AppContainer = createAppContainer(AppNavigator);
