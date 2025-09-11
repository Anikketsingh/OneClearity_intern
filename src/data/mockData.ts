import { User, Goal, Task, Achievement, Skill, PerformanceData, WellnessData, ChatMessage, QuickSuggestion } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@oneclarity.com',
  avatar: 'https://via.placeholder.com/150',
  rank: 'Senior Developer',
  points: 1300,
};

export const mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Complete Q4 Project',
    description: 'Finish the mobile app development project',
    progress: 75,
    target: 100,
    deadline: '2024-12-31',
    category: 'Development',
  },
  {
    id: '2',
    title: 'Learn React Native',
    description: 'Master React Native development',
    progress: 60,
    target: 100,
    deadline: '2024-11-30',
    category: 'Learning',
  },
  {
    id: '3',
    title: 'Team Collaboration',
    description: 'Improve team communication and collaboration',
    progress: 90,
    target: 100,
    deadline: '2024-12-15',
    category: 'Soft Skills',
  },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Review PR #1234',
    description: 'Review the authentication implementation',
    priority: 'high',
    status: 'pending',
    dueDate: '2024-01-15',
    category: 'Code Review',
  },
  {
    id: '2',
    title: 'Update Documentation',
    description: 'Update API documentation for new endpoints',
    priority: 'medium',
    status: 'in-progress',
    dueDate: '2024-01-20',
    category: 'Documentation',
  },
  {
    id: '3',
    title: 'Fix Bug #567',
    description: 'Fix the login issue on mobile devices',
    priority: 'urgent',
    status: 'pending',
    dueDate: '2024-01-12',
    category: 'Bug Fix',
  },
  {
    id: '4',
    title: 'Team Meeting',
    description: 'Weekly team standup meeting',
    priority: 'low',
    status: 'completed',
    dueDate: '2024-01-10',
    category: 'Meeting',
  },
];

export const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Code Master',
    description: 'Complete 100 code reviews',
    icon: 'code',
    rarity: 'rare',
    points: 500,
    unlockedAt: '2024-01-10',
  },
  {
    id: '2',
    title: 'Team Player',
    description: 'Help 10 team members',
    icon: 'users',
    rarity: 'uncommon',
    points: 200,
    unlockedAt: '2024-01-08',
  },
  {
    id: '3',
    title: 'Early Bird',
    description: 'Complete 5 tasks before deadline',
    icon: 'clock',
    rarity: 'common',
    points: 100,
    unlockedAt: '2024-01-05',
  },
  {
    id: '4',
    title: 'Learning Champion',
    description: 'Complete 20 learning modules',
    icon: 'book',
    rarity: 'epic',
    points: 1000,
    progress: 15,
    target: 20,
  },
  {
    id: '5',
    title: 'Innovation Leader',
    description: 'Propose 5 innovative ideas',
    icon: 'lightbulb',
    rarity: 'legendary',
    points: 2000,
    progress: 2,
    target: 5,
  },
];

export const mockSkills: Skill[] = [
  {
    id: '1',
    name: 'React Native',
    category: 'Mobile Development',
    level: 4,
    maxLevel: 5,
    progress: 80,
    description: 'Cross-platform mobile development framework',
    recommendations: [
      'Complete advanced React Native course',
      'Build a complex mobile application',
      'Learn about performance optimization',
    ],
  },
  {
    id: '2',
    name: 'TypeScript',
    category: 'Programming Languages',
    level: 3,
    maxLevel: 5,
    progress: 60,
    description: 'Strongly typed JavaScript superset',
    recommendations: [
      'Practice advanced TypeScript patterns',
      'Learn about generics and utility types',
      'Build projects with strict TypeScript',
    ],
  },
  {
    id: '3',
    name: 'UI/UX Design',
    category: 'Design',
    level: 2,
    maxLevel: 5,
    progress: 40,
    description: 'User interface and experience design',
    recommendations: [
      'Take a UI/UX design course',
      'Practice with design tools like Figma',
      'Study design principles and patterns',
    ],
  },
];

export const mockPerformanceData: PerformanceData = {
  monthlyGoal: 100,
  currentProgress: 75,
  percentage: 75,
  trend: 'up',
};

export const mockWellnessData: WellnessData = {
  breakTimeRemaining: 15,
  totalBreakTime: 30,
  lastBreak: '2024-01-10T10:30:00Z',
  recommendations: [
    'Take a 5-minute walk',
    'Do some stretching exercises',
    'Look away from the screen for 20 seconds',
  ],
};

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hello! I\'m your AI assistant. How can I help you today?',
    isUser: false,
    timestamp: '2024-01-10T09:00:00Z',
  },
  {
    id: '2',
    text: 'I need help with my performance goals',
    isUser: true,
    timestamp: '2024-01-10T09:01:00Z',
  },
  {
    id: '3',
    text: 'I can help you track your performance and suggest ways to improve. You\'re currently at 75% of your monthly goal. Would you like to see some tips to boost your productivity?',
    isUser: false,
    timestamp: '2024-01-10T09:01:30Z',
    category: 'Performance Analytics',
  },
];

export const mockQuickSuggestions: QuickSuggestion[] = [
  {
    id: '1',
    text: 'View Performance Analytics',
    category: 'Performance Analytics',
    icon: 'chart-line',
  },
  {
    id: '2',
    text: 'Manage Tasks',
    category: 'Task Management',
    icon: 'tasks',
  },
  {
    id: '3',
    text: 'Skill Development',
    category: 'Skill Development',
    icon: 'graduation-cap',
  },
  {
    id: '4',
    text: 'Career Guidance',
    category: 'Career Guidance',
    icon: 'briefcase',
  },
];
