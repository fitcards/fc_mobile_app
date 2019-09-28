import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

export interface NavProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
