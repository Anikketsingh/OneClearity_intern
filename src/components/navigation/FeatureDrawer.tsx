import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

interface FeatureDrawerProps {
  visible: boolean;
  onClose: () => void;
}

const features = [
  { icon: 'document-text-outline', label: 'PDF Reader' },
  { icon: 'grid-outline', label: 'Chat with Excel' },
  { icon: 'analytics-outline', label: 'Document Summarizer' },
  { icon: 'construct-outline', label: 'Code Assistant' },
];

const FeatureDrawer: React.FC<FeatureDrawerProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <BlurView intensity={30} tint="dark" style={styles.overlay}>
        <View style={styles.drawer}>
          <Text style={styles.title}>AI Tools & Features</Text>
          <View style={styles.grid}>
            {features.map((feature) => (
              <View key={feature.label} style={styles.featureItem}>
                <Ionicons name={feature.icon as any} size={36} color="#fff" style={{ marginBottom: 8 }} />
                <Text style={styles.featureLabel}>{feature.label}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    width: 320,
    backgroundColor: '#111112',
    borderRadius: 18,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 12,
  },
  featureItem: {
    width: 120,
    alignItems: 'center',
    marginVertical: 12,
  },
  featureLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 6,
  },
});

export default FeatureDrawer;
