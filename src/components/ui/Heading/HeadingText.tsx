import React from "react";
import { Text } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const HeadingText: React.FC<Props> = ({ children }) => {
  return (
    <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
      {children}
    </Text>
  );
};
