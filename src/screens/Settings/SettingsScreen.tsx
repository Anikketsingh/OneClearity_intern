import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../../components/navigation/AppHeader';

import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

const SettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(true);
  const [biometricEnabled, setBiometricEnabled] = React.useState(false);

  const renderSettingItem = (
    icon: string,
    title: string,
    subtitle: string,
    onPress?: () => void,
    rightComponent?: React.ReactNode
  ) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon as any} size={20} color="#6366F1" />
        </View>
        <View style={styles.settingInfo}>
          <Text style={styles.settingTitle}>{title}</Text>
          <Text style={styles.settingSubtitle}>{subtitle}</Text>
        </View>
      </View>
      {rightComponent || (
        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Settings" subtitle="Manage your app preferences" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header moved to AppHeader */}

        {/* Profile Section */}
        <Card style={styles.card}>
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person" size={32} color="#6366F1" />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Aniket Singh</Text>
              <Text style={styles.profileEmail}>its.aniketsingh04@gmail.com</Text>
              <Text style={styles.profileRole}>Senior Developer</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="pencil" size={16} color="#6366F1" />
            </TouchableOpacity>
          </View>
        </Card>

        {/* Preferences Section */}
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          {renderSettingItem(
            'notifications-outline',
            'Push Notifications',
            'Receive updates about your tasks and goals',
            undefined,
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#374151', true: '#6366F1' }}
              thumbColor={notificationsEnabled ? '#FFFFFF' : '#9CA3AF'}
            />
          )}

          {renderSettingItem(
            'moon-outline',
            'Dark Mode',
            'Use dark theme throughout the app',
            undefined,
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: '#374151', true: '#6366F1' }}
              thumbColor={darkModeEnabled ? '#FFFFFF' : '#9CA3AF'}
            />
          )}

          {renderSettingItem(
            'finger-print-outline',
            'Biometric Login',
            'Use fingerprint or face ID to login',
            undefined,
            <Switch
              value={biometricEnabled}
              onValueChange={setBiometricEnabled}
              trackColor={{ false: '#374151', true: '#6366F1' }}
              thumbColor={biometricEnabled ? '#FFFFFF' : '#9CA3AF'}
            />
          )}
        </Card>

        {/* Account Section */}
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          {renderSettingItem(
            'person-outline',
            'Personal Information',
            'Update your profile details',
            () => {}
          )}

          {renderSettingItem(
            'lock-closed-outline',
            'Change Password',
            'Update your account password',
            () => {}
          )}

          {renderSettingItem(
            'mail-outline',
            'Email Settings',
            'Manage email notifications',
            () => {}
          )}

          {renderSettingItem(
            'shield-checkmark-outline',
            'Privacy & Security',
            'Control your privacy settings',
            () => {}
          )}
        </Card>

        {/* App Section */}
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>App</Text>
          
          {renderSettingItem(
            'help-circle-outline',
            'Help & Support',
            'Get help and contact support',
            () => {}
          )}

          {renderSettingItem(
            'document-text-outline',
            'Terms & Conditions',
            'Read our terms and conditions',
            () => {}
          )}

          {renderSettingItem(
            'information-circle-outline',
            'About',
            'App version and information',
            () => {}
          )}

          {renderSettingItem(
            'star-outline',
            'Rate App',
            'Rate us on the app store',
            () => {}
          )}
        </Card>

        {/* Data Section */}
        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>Data</Text>
          
          {renderSettingItem(
            'download-outline',
            'Export Data',
            'Download your data',
            () => {}
          )}

          {renderSettingItem(
            'refresh-outline',
            'Sync Data',
            'Sync your data with server',
            () => {}
          )}

          {renderSettingItem(
            'trash-outline',
            'Clear Cache',
            'Clear app cache and temporary files',
            () => {}
          )}
        </Card>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <Button
            title="Sign Out"
            onPress={() => {}}
            variant="outline"
            style={styles.logoutButton}
          />
        </View>

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
          <Text style={styles.buildText}>Build 2024.01.10</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  card: {
    marginBottom: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1F2937',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  profileRole: {
    fontSize: 14,
    color: '#6366F1',
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1F2937',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1F2937',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  logoutSection: {
    marginTop: 24,
    marginBottom: 16,
  },
  logoutButton: {
    borderColor: '#EF4444',
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  versionText: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  buildText: {
    fontSize: 12,
    color: '#6B7280',
  },
});

export default SettingsScreen;
