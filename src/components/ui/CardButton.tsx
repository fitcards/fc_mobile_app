import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

interface Props {
  title: string;
  subTitle?: string;
  onPress: () => void;
}

export const CardButton: React.FC<Props> = ({ title, subTitle, onPress }) => {
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
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{title}</Text>
      {subTitle && <Text style={{ fontSize: 20 }}>{subTitle}</Text>}
    </TouchableOpacity>
  );
};
