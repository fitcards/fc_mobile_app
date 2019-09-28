import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { AppRoutes } from "../../constants/routes";
import { HomeScreen } from "../../screens/Home/HomeScreen";
import { NewWorkoutScreen } from "../../screens/NewWorkout/NewWorkoutScreen";

const AppNavigator = createStackNavigator(
  {
    [AppRoutes.HOME]: HomeScreen,
    [AppRoutes.NEW_WORKOUT]: NewWorkoutScreen
  },
  {
    initialRouteName: AppRoutes.HOME
  }
);
export const AppContainer = createAppContainer(AppNavigator);
