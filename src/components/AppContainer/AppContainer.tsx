import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { AppRoutes } from "../../constants/routes";
import { HomeScreen } from "../../screens/Home/HomeScreen";
import { DetailsScreen } from "../../screens/Details/DetailsScreen";

const AppNavigator = createStackNavigator(
  {
    [AppRoutes.HOME]: HomeScreen,
    [AppRoutes.DETAILS]: DetailsScreen
  },
  {
    initialRouteName: AppRoutes.HOME
  }
);
export const AppContainer = createAppContainer(AppNavigator);
