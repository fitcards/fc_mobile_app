import React from "react";
import { Text, View } from "react-native";
import { NavProps } from "../../models/navigation";
// import { AppRoutes } from "../../constants/routes";

export const DetailsScreen: React.FC<NavProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details</Text>
    </View>
  );
};
