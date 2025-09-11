import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions, NavigationProp } from '@react-navigation/native';
import FeatureDrawer from './FeatureDrawer';

type AppHeaderProps = {
  title: string;
  subtitle?: string;
  showDateBadge?: boolean;
  dateText?: string;
};

type RootStackParamList = {
  Settings: undefined;
  // add other routes here if needed
};

const AppHeader: React.FC<AppHeaderProps> = ({ title, subtitle, showDateBadge, dateText }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <>
      <View style={[styles.container, { paddingTop: Math.max(insets.top, 8) }]}> 
        <View style={styles.topRow}>
          <TouchableOpacity
            accessibilityLabel="Open navigation drawer"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.iconButton}
          >
            <Ionicons name="menu" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.topRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="search" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => setDrawerVisible(true)}>
              <Ionicons name="cube" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.avatar} onPress={() => navigation.navigate('Settings')}>
              <Text style={styles.avatarText}>AS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.titleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>
          {showDateBadge && (
            <View style={styles.dateBadge}>
              <Ionicons name="calendar" size={14} color="#FFFFFF" />
              <Text style={styles.dateText}>{dateText || ''}</Text>
            </View>
          )}
        </View>
      </View>
      <FeatureDrawer visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    backgroundColor: '#000000',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  iconButton: {
    padding: 8,
  },
  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  avatarText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '700',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 16,
    color: '#9CA3AF',
  },
  dateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  dateText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default AppHeader;

