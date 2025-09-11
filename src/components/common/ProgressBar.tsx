import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
  progress: number;
  total: number;
  height?: number;
  showPercentage?: boolean;
  color?: string;
  backgroundColor?: string;
  style?: any;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  total,
  height = 8,
  showPercentage = true,
  color = '#6366F1',
  backgroundColor = '#374151',
  style,
}) => {
  const percentage = Math.min((progress / total) * 100, 100);

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.track, { height, backgroundColor }]}>
        <View
          style={[
            styles.fill,
            {
              height,
              width: `${percentage}%`,
              backgroundColor: color,
            },
          ]}
        />
      </View>
      {showPercentage && (
        <Text style={styles.percentageText}>{Math.round(percentage)}%</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  track: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: 4,
  },
  percentageText: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
  },
});
