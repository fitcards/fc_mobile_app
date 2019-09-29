import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;
const marginHorizontal = 20;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 20,
    width: width - marginHorizontal * 2,
    maxWidth: 325,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center"
  }
});

interface Props {
  onPress: () => void;
}

export const MainActionButton: React.FC<Props> = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{ color: "white", fontWeight: "bold" }}>{children}</Text>
    </TouchableOpacity>
  );
};
