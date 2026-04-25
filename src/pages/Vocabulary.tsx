import { useState, useEffect } from 'react';
import { useWordStore } from '../store/useWordStore';
import { Search, Volume2, Loader2, Plus } from 'lucide-react';

export default function Vocabulary() {
  const { 
    words, 
    initializeWords, 
    addWord, 
    fetchWordDefinition, 
    searchResults, 
    isSearching,
    clearSearchResults,
    resetWords
  } = useWordStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'new' | 'learning' | 'mastered'>('all');
  const [apiSearchTerm, setApiSearchTerm] = useState('');

  useEffect(() => {
    initializeWords();
  }, [initializeWords]);

  const filteredWords = words.filter((word) => {
    const matchesSearch = word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         word.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || word.status === filter;
    return matchesSearch && matchesFilter;
  });

  const handleSpeak = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-gray-100 text-gray-800';
      case 'learning':
        return 'bg-blue-100 text-blue-800';
      case 'mastered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new':
        return '新单词';
      case 'learning':
        return '学习中';
      case 'mastered':
        return '已掌握';
      default:
        return '未知';
    }
  };

  const getDifficultyBadgeClass = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '简单';
      case 'medium':
        return '中等';
      case 'hard':
        return '困难';
      default:
        return '未知';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">单词表</h1>
          <p className="text-gray-600">共 {words.length} 个单词</p>
          <button
            onClick={resetWords}
            className="mt-4 px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
          >
            重置单词库（加载新单词）
          </button>
        </div>

        <div className="mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索单词或释义..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {(['all', 'new', 'learning', 'mastered'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {f === 'all' ? '全部' : getStatusText(f)}
              </button>
            ))}
          </div>
        </div>

        {/* API 单词搜索 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">查询新单词</h2>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="输入单词查询..."
                value={apiSearchTerm}
                onChange={(e) => setApiSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && apiSearchTerm && fetchWordDefinition(apiSearchTerm)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => apiSearchTerm && fetchWordDefinition(apiSearchTerm)}
              disabled={isSearching || !apiSearchTerm}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:bg-gray-400 transition-colors flex items-center gap-2"
            >
              {isSearching ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  搜索中...
                </>
              ) : (
                '查询'
              )}
            </button>
          </div>
        </div>

        {/* 搜索结果 */}
        {searchResults && (
          <div className="mb-8 bg-white rounded-xl p-6 shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{searchResults.word}</h3>
                <p className="text-gray-500 mt-1">{searchResults.phonetic}</p>
              </div>
              <button
                onClick={() => handleSpeak(searchResults.word)}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Volume2 className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">释义</h4>
              {searchResults.meanings.map((meaning: any, index: number) => (
                <div key={index} className="mb-3">
                  <p className="text-sm font-medium text-gray-600 mb-1">{meaning.partOfSpeech}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {meaning.definitions.map((def: any, defIndex: number) => (
                      <li key={defIndex} className="text-gray-700">
                        {def.definition}
                        {def.example && (
                          <p className="text-sm text-gray-500 italic mt-1">"{def.example}"</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">中文翻译</h4>
              <p className="text-gray-700">{searchResults.chineseTranslation}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  const newWord = {
                    word: searchResults.word,
                    phonetic: searchResults.phonetic,
                    meaning: searchResults.meanings[0]?.definitions[0]?.definition || '无释义',
                    example: searchResults.meanings[0]?.definitions[0]?.example || '无例句',
                    exampleTranslation: '无翻译',
                    difficulty: 'medium',
                    status: 'new',
                    reviewCount: 0,
                    nextReview: null
                  };
                  addWord(newWord);
                  clearSearchResults();
                  setApiSearchTerm('');
                }}
                className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors flex items-center gap-1"
              >
                <Plus className="w-4 h-4" />
                添加到词库
              </button>
              <button
                onClick={clearSearchResults}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {filteredWords.map((word) => (
            <div
              key={word.id}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{word.word}</h3>
                    <button
                      onClick={() => handleSpeak(word.word)}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-500 mb-2">{word.phonetic}</p>
                  <p className="text-gray-700 mb-3">{word.meaning}</p>
                  <p className="text-sm text-gray-500 italic mb-3">"{word.example}"</p>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs ${getDifficultyBadgeClass(word.difficulty)}`}>
                      {getDifficultyText(word.difficulty)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusBadgeClass(word.status)}`}>
                      {getStatusText(word.status)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWords.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">没有找到匹配的单词</p>
          </div>
        )}
      </div>
    </div>
  );
}
