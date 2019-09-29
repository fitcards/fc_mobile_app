import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
    // backgroundColor: "blue"
  }
});

export const Screen: React.FC = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
