import React from "react";
import { View, Button } from "react-native";
import { AppRoutes } from "../../constants/routes";
import { NavProps } from "../../models/navigation";

export const NewWorkoutScreen: React.FC<NavProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate(AppRoutes.DETAILS)}
        title="New Workout"
      />
    </View>
  );
};
