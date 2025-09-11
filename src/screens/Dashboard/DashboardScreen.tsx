import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../../components/navigation/AppHeader';

import { Card } from '../../components/common/Card';
import { ProgressBar } from '../../components/common/ProgressBar';
import { PriorityBadge } from '../../components/common/PriorityBadge';
import { Button } from '../../components/common/Button';

import {
  mockUser,
  mockGoals,
  mockTasks,
  mockPerformanceData,
  mockWellnessData,
} from '../../data/mockData';

const DashboardScreen: React.FC = () => {
  const urgentTasks = mockTasks.filter(task => task.priority === 'urgent');
  const pendingTasks = mockTasks.filter(task => task.status === 'pending');

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Dashboard" subtitle="Welcome back! Here's your daily overview." showDateBadge dateText="28/08/2025" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header replaced by AppHeader */}

        {/* Today's Focus Card */}
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <View style={styles.iconContainer}>
                <View style={styles.iconDot} />
              </View>
              <Text style={styles.cardTitle}>Today's Focus</Text>
            </View>
          </View>
          <Text style={styles.focusNumber}>3 Goals</Text>
          <Text style={styles.focusDescription}>
            Complete code review, Team meeting at 2 PM, Finish project documentation
          </Text>
          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>Progress</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '67%' }]} />
              </View>
              <Text style={styles.progressText}>2/3</Text>
            </View>
          </View>
        </Card>

        {/* Performance Card */}
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <Ionicons name="trending-up" size={20} color="#10B981" />
              <Text style={styles.cardTitle}>Performance</Text>
            </View>
          </View>
          <Text style={styles.performanceNumber}>127%</Text>
          <Text style={styles.performanceDescription}>Above target this month</Text>
          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>Monthly Goal</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '80%' }]} />
              </View>
              <Text style={styles.progressText}>8/10</Text>
            </View>
          </View>
        </Card>

        {/* OneClarity AI Assistant Card */}
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <Ionicons name="chatbubble" size={20} color="#6366F1" />
              <Text style={styles.cardTitle}>OneClarity AI Assistant</Text>
            </View>
          </View>
          
          {/* Chat Messages */}
          <View style={styles.chatContainer}>
            <View style={styles.aiMessage}>
              <View style={styles.messageAvatarLight}>
                <Text style={styles.avatarTextDark}>AI</Text>
              </View>
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>
                  Hello! How can I assist you with your work today?
                </Text>
              </View>
            </View>

            <View style={styles.userMessage}>
              <View style={styles.userMessageBubble}>
                <Text style={styles.userMessageText}>
                  Can you show me my performance metrics?
                </Text>
              </View>
              <View style={styles.userMessageAvatarDark}>
                <Text style={styles.userAvatarTextDark}>You</Text>
              </View>
            </View>

            <View style={styles.aiMessage}>
              <View style={styles.messageAvatarLight}>
                <Text style={styles.avatarTextDark}>AI</Text>
              </View>
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>
                  Your performance is excellent! You've completed 80% of your goals this month.
                </Text>
              </View>
            </View>
          </View>

          {/* Input Field */}
          <View style={styles.inputContainerDark}>
            <TextInput
              style={styles.textInputDark}
              placeholder="Ask me anything..."
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity style={styles.sendButtonLight}>
              <Ionicons name="send" size={16} color="#111111" />
            </TouchableOpacity>
          </View>
        </Card>

        {/* Pending Tasks Card */}
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <Ionicons name="checkmark-circle" size={20} color="#F59E0B" />
              <Text style={styles.cardTitle}>Pending Tasks</Text>
            </View>
          </View>
          <Text style={styles.tasksNumber}>7 Tasks</Text>
          <Text style={styles.tasksDescription}>5 high priority, 2 medium priority</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '60%' }]} />
            </View>
          </View>
          
          <View style={styles.taskList}>
            <View style={styles.taskItem}>
              <Text style={styles.taskTitle}>Security Review</Text>
              <View style={[styles.priorityBadge, { backgroundColor: '#EF4444' }]}>
                <Text style={styles.priorityText}>High</Text>
              </View>
            </View>
            <View style={styles.taskItem}>
              <Text style={styles.taskTitle}>Client Presentation</Text>
              <View style={[styles.priorityBadge, { backgroundColor: '#6B7280' }]}>
                <Text style={styles.priorityText}>Medium</Text>
              </View>
            </View>
          </View>
        </Card>

        {/* Wellness Tracker Card */}
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <Ionicons name="cafe" size={20} color="#8B5CF6" />
              <Text style={styles.cardTitle}>Wellness Tracker</Text>
            </View>
          </View>
          <Text style={styles.wellnessNumber}>2.5 hrs</Text>
          <Text style={styles.wellnessDescription}>Recommended break time left</Text>
          <View style={styles.progressSection}>
            <Text style={styles.progressLabel}>Break Progress</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '60%' }]} />
              </View>
              <Text style={styles.progressText}>3/5</Text>
            </View>
          </View>
        </Card>

        {/* Urgent Tasks Card */}
        <Card style={styles.urgentCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <Ionicons name="warning" size={20} color="#EF4444" />
              <Text style={styles.cardTitle}>Urgent Tasks</Text>
            </View>
          </View>
          
          <View style={styles.urgentTaskList}>
            <View style={styles.urgentTaskItem}>
              <Text style={styles.urgentTaskTitle}>Security Review</Text>
              <Text style={styles.urgentTaskDue}>Due in 2 hours</Text>
              <View style={[styles.urgentPriorityBadge, { backgroundColor: '#EF4444' }]}>
                <Text style={styles.urgentPriorityText}>High Priority</Text>
              </View>
            </View>
            
            <View style={styles.urgentTaskItem}>
              <Text style={styles.urgentTaskTitle}>Client Presentation</Text>
              <Text style={styles.urgentTaskDue}>Tomorrow at 9 AM</Text>
              <View style={[styles.urgentPriorityBadge, { backgroundColor: '#6B7280' }]}>
                <Text style={styles.urgentPriorityText}>Medium Priority</Text>
              </View>
            </View>
            
            <View style={styles.urgentTaskItem}>
              <Text style={styles.urgentTaskTitle}>Code Documentation</Text>
              <Text style={styles.urgentTaskDue}>Due this week</Text>
              <View style={[styles.urgentPriorityBadge, { backgroundColor: '#9CA3AF' }]}>
                <Text style={styles.urgentPriorityText}>Low Priority</Text>
              </View>
            </View>
          </View>
        </Card>
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
  },
  scrollContent: {
    paddingHorizontal: 14,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  dateText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  card: {
    marginBottom: 14,
    backgroundColor: '#0F0F0F',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#222222',
  },
  cardHeader: {
    marginBottom: 12,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  focusNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  focusDescription: {
    fontSize: 14,
    color: '#A3A3A3',
    marginBottom: 14,
    lineHeight: 20,
  },
  performanceNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  performanceDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 16,
  },
  progressSection: {
    marginTop: 6,
  },
  progressLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#1E1E1E',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  chatContainer: {
    marginBottom: 16,
  },
  aiMessage: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  messageAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  messageAvatarLight: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  messageBubble: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 14,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  messageText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  avatarTextDark: {
    fontSize: 10,
    color: '#111111',
    fontWeight: '700',
  },
  userMessage: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  userMessageBubble: {
    backgroundColor: '#E5E7EB',
    padding: 12,
    borderRadius: 14,
    borderBottomRightRadius: 4,
    marginRight: 8,
    maxWidth: '80%',
  },
  userMessageText: {
    fontSize: 14,
    color: '#111111',
    lineHeight: 20,
  },
  userMessageAvatarDark: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userAvatarTextDark: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  inputContainerDark: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  textInputDark: {
    flex: 1,
    fontSize: 14,
    color: '#FFFFFF',
    paddingVertical: 2,
  },
  sendButtonLight: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  tasksNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  tasksDescription: {
    fontSize: 14,
    color: '#A3A3A3',
    marginBottom: 14,
  },
  taskList: {
    marginTop: 16,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#161616',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  priorityBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
  },
  priorityText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  wellnessNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  wellnessDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 16,
  },
  urgentCard: {
    marginBottom: 12,
    backgroundColor: '#1B1515',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#3A2626',
  },
  urgentTaskList: {
    marginTop: 16,
  },
  urgentTaskItem: {
    backgroundColor: '#2A1E1E',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#4B2F2F',
  },
  urgentTaskTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  urgentTaskDue: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  urgentPriorityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  urgentPriorityText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default DashboardScreen;
