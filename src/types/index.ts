export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  rank: string;
  points: number;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  deadline: string;
  category: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  points: number;
  unlockedAt?: string;
  progress?: number;
  target?: number;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  maxLevel: number;
  progress: number;
  description: string;
  recommendations: string[];
}

export interface PerformanceData {
  monthlyGoal: number;
  currentProgress: number;
  percentage: number;
  trend: 'up' | 'down' | 'stable';
}

export interface WellnessData {
  breakTimeRemaining: number;
  totalBreakTime: number;
  lastBreak: string;
  recommendations: string[];
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
  category?: string;
}

export interface QuickSuggestion {
  id: string;
  text: string;
  category: string;
  icon: string;
}
