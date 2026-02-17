export interface User {
  id: string;
  name: string;
  avatar: string;
  role: 'Student' | 'Mentor' | 'Alumni';
  performanceScore: number; // 0-100
  trustScore?: number;
  badges?: string[];
  company?: string;
  specialization?: string;
}

export interface Comment {
  id: string;
  userId: string;
  user: User;
  text: string;
  timestamp: number; // Seconds in video
  upvotes: number;
  isVerified?: boolean;
  isAnonymous?: boolean;
  replies?: Comment[];
  type: 'question' | 'insight' | 'resource';
}

export interface JobReferral {
  id: string;
  companyName: string;
  role: string;
  location: string;
  referrer: User;
  postedDate: string;
  tags: string[];
}

export interface SquadMatch {
  id: string;
  user: User;
  compatibilityScore: number;
  reason: string;
  skills: {
    subject: string;
    A: number; // User score
    B: number; // Match score
    fullMark: number;
  }[];
}

export enum TabView {
  LEARNING = 'learning',
  CAREER = 'career',
  SQUADS = 'squads',
  COLLAB = 'collab',
}
