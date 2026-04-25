
export interface Word {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'new' | 'learning' | 'mastered';
  reviewCount: number;
  nextReview: Date | null;
  createdAt: Date;
}

export interface Stats {
  totalWords: number;
  learnedWords: number;
  masteredWords: number;
  streak: number;
  lastStudyDate: Date | null;
  dailyStudy: Record<string, number>;
}
