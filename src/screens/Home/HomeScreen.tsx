import React from "react";
// import { AppRoutes } from "../../constants";
// import { NavProps } from "../../models";
import { Button, View } from "react-native";
import { AppRoutes } from "../../constants/routes";
import { NavProps } from "../../models/navigation";

export const HomeScreen: React.FC<NavProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate(AppRoutes.NEW_WORKOUT)}
        title="New Workout"
      />
    </View>
  );
};
