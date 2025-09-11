import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation, state } = props;
  const currentRoute = state.routeNames[state.index];

  const navigationItems = [
    {
      name: 'Dashboard',
      icon: 'bar-chart-outline',
      route: 'Dashboard',
      isActive: currentRoute === 'Dashboard',
    },
    {
      name: 'My Skills',
      icon: 'aperture-outline',
      route: 'Skills',
      isActive: currentRoute === 'Skills',
    },
    {
      name: 'Achievements',
      icon: 'trophy-outline',
      route: 'Achievements',
      isActive: currentRoute === 'Achievements',
    },
    {
      name: 'OneClarity Chatbot',
      icon: 'chatbubble-outline',
      route: 'Chatbot',
      isActive: currentRoute === 'Chatbot',
    },
  ];

  const settingsItems = [
    {
      name: 'Settings',
      icon: 'settings',
      route: 'Settings',
      isActive: currentRoute === 'Settings',
    },
  ];

  const handleNavigation = (routeName: string) => {
    navigation.navigate(routeName as any);
  };

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]} edges={['top', 'left', 'right']}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>OC</Text>
        </View>
        <Text style={styles.appName}>OneClarity</Text>
        <TouchableOpacity style={styles.headerAction}>
          <Ionicons name="menu" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Navigation Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Navigation</Text>
            {navigationItems.map((item) => (
              <TouchableOpacity
                key={item.name}
                style={[
                  styles.navItem,
                  item.isActive && styles.activeNavItem,
                ]}
                onPress={() => handleNavigation(item.route)}
              >
                <View style={styles.navItemLeft}>
                  <Ionicons
                    name={item.icon as any}
                    size={20}
                    color="#FFFFFF"
                  />
                  <Text style={styles.navItemText}>{item.name}</Text>
                </View>
                {item.isActive && (
                  <Ionicons name="chevron-forward" size={16} color="#FFFFFF" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Footer Settings pinned to bottom */}
        <View style={[styles.footer, { paddingBottom: insets.bottom || 12 }]}>
          <View style={styles.footerDivider} />
          <TouchableOpacity
            style={[styles.navItem, (currentRoute === 'Settings') && styles.activeNavItem]}
            onPress={() => handleNavigation('Settings')}
          >
            <View style={styles.navItemLeft}>
              <Ionicons name={'settings-outline'} size={20} color="#FFFFFF" />
              <Text style={styles.navItemText}>Settings</Text>
            </View>
            {(currentRoute === 'Settings') && (
              <Ionicons name="chevron-forward" size={16} color="#FFFFFF" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  logoContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#9CA3AF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  headerAction: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4B5563',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  activeNavItem: {
    backgroundColor: '#374151',
  },
  navItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  navItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 12,
  },
  footer: {
    paddingHorizontal: 0,
  },
  footerDivider: {
    height: 1,
    backgroundColor: '#1F2937',
    marginHorizontal: 20,
    marginBottom: 8,
  },
});

export default CustomDrawerContent;
