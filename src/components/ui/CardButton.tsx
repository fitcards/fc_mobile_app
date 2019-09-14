import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { Card } from "../../models/card";

const windowWidth = Dimensions.get("window").width;

export const CardButton: React.FC<Card> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth
      }}
    >
      <Text style={{ fontSize: 30 }}>{title}</Text>
    </TouchableOpacity>
  );
};
