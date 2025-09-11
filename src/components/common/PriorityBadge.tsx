import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PriorityBadgeProps {
  priority: 'low' | 'medium' | 'high' | 'urgent';
  size?: 'small' | 'medium';
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({
  priority,
  size = 'medium',
}) => {
  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return { color: '#EF4444', backgroundColor: '#FEE2E2', text: 'Urgent' };
      case 'high':
        return { color: '#F59E0B', backgroundColor: '#FEF3C7', text: 'High' };
      case 'medium':
        return { color: '#3B82F6', backgroundColor: '#DBEAFE', text: 'Medium' };
      case 'low':
        return { color: '#10B981', backgroundColor: '#D1FAE5', text: 'Low' };
      default:
        return { color: '#6B7280', backgroundColor: '#F3F4F6', text: 'Unknown' };
    }
  };

  const config = getPriorityConfig(priority);
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
