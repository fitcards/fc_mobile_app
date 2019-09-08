import React, { useState, useEffect } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from '../../models/card';
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const Card: React.FC<Card> = ({ title, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth
    }}>
     <Text style={{ fontSize: 30 }}>{title}</Text>
  </TouchableOpacity>
  );
}

