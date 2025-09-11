import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import SkillsScreen from '../screens/Skills/SkillsScreen';
import AchievementsScreen from '../screens/Achievements/AchievementsScreen';
import ChatbotScreen from '../screens/Chatbot/ChatbotScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import AuthScreen from '../screens/Auth/AuthScreen';

// Import custom drawer
import CustomDrawerContent from '../components/navigation/CustomDrawerContent';

// Import types
import { RootStackParamList, DrawerParamList } from '../types/navigation';

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<RootStackParamList>();

// Dashboard Stack
const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardMain" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

// Skills Stack
const SkillsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SkillsMain" component={SkillsScreen} />
    </Stack.Navigator>
  );
};

// Achievements Stack
const AchievementsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AchievementsMain" component={AchievementsScreen} />
    </Stack.Navigator>
  );
};

// Chatbot Stack
const ChatbotStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatbotMain" component={ChatbotScreen} />
    </Stack.Navigator>
  );
};

// Settings Stack
const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsMain" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

// Main App Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#000000',
            width: 280,
          },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            title: 'Dashboard',
          }}
        />
        <Drawer.Screen
          name="Skills"
          component={SkillsStack}
          options={{
            title: 'My Skills',
          }}
        />
        <Drawer.Screen
          name="Achievements"
          component={AchievementsStack}
          options={{
            title: 'Achievements',
          }}
        />
        <Drawer.Screen
          name="Chatbot"
          component={ChatbotStack}
          options={{
            title: 'OneClarity Chatbot',
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            title: 'Settings',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
