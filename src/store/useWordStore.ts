import { create } from 'zustand';
import { initialWords } from '../data/words';

interface WordStore {
  words: any[];
  currentWordIndex: number;
  stats: any;
  searchResults: any | null;
  isSearching: boolean;
  addWord: (word: any) => void;
  updateWordStatus: (id: string, status: any) => void;
  nextWord: () => void;
  prevWord: () => void;
  getReviewWords: () => any[];
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
  initializeWords: () => void;
  resetWords: () => void;
  fetchWordDefinition: (word: string) => Promise<void>;
  clearSearchResults: () => void;
}

export const useWordStore = create<WordStore>((set, get) => ({
  words: [],
  currentWordIndex: 0,
  stats: {
    totalWords: 0,
    learnedWords: 0,
    masteredWords: 0,
    streak: 0,
    lastStudyDate: null,
    dailyStudy: {}
  },
  searchResults: null,
  isSearching: false,

  initializeWords: () => {
    const { loadFromLocalStorage } = get();
    loadFromLocalStorage();
    
    const currentWords = get().words;
    if (currentWords.length === 0) {
      const newWords = initialWords.map((word, index) => ({
        ...word,
        id: `word-${index}-${Date.now()}`,
        createdAt: new Date()
      }));
      
      set({
        words: newWords,
        stats: {
          totalWords: newWords.length,
          learnedWords: 0,
          masteredWords: 0,
          streak: 0,
          lastStudyDate: null,
          dailyStudy: {}
        }
      });
      
      get().saveToLocalStorage();
    }
  },

  resetWords: () => {
    // 清空本地存储
    localStorage.removeItem('words');
    localStorage.removeItem('stats');
    
    // 重新加载初始单词
    const newWords = initialWords.map((word, index) => ({
      ...word,
      id: `word-${index}-${Date.now()}`,
      createdAt: new Date()
    }));
    
    set({
      words: newWords,
      stats: {
        totalWords: newWords.length,
        learnedWords: 0,
        masteredWords: 0,
        streak: 0,
        lastStudyDate: null,
        dailyStudy: {}
      }
    });
    
    get().saveToLocalStorage();
  },

  addWord: (word) => {
    const newWord = {
      ...word,
      id: `word-${Date.now()}`,
      createdAt: new Date()
    };
    
    set((state) => {
      const newWords = [...state.words, newWord];
      return {
        words: newWords,
        stats: {
          ...state.stats,
          totalWords: newWords.length
        }
      };
    });
    
    get().saveToLocalStorage();
  },

  updateWordStatus: (id, status) => {
    const today = new Date().toISOString().split('T')[0];
    
    set((state) => {
      const newWords = state.words.map((word) => {
        if (word.id === id) {
          let nextReview = null;
          const newReviewCount = word.reviewCount + 1;
          
          if (status === 'mastered') {
            const days = Math.min(30, Math.pow(2, newReviewCount));
            nextReview = new Date();
            nextReview.setDate(nextReview.getDate() + days);
          } else if (status === 'learning') {
            nextReview = new Date();
            nextReview.setDate(nextReview.getDate() + 1);
          }
          
          return {
            ...word,
            status,
            reviewCount: newReviewCount,
            nextReview
          };
        }
        return word;
      });
      
      const learnedWords = newWords.filter((w) => w.status !== 'new').length;
      const masteredWords = newWords.filter((w) => w.status === 'mastered').length;
      
      const newDailyStudy = { ...state.stats.dailyStudy };
      newDailyStudy[today] = (newDailyStudy[today] || 0) + 1;
      
      let newStreak = state.stats.streak;
      const lastDate = state.stats.lastStudyDate;
      
      if (lastDate) {
        const last = new Date(lastDate);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (last.toDateString() === yesterday.toDateString()) {
          newStreak += 1;
        } else if (last.toDateString() !== new Date().toDateString()) {
          newStreak = 1;
        }
      } else {
        newStreak = 1;
      }
      
      return {
        words: newWords,
        stats: {
          ...state.stats,
          learnedWords,
          masteredWords,
          streak: newStreak,
          lastStudyDate: new Date(),
          dailyStudy: newDailyStudy
        }
      };
    });
    
    get().saveToLocalStorage();
  },

  nextWord: () => {
    set((state) => ({
      currentWordIndex: Math.min(state.currentWordIndex + 1, state.words.length - 1)
    }));
  },

  prevWord: () => {
    set((state) => ({
      currentWordIndex: Math.max(state.currentWordIndex - 1, 0)
    }));
  },

  getReviewWords: () => {
    const today = new Date();
    return get().words.filter((word) => {
      if (!word.nextReview) return false;
      return new Date(word.nextReview) <= today;
    });
  },

  saveToLocalStorage: () => {
    const { words, stats } = get();
    localStorage.setItem('words', JSON.stringify(words));
    localStorage.setItem('stats', JSON.stringify(stats));
  },

  loadFromLocalStorage: () => {
    const savedWords = localStorage.getItem('words');
    const savedStats = localStorage.getItem('stats');
    
    if (savedWords) {
      const parsedWords = JSON.parse(savedWords).map((word: any) => ({
        ...word,
        createdAt: new Date(word.createdAt),
        nextReview: word.nextReview ? new Date(word.nextReview) : null
      }));
      
      set({ words: parsedWords });
    }
    
    if (savedStats) {
      const parsedStats = JSON.parse(savedStats);
      set({
        stats: {
          ...parsedStats,
          lastStudyDate: parsedStats.lastStudyDate ? new Date(parsedStats.lastStudyDate) : null
        }
      });
    }
  },

  fetchWordDefinition: async (word: string) => {
    set({ isSearching: true, searchResults: null });
    
    try {
      // 1. 获取英文定义
      const dictResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      
      if (!dictResponse.ok) {
        throw new Error('Word not found');
      }
      
      const dictData = await dictResponse.json();
      
      // 2. 获取中文翻译（使用免费的翻译API）
      let chineseTranslation = '暂无中文翻译';
      try {
        const translateResponse = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${encodeURIComponent(word)}`);
        if (translateResponse.ok) {
          const translateData = await translateResponse.json();
          if (translateData && translateData[0] && translateData[0][0]) {
            chineseTranslation = translateData[0][0][0];
          }
        }
      } catch (translateError) {
        console.error('Error fetching translation:', translateError);
      }
      
      // 处理API响应，提取需要的信息
      const wordData = {
        word: dictData[0].word,
        phonetic: dictData[0].phonetics?.find((p: any) => p.text)?.text || '',
        meanings: dictData[0].meanings.map((meaning: any) => ({
          partOfSpeech: meaning.partOfSpeech,
          definitions: meaning.definitions.map((def: any) => ({
            definition: def.definition,
            example: def.example || ''
          }))
        })),
        chineseTranslation
      };
      
      set({ searchResults: wordData, isSearching: false });
    } catch (error) {
      console.error('Error fetching word definition:', error);
      set({ searchResults: null, isSearching: false });
    }
  },

  clearSearchResults: () => {
    set({ searchResults: null, isSearching: false });
  }
}));
