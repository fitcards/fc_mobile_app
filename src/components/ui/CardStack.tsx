import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card } from "../../models/card";
import { CardButton } from "./CardButton";

export interface Props {
  cards: Card[];
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
      <CardButton
        title={cards[currentCard].title}
        subTitle={cards[currentCard].subTitle}
        onPress={handlePress}
      />
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
