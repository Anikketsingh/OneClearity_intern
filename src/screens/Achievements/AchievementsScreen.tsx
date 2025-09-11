import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../../components/navigation/AppHeader';
import { Card } from '../../components/common/Card';

const AchievementsScreen: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'recent' | 'all'>('recent');

  const achievementsData = [
    {
      id: '1',
      title: 'AWS Certified Solutions Architect',
      description: 'Achieved AWS Solutions Architect Associate certification',
      rarity: 'Epic',
      points: '+1000 pts',
      date: '10/08/2025',
      isCompleted: true,
      icon: 'cloud-done',
    },
    {
      id: '2',
      title: 'Published Technical Blog',
      description: 'Published an article on React Native best practices',
      rarity: 'Rare',
      points: '+600 pts',
      date: '01/07/2025',
      isCompleted: true,
      icon: 'document-text',
    },
    {
      id: '3',
      title: 'Open Source Contributor',
      description: 'Contributed to 3 open source repositories',
      rarity: 'Uncommon',
      points: '+400 pts',
      date: '15/06/2025',
      isCompleted: true,
      icon: 'git-branch',
    },
    {
      id: '4',
      title: 'Conference Speaker',
      description: 'Spoke at a national tech conference',
      rarity: 'Epic',
      points: '+1200 pts',
      progress: 60,
      isCompleted: false,
      icon: 'mic',
    },
    {
      id: '5',
      title: 'UI/UX Design Sprint',
      description: 'Led a successful design sprint for a new product',
      rarity: 'Rare',
      points: '+700 pts',
      progress: 80,
      isCompleted: false,
      icon: 'color-palette',
    },
    {
      id: '6',
      title: 'Team Collaboration',
      description: 'Collaborated on 5 cross-functional projects',
      rarity: 'Common',
      points: '+300 pts',
      date: '20/05/2025',
      isCompleted: true,
      icon: 'people',
    },
  ];

  const recentAchievements = achievementsData.filter(a => a.isCompleted);
  const allAchievements = achievementsData;

  const renderAchievementCard = ({ item: achievement }: { item: any }) => {
    let badgeColor = '#374151';
    let badgeTextColor = '#fff';
    if (achievement.rarity === 'Epic') { badgeColor = '#8B5CF6'; }
    else if (achievement.rarity === 'Rare') { badgeColor = '#3B82F6'; }
    else if (achievement.rarity === 'Uncommon') { badgeColor = '#60A5FA'; }
    else if (achievement.rarity === 'Common') { badgeColor = '#6B7280'; }

    return (
      <Card style={styles.achievementCard}>
        <View style={styles.achievementHeader}>
          <View style={styles.achievementIcon}>
            <Ionicons name={achievement.icon as any} size={22} color={badgeColor} />
          </View>
          <View style={styles.achievementInfo}>
            <Text style={styles.achievementTitle}>{achievement.title}</Text>
            <Text style={styles.achievementDescription}>{achievement.description}</Text>
          </View>
          <View style={[styles.rarityBadge, { backgroundColor: badgeColor }]}>
            <Text style={[styles.rarityText, { color: badgeTextColor }]}>{achievement.rarity}</Text>
            <Text style={[styles.pointsText, { color: badgeTextColor }]}>{achievement.points}</Text>
          </View>
        </View>
        {achievement.isCompleted ? (
          <Text style={styles.completedDate}>{achievement.date}</Text>
        ) : (
          <View style={styles.progressSection}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${achievement.progress}%`, backgroundColor: badgeColor }]} />
            </View>
            <Text style={styles.progressText}>{achievement.progress}% complete</Text>
          </View>
        )}
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Achievements" subtitle="Your professional accomplishments and milestones" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Summary Cards */}
        <View style={styles.summaryCards}>
          <Card style={styles.summaryCard}>
            <View style={styles.cardHeader}>
              <Ionicons name="trophy" size={20} color="#F59E0B" />
              <Text style={styles.cardTitle}>Current Rank</Text>
            </View>
            <Text style={styles.cardNumber}>#3</Text>
            <Text style={styles.cardDescription}>Team position</Text>
          </Card>

          <Card style={styles.summaryCard}>
            <View style={styles.cardHeader}>
              <Ionicons name="globe" size={20} color="#3B82F6" />
              <Text style={styles.cardTitle}>Total Points</Text>
            </View>
            <Text style={styles.cardNumber}>1300</Text>
            <Text style={styles.cardDescription}>Achievement points</Text>
          </Card>

          <Card style={styles.summaryCard}>
            <View style={styles.cardHeader}>
              <Ionicons name="lock-closed" size={20} color="#10B981" />
              <Text style={styles.cardTitle}>Completed</Text>
            </View>
            <Text style={styles.cardNumber}>4</Text>
            <Text style={styles.cardDescription}>Achievements earned</Text>
          </Card>

          <Card style={styles.summaryCard}>
            <View style={styles.cardHeader}>
              <Ionicons name="star" size={20} color="#8B5CF6" />
              <Text style={styles.cardTitle}>Progress</Text>
            </View>
            <Text style={styles.cardNumber}>67%</Text>
            <Text style={styles.cardDescription}>Overall completion</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '67%' }]} />
            </View>
          </Card>
        </View>

        {/* Recent Achievements */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="star" size={20} color="#FFF" />
            <Text style={styles.sectionTitle}>Recent Achievements</Text>
          </View>
          <FlatList
            data={recentAchievements.slice(0, 3)}
            renderItem={renderAchievementCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        {/* All Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Achievements</Text>
          <FlatList
            data={allAchievements}
            renderItem={renderAchievementCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollView: { flex: 1, padding: 16 },

  summaryCards: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  summaryCard: {
    width: '48%',
    backgroundColor: '#0B0F14',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#111827',
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  cardTitle: { fontSize: 14, fontWeight: '600', color: '#FFF' },
  cardNumber: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 4 },
  cardDescription: { fontSize: 12, color: '#9CA3AF' },

  progressBar: {
    height: 8,
    backgroundColor: '#111827',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
  },
  progressFill: { height: '100%', backgroundColor: '#FFF', borderRadius: 4 },

  section: { marginBottom: 24 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#FFF' },

  achievementCard: {
    backgroundColor: '#0F1724',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#111827',
  },
  achievementHeader: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 12 },
  achievementIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255,255,255,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  achievementInfo: { flex: 1, marginRight: 8 },
  achievementTitle: { fontSize: 16, fontWeight: '700', color: '#FFF', marginBottom: 4 },
  achievementDescription: { fontSize: 13, color: '#9CA3AF', lineHeight: 18 },

  rarityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    alignItems: 'center',
  },
  rarityText: { fontSize: 12, fontWeight: '600' },
  pointsText: { fontSize: 12, fontWeight: '600' },

  completedDate: { fontSize: 12, color: '#9CA3AF', textAlign: 'right' },
  progressSection: { marginTop: 8 },
  progressText: { fontSize: 12, color: '#9CA3AF', marginTop: 6 },
});

export default AchievementsScreen;
