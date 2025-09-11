import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


import AppHeader from '../../components/navigation/AppHeader';
import { Card } from '../../components/common/Card';

const SkillsScreen: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const skillsData = [
    { name: 'JavaScript', category: 'Technical', progress: 90, improvement: '+5%', tasks: 2, color: '#10B981' },
    { name: 'React', category: 'Technical', progress: 85, improvement: '+8%', tasks: 2, color: '#3B82F6' },
    { name: 'TypeScript', category: 'Technical', progress: 78, improvement: '+12%', tasks: 1, color: '#3B82F6' },
    { name: 'Node.js', category: 'Technical', progress: 82, improvement: '+2%', tasks: 1, color: '#3B82F6' },
  ];

  const learningModules = [
    { title: 'Advanced TypeScript', description: 'Enhance your development skills with advanced patterns', difficulty: 'Intermediate', duration: '4 weeks' },
    { title: 'Leadership Fundamentals', description: 'Build essential leadership capabilities for team management', difficulty: 'Beginner', duration: '6 weeks' },
    { title: 'System Design', description: 'Learn to design scalable distributed systems', difficulty: 'Advanced', duration: '8 weeks' },
    { title: 'Agile Methodology', description: 'Master agile practices and scrum framework', difficulty: 'Intermediate', duration: '3 weeks' },
  ];

  const filters = ['All', 'Technical'];


  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="My Skills" subtitle="Track and improve your professional capabilities" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        {/* Progress Cards */}
        <View style={styles.progressCards}>
          <Card style={styles.progressCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Ionicons name="ellipse" size={16} color="#3B82F6" />
                <Text style={styles.cardTitle}>Overall Progress</Text>
              </View>
            </View>
            <Text style={styles.progressNumber}>82%</Text>
            <Text style={styles.progressDescription}>Average skill level</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '82%' }]} />
            </View>
          </Card>

          <Card style={styles.progressCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Ionicons name="trending-up" size={20} color="#10B981" />
                <Text style={styles.cardTitle}>This Month</Text>
              </View>
            </View>
            <Text style={styles.progressNumber}>+7%</Text>
            <Text style={styles.progressDescription}>Skills improvement</Text>
          </Card>

          <Card style={styles.progressCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Ionicons name="school" size={20} color="#8B5CF6" />
                <Text style={styles.cardTitle}>Certifications</Text>
              </View>
            </View>
            <Text style={styles.progressNumber}>5</Text>
            <Text style={styles.progressDescription}>Completed this year</Text>
          </Card>
        </View>

        {/* Skill Assessment */}
        <View style={styles.skillAssessmentCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="star" size={20} color="#FFFFFF" />
            <Text style={styles.sectionTitle}>Skill Assessment</Text>
          </View>

          {/* Filter Buttons as pill tabs */}
          <View style={styles.filterTabs}>
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.tabButton,
                  selectedFilter === filter && styles.activeTabButton,
                ]}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedFilter === filter && styles.activeTabText,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Skills List - compact, modern card look */}
          <View style={styles.skillsListAssessment}>
            {skillsData.map((skill, index) => (
              <View key={index} style={styles.skillAssessmentItem}>
                <View style={styles.skillAssessmentHeader}>
                  <Text style={styles.skillAssessmentName}>{skill.name}</Text>
                  <View style={styles.skillAssessmentBadge}><Text style={styles.skillAssessmentBadgeText}>{skill.category}</Text></View>
                  <Ionicons name="trending-up" size={14} color="#10B981" style={{ marginLeft: 8 }} />
                  <Text style={styles.skillAssessmentImprovement}>{skill.improvement}</Text>
                  <Text style={[styles.skillAssessmentPercent, { color: skill.color }]}>{skill.progress}%</Text>
                </View>
                <View style={styles.progressBarAssessment}>
                  <View style={[styles.progressFillAssessment, { width: `${skill.progress}%` }]} />
                </View>
                <Text style={styles.skillAssessmentTasks}>{skill.tasks} task{skill.tasks > 1 ? 's' : ''} assigned</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.viewMoreButtonAssessment}>
            <Ionicons name="add" size={16} color="#fff" />
            <Text style={styles.viewMoreTextAssessment}>View More Skills (4 remaining)</Text>
          </TouchableOpacity>
        </View>

        {/* Recommended Learning */}
        <View style={styles.recommendedLearningCard}>
          <View style={styles.sectionHeader}>
            <Ionicons name="book" size={20} color="#FFFFFF" />
            <Text style={styles.sectionTitle}>Recommended Learning</Text>
          </View>

          <View style={styles.learningModulesModern}>
            {learningModules.map((module, index) => (
              <View key={index} style={styles.learningModuleItem}>
                <View style={styles.learningModuleHeader}>
                  <Text style={styles.learningModuleTitle}>{module.title}</Text>
                  <Text style={styles.learningModuleDifficulty}>{module.difficulty}</Text>
                </View>
                <Text style={styles.learningModuleDescription}>{module.description}</Text>
                <View style={styles.learningModuleFooter}>
                  <Text style={styles.learningModuleDuration}>{module.duration}</Text>
                  <TouchableOpacity style={styles.learningModuleButton}>
                    <Text style={styles.learningModuleButtonText}>Start Learning</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="chatbubble" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  titleContainer: {
    flex: 1,
  },
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
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    marginBottom: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  addButtonText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '600',
  },
  progressCards: {
    flexDirection: 'column',
    marginBottom: 12,
  },
  progressCard: {
    backgroundColor: '#0F0F0F',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#222222',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  progressNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  progressDescription: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#1E1E1E',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  skillAssessmentCard: {
    backgroundColor: '#111112',
    borderRadius: 16,
    padding: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#232323',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  filterTabs: {
    flexDirection: 'row',
    backgroundColor: '#18181b',
    borderRadius: 12,
    marginBottom: 18,
    padding: 4,
    justifyContent: 'space-between',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeTabButton: {
    backgroundColor: '#000',
  },
  tabText: {
    color: '#b3b3b3',
    fontWeight: '600',
    fontSize: 15,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '700',
  },
  skillsListAssessment: {
    gap: 14,
    marginBottom: 12,
  },
  skillAssessmentItem: {
    backgroundColor: '#18181b',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#232323',
    marginBottom: 0,
  },
  skillAssessmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  skillAssessmentName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginRight: 8,
  },
  skillAssessmentBadge: {
    backgroundColor: '#232323',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 8,
  },
  skillAssessmentBadgeText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  skillAssessmentImprovement: {
    color: '#10B981',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 2,
    marginRight: 8,
  },
  skillAssessmentPercent: {
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 'auto',
  },
  progressBarAssessment: {
    height: 7,
    backgroundColor: '#232323',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFillAssessment: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  skillAssessmentTasks: {
    color: '#b3b3b3',
    fontSize: 13,
    marginTop: 2,
  },
  viewMoreButtonAssessment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 8,
  },
  viewMoreTextAssessment: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  filterContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#374151',
  },
  activeFilterButton: {
    backgroundColor: '#1F2937',
  },
  filterText: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  skillsList: {
    gap: 12,
    marginBottom: 16,
  },
  skillCard: {
    backgroundColor: '#0F0F0F',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#222222',
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  skillBadge: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  skillBadgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  skillProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  skillProgressLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  improvementText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
  },
  skillPercentage: {
    fontSize: 16,
    fontWeight: '600',
  },
  tasksText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
  },
  viewMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6,
    paddingVertical: 12,
  },
  viewMoreText: {
    fontSize: 14,
    color: '#6366F1',
    fontWeight: '500',
  },
  recommendedLearningCard: {
    backgroundColor: '#111112',
    borderRadius: 16,
    padding: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#232323',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  learningModulesModern: {
    gap: 14,
    marginBottom: 4,
  },
  learningModuleItem: {
    backgroundColor: '#18181b',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#232323',
    marginBottom: 0,
  },
  learningModuleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  learningModuleTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginRight: 8,
  },
  learningModuleDifficulty: {
    backgroundColor: '#232323',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  learningModuleDescription: {
    color: '#b3b3b3',
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  learningModuleFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  learningModuleDuration: {
    color: '#b3b3b3',
    fontSize: 13,
  },
  learningModuleButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 16,
  },
  learningModuleButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
  learningModules: {
    gap: 12,
  },
  learningCard: {
    backgroundColor: '#0F0F0F',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#222222',
  },
  learningHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  learningTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  difficultyText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  learningDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 12,
    lineHeight: 20,
  },
  learningFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  durationText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  startButton: {
    backgroundColor: '#6366F1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  startButtonText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default SkillsScreen;
