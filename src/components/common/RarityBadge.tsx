import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RarityBadgeProps {
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  size?: 'small' | 'medium';
}

export const RarityBadge: React.FC<RarityBadgeProps> = ({
  rarity,
  size = 'medium',
}) => {
  const getRarityConfig = (rarity: string) => {
    switch (rarity) {
      case 'legendary':
        return { color: '#FFD700', backgroundColor: '#FFF8DC', text: 'Legendary' };
      case 'epic':
        return { color: '#9D4EDD', backgroundColor: '#E0AAFF', text: 'Epic' };
      case 'rare':
        return { color: '#3B82F6', backgroundColor: '#DBEAFE', text: 'Rare' };
      case 'uncommon':
        return { color: '#10B981', backgroundColor: '#D1FAE5', text: 'Uncommon' };
      case 'common':
        return { color: '#6B7280', backgroundColor: '#F3F4F6', text: 'Common' };
      default:
        return { color: '#6B7280', backgroundColor: '#F3F4F6', text: 'Unknown' };
    }
  };

  const config = getRarityConfig(rarity);
  const sizeStyle = size === 'small' ? styles.small : styles.medium;

  return (
    <View
      style={[
        styles.badge,
        sizeStyle,
        { backgroundColor: config.backgroundColor },
      ]}
    >
      <Text style={[styles.text, sizeStyle, { color: config.color }]}>
        {config.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  small: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  medium: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    fontWeight: '600',
    fontSize: 10,
  },
});
