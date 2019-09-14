import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ICard } from "../../models/card";
import { Card } from "./Card";

export interface Props {
  cards: ICard[];
  handleLastCard: () => void;
  handleCancel: () => void;
}
export const CardStack: React.FC<Props> = ({
  cards,
  handleLastCard,
  handleCancel
}) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handlePress = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      handleLastCard();
    }
  };

  const displayCard = () => {
    return cards[currentCard] ? (
      <Card title={cards[currentCard].title} onPress={handlePress} />
    ) : null;
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={handleCancel}
        style={{
          height: 30,
          margin: 10,
          width: 60,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Text>Cancel</Text>
      </TouchableOpacity>
      {displayCard()}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
