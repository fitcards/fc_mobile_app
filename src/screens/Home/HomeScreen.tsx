import React, { useContext, useEffect } from "react";
import { Button, View } from "react-native";
import { AppRoutes } from "../../constants/routes";
import { NavProps } from "../../models/navigation";
import { WorkoutContext } from "../../providers/WorkoutProvider";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MainActionButton } from "../../components/ui/MainActionButton/MainActionButton";
import { Screen } from "../../components/ui/Screen";

export const HomeScreen: React.FC<NavProps> = ({ navigation }) => {
  const { activeWorkout, startWorkout } = useContext(WorkoutContext);

  useEffect(() => {
    if (activeWorkout) {
      navigation.navigate(AppRoutes.ACTIVE_WORKOUT);
    }
  }, [activeWorkout]);
  return (
    <Screen>
      <View style={{ flex: 1 }}>
        {/* <Button onPress={() => startWorkout()} title="Start Workout" /> */}
        {/* <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(AppRoutes.WORKOUT_SETTINGS)}
        >
          <EvilIcons name="gear" size={50} color="gray" />
        </TouchableOpacity>
      </View> */}
      </View>
      <MainActionButton onPress={() => startWorkout()}>
        Start Workout
      </MainActionButton>
    </Screen>
  );
};
