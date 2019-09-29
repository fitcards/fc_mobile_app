import React from "react";
import { Text } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const TextBlock: React.FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};
