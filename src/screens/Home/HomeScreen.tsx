import React from "react";
// import { AppRoutes } from "../../constants";
// import { NavProps } from "../../models";
import { Button, View } from "react-native";
import { AppRoutes } from "../../constants/routes";

export const HomeScreen: React.FC<NavProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate(AppRoutes.DETAILS)}
        title="New Workout"
      />
    </View>
  );
};
