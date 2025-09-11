import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  margin?: number;
  elevation?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 16,
  margin = 0,
  elevation = 2,
}) => {
  const cardStyle = [
    styles.card,
    {
      padding,
      margin,
      elevation,
    },
    style,
  ];

  return <View style={cardStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111111',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    shadowColor: 'transparent',
  },
});
