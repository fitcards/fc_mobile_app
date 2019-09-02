import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICard } from '../../models/card';
import { Card } from "./Card"

export interface IProps {
  cards: ICard[];
  handleLastCard: () => void;
}
export const CardStack: React.FC<IProps> = ({ cards, handleLastCard }) => {

const [currentCard, setCurrentCard] = useState(0);

const handlePress = () => {
if (currentCard < cards.length - 1) {
  setCurrentCard(currentCard + 1)
  } else {
    handleLastCard();
  }
}

const displayCard = () => {
  return cards[currentCard] ? <Card title={cards[currentCard].title} onPress={handlePress} /> : null;
}

  return (
    <View style={{ flex: 1 }}>
{displayCard()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
