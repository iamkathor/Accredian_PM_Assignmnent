import { User, Comment, JobReferral, SquadMatch } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Arjun',
  avatar: 'https://picsum.photos/seed/arjun/100/100',
  role: 'Student',
  performanceScore: 88,
  specialization: 'Data Science'
};

export const COMMENTS: Comment[] = [
  {
    id: 'c1',
    userId: 'u2',
    user: {
      id: 'u2',
      name: 'Vikram S.',
      avatar: 'https://picsum.photos/seed/vikram/100/100',
      role: 'Alumni',
      performanceScore: 94,
      company: 'Google'
    },
    text: 'Here is the cleaned dataset with null-value treatment we used in the previous module.',
    timestamp: 850, // 14:10
    upvotes: 45,
    isVerified: true,
    type: 'resource',
    replies: []
  },
  {
    id: 'c2',
    userId: 'u3',
    user: {
      id: 'u3',
      name: 'Sneha K.',
      avatar: 'https://picsum.photos/seed/sneha/100/100',
      role: 'Student',
      performanceScore: 76
    },
    text: 'Why did we use Random Forest here instead of XGBoost?',
    timestamp: 872, // 14:32
    upvotes: 12,
    type: 'question',
    replies: [
      {
        id: 'c2-r1',
        userId: 'm1',
        user: {
          id: 'm1',
          name: 'Dr. Rao',
          avatar: 'https://picsum.photos/seed/rao/100/100',
          role: 'Mentor',
          performanceScore: 100
        },
        text: 'Great question. At this stage, we want to prioritize interpretability over raw performance. RF gives us easier feature importance visibility.',
        timestamp: 872,
        upvotes: 8,
        isVerified: true,
        type: 'insight',
        replies: []
      }
    ]
  },
  {
    id: 'c3',
    userId: 'u4',
    user: {
      id: 'u4',
      name: 'Anonymous',
      avatar: '',
      role: 'Student',
      performanceScore: 0
    },
    text: 'I am completely lost on the hyperparameter tuning part. Can someone explain the "depth" parameter simply?',
    timestamp: 1200, // 20:00
    upvotes: 5,
    isAnonymous: true,
    type: 'question',
    replies: []
  }
];

export const REFERRALS: JobReferral[] = [
  {
    id: 'j1',
    companyName: 'Microsoft',
    role: 'Data Scientist II',
    location: 'Bangalore (Hybrid)',
    postedDate: '2 days ago',
    tags: ['Python', 'Azure', 'NLP'],
    referrer: {
      id: 'r1',
      name: 'Ananya G.',
      role: 'Alumni',
      avatar: 'https://picsum.photos/seed/ananya/100/100',
      performanceScore: 96,
      company: 'Microsoft'
    }
  },
  {
    id: 'j2',
    companyName: 'Swiggy',
    role: 'Senior Analyst',
    location: 'Remote',
    postedDate: '4 hours ago',
    tags: ['SQL', 'Tableau', 'Product'],
    referrer: {
      id: 'r2',
      name: 'Rahul M.',
      role: 'Student',
      avatar: 'https://picsum.photos/seed/rahul/100/100',
      performanceScore: 92,
      company: 'Swiggy'
    }
  },
  {
    id: 'j3',
    companyName: 'Cred',
    role: 'Backend Engineer (Data)',
    location: 'Bangalore',
    postedDate: '1 week ago',
    tags: ['Go', 'Kafka', 'Postgres'],
    referrer: {
      id: 'r3',
      name: 'Priya D.',
      role: 'Alumni',
      avatar: 'https://picsum.photos/seed/priya/100/100',
      performanceScore: 89,
      company: 'Cred'
    }
  }
];

export const SQUAD_MATCHES: SquadMatch[] = [
  {
    id: 's1',
    compatibilityScore: 94,
    reason: "Riya is strong in Storytelling & Viz, which complements your heavy Python/Backend skills.",
    user: {
      id: 'm1',
      name: 'Riya S.',
      role: 'Student',
      avatar: 'https://picsum.photos/seed/riya/100/100',
      performanceScore: 91,
      specialization: 'Business Analytics'
    },
    skills: [
      { subject: 'Python', A: 90, B: 60, fullMark: 100 },
      { subject: 'Stats', A: 85, B: 70, fullMark: 100 },
      { subject: 'Viz', A: 50, B: 95, fullMark: 100 },
      { subject: 'Story', A: 40, B: 90, fullMark: 100 },
      { subject: 'SQL', A: 80, B: 65, fullMark: 100 },
    ]
  },
  {
    id: 's2',
    compatibilityScore: 88,
    reason: "Karthik has deep domain expertise in Finance, matching your goal to build a Fintech Capstone.",
    user: {
      id: 'm2',
      name: 'Karthik N.',
      role: 'Student',
      avatar: 'https://picsum.photos/seed/karthik/100/100',
      performanceScore: 85,
      specialization: 'Finance'
    },
    skills: [
      { subject: 'Python', A: 90, B: 75, fullMark: 100 },
      { subject: 'Stats', A: 85, B: 85, fullMark: 100 },
      { subject: 'Viz', A: 50, B: 60, fullMark: 100 },
      { subject: 'Story', A: 40, B: 70, fullMark: 100 },
      { subject: 'SQL', A: 80, B: 80, fullMark: 100 },
    ]
  }
];
