import React, { useState } from "react";
import { View } from "react-native";
import { Card } from "../../models/card";
import { CardButton } from "./CardButton";

export interface Props {
  cards: Card[];
  handleLastCard: () => void;
}
export const CardStack: React.FC<Props> = ({ cards, handleLastCard }) => {
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

  return <View style={{ flex: 1 }}>{displayCard()}</View>;
};
