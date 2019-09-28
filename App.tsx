import React from "react";
import { AppContainer } from "./src";
import { AsyncStorage } from "react-native";
import { WorkoutProvider } from "./src/components/providers/WorkoutProvider";

// Persist nav state during development - https://reactnavigation.org/docs/en/state-persistence.html
const persistenceKey = "persistenceKey";
const persistNavigationState = async navState => {
  try {
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
  } catch (err) {
    console.log("err: ", err);
  }
};
const loadNavigationState = async () => {
  const jsonString = await AsyncStorage.getItem(persistenceKey);
  return JSON.parse(jsonString);
};

function getPersistenceFunctions() {
  return __DEV__
    ? {
        persistNavigationState,
        loadNavigationState
      }
    : undefined;
}

const App: React.FC = () => {
  return (
    <WorkoutProvider>
      <AppContainer {...getPersistenceFunctions()} />
    </WorkoutProvider>
  );
};
export default App;
