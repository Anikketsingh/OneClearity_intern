import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AppHeader from '../../components/navigation/AppHeader';
import { Card } from '../../components/common/Card';

const ChatbotScreen: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text:
        "Here's your performance summary: You've completed 80% of your goals this month with a 127% target achievement rate. Your recent focus areas show strong progress in TypeScript (+12%) and Team Leadership (+15%). Would you like me to dive deeper into any specific area?",
      isUser: false,
      timestamp: '2024-01-10T17:57:00Z',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const sendUserMessage = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const userMsg = {
      id: Date.now().toString(),
      text: trimmed,
      isUser: true,
      timestamp: new Date().toISOString(),
    };
    setMessages((p) => [...p, userMsg]);
    setInputText('');

    // simple simulated AI response for visual purpose
    setTimeout(() => {
      const aiResp = {
        id: (Date.now() + 1).toString(),
        text:
          "Thanks — I can help with that. Here are some quick suggestions and next steps I can run for you.",
        isUser: false,
        timestamp: new Date().toISOString(),
      };
      setMessages((p) => [...p, aiResp]);
    }, 800);
  };

  const quickSuggestions = [
    { id: '1', text: 'Show', icon: 'eye' },
    { id: '2', text: 'What', icon: 'help-circle' },
    { id: '3', text: 'Schedule', icon: 'calendar' },
    { id: '4', text: 'Performance', icon: 'bar-chart' },
  ];

  const capabilities = [
    {
      id: '1',
      title: 'Performance Analytics',
      description: 'Track goals, metrics, and progress insights',
      icon: 'bar-chart',
      color: '#3B82F6',
    },
    {
      id: '2',
      title: 'Task Management',
      description: 'Organize priorities and deadlines',
      icon: 'calendar',
      color: '#10B981',
    },
    {
      id: '3',
      title: 'Skill Development',
      description: 'Learning recommendations and progress',
      icon: 'trending-up',
      color: '#8B5CF6',
    },
    {
      id: '4',
      title: 'Career Guidance',
      description: 'Professional development advice',
      icon: 'bulb',
      color: '#F59E0B',
    },
  ];

  const renderMessage = ({ item }: { item: any }) => {
    const isAI = !item.isUser;
    return (
      <View
        style={[
          styles.messageRow,
          isAI ? styles.aiRow : styles.userRow,
        ]}
      >
        <View style={[styles.bubble, isAI ? styles.aiBubble : styles.userBubble]}>
          <Text style={[styles.messageText, isAI ? styles.aiText : styles.userText]}>
            {item.text}
          </Text>
          <Text style={styles.msgTime}>
            {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="OneClarity Chatbot" subtitle="Your AI-powered work assistant" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Assistant Card */}
        <View style={styles.assistantCard}>
          <View style={styles.assistantTop}>
            <View style={styles.assistantTitleWrap}>
              <Text style={styles.assistantTitle}>OneClarity Assistant</Text>
            </View>

            <View style={styles.onlineWrap}>
              <View style={styles.onlineDot} />
              <Text style={styles.onlineText}>Active</Text>
            </View>
          </View>

          {/* messages list inside the card */}
          <View style={styles.messagesArea}>
            <FlatList
              data={messages}
              renderItem={renderMessage}
              keyExtractor={(i) => i.id}
              scrollEnabled={false}
            />
          </View>

          {/* Quick suggestions inside the card */}
          <View style={styles.quickArea}>
            <Text style={styles.quickTitle}>Quick suggestions:</Text>
            <View style={styles.quickRow}>
              {quickSuggestions.slice(0, 3).map((q) => (
                <TouchableOpacity
                  key={q.id}
                  style={styles.quickPill}
                  activeOpacity={0.8}
                  onPress={() => {
                    // insert suggestion text into input (UX choice)
                    setInputText((t) => (t ? `${t} ${q.text}` : q.text));
                  }}
                >
                  <Ionicons name={q.icon as any} size={14} color="#fff" style={{ marginRight: 8 }} />
                  <Text style={styles.quickPillText}>{q.text}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Secondary wide pill (Performance) like screenshot */}
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity style={styles.widePill} activeOpacity={0.85}>
                <Ionicons name="bar-chart" size={14} color="#fff" style={{ marginRight: 8 }} />
                <Text style={styles.widePillText}>Performance</Text>
              </TouchableOpacity>
            </View>

            {/* Input inside card */}
            <View style={styles.cardInputWrap}>
              <TextInput
                value={inputText}
                onChangeText={setInputText}
                placeholder="Ask me about your work..."
                placeholderTextColor="#9CA3AF"
                style={styles.cardTextInput}
                multiline
              />
              <TouchableOpacity
                style={[styles.sendBtn, !inputText.trim() && styles.sendBtnDisabled]}
                onPress={sendUserMessage}
                disabled={!inputText.trim()}
              >
                <Ionicons name="send" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* What I Can Help You With */}
        <View style={styles.helpSection}>
          <View style={styles.helpHeader}>
            <Ionicons name="help-circle" size={18} color="#fff" />
            <Text style={styles.helpTitle}>What I Can Help You With</Text>
          </View>

          <View style={styles.helpList}>
            {capabilities.map((c) => (
              <Card key={c.id} style={styles.capCard}>
                <View style={styles.capRow}>
                  <View style={[styles.capIconWrap]}>
                    <Ionicons name={c.icon as any} size={20} color={c.color} />
                  </View>
                  <View style={styles.capTextWrap}>
                    <Text style={styles.capTitle}>{c.title}</Text>
                    <Text style={styles.capDesc}>{c.description}</Text>
                  </View>
                </View>
              </Card>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollContent: { padding: 16, paddingBottom: Platform.select({ ios: 40, android: 56 }) },

  // assistant card
  assistantCard: {
    backgroundColor: '#0B0F14', // card darker than background
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#111827',
    // subtle inner shadow (android/elevation + ios shadow)
    ...Platform.select({
      android: { elevation: 1 },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
      },
    }),
  },
  assistantTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  assistantTitleWrap: { flexDirection: 'row', alignItems: 'center' },
  assistantTitle: { color: '#fff', fontSize: 16, fontWeight: '700' },

  onlineWrap: { flexDirection: 'row', alignItems: 'center' },
  onlineDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#10B981', marginRight: 8 },
  onlineText: { color: '#9CA3AF', fontSize: 12 },

  // messages area
  messagesArea: {
    marginBottom: 12,
  },
  messageRow: {
    marginBottom: 12,
  },
  aiRow: { alignItems: 'flex-start' },
  userRow: { alignItems: 'flex-end' },

  bubble: {
    maxWidth: '86%',
    padding: 12,
    borderRadius: 10,
  },
  aiBubble: {
    backgroundColor: '#0F1724',
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB', // blue accent on left
    // make left side more squarish similar to screenshot
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: '#6366F1',
    borderBottomRightRadius: 4,
  },

  messageText: {
    fontSize: 14,
    lineHeight: 20,
  },
  aiText: { color: '#fff' },
  userText: { color: '#fff' },

  msgTime: {
    marginTop: 8,
    fontSize: 11,
    color: '#9CA3AF',
    textAlign: 'right',
  },

  // quick suggestions
  quickArea: {
    marginTop: 6,
  },
  quickTitle: {
    color: '#D1D5DB',
    fontSize: 13,
    marginBottom: 8,
  },
  quickRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quickPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 10,
    marginBottom: 8,
  },
  quickPillText: { color: '#fff', fontSize: 13 },

  widePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111827',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    width: '60%',
  },
  widePillText: { color: '#fff', fontSize: 14, fontWeight: '600' },

  // input inside the card
  cardInputWrap: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F1724',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 6,
  },
  cardTextInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 2,
    maxHeight: 90,
  },
  sendBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#6366F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  sendBtnDisabled: {
    backgroundColor: '#374151',
  },

  // help / capabilities
  helpSection: { marginTop: 6 },
  helpHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  helpTitle: { color: '#fff', fontSize: 16, fontWeight: '700', marginLeft: 8 },

  helpList: {},
  capCard: {
    backgroundColor: '#0F1724',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#111827',
  },
  capRow: { flexDirection: 'row', alignItems: 'center' },
  capIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.03)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  capTextWrap: { flex: 1 },
  capTitle: { color: '#fff', fontSize: 15, fontWeight: '600' },
  capDesc: { color: '#9CA3AF', fontSize: 12, marginTop: 4 },
});

export default ChatbotScreen;
