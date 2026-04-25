import { useState, useEffect } from 'react';
import { useWordStore } from '../store/useWordStore';
import { Volume2, CheckCircle2, Circle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const { 
    words, 
    currentWordIndex, 
    stats, 
    updateWordStatus, 
    nextWord, 
    prevWord,
    initializeWords 
  } = useWordStore();
  const [showMeaning, setShowMeaning] = useState(false);

  useEffect(() => {
    initializeWords();
  }, [initializeWords]);

  const currentWord = words[currentWordIndex];

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord?.word);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const handleMarkStatus = (status: 'learning' | 'mastered') => {
    if (currentWord) {
      updateWordStatus(currentWord.id, status);
      nextWord();
      setShowMeaning(false);
    }
  };

  const progress = words.length > 0 ? ((currentWordIndex + 1) / words.length) * 100 : 0;

  if (words.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">背单词</h1>
          <p className="text-gray-600">备考四级英语</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>进度</span>
            <span>{currentWordIndex + 1} / {words.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.totalWords}</div>
            <div className="text-sm text-gray-600">总单词</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold text-green-600">{stats.learnedWords}</div>
            <div className="text-sm text-gray-600">已学习</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-2xl font-bold text-purple-600">{stats.streak}</div>
            <div className="text-sm text-gray-600">连续天数</div>
          </div>
        </div>

        {currentWord && (
          <div 
            className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300"
            onClick={() => setShowMeaning(!showMeaning)}
          >
            <div className="flex justify-center mb-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSpeak();
                }}
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-colors"
              >
                <Volume2 className="w-6 h-6 text-blue-600" />
              </button>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-2">
              {currentWord.word}
            </h2>
            <p className="text-xl text-gray-500 text-center mb-6">
              {currentWord.phonetic}
            </p>

            {showMeaning && (
              <div className="space-y-4 animate-fadeIn">
                <div className="border-t pt-4">
                  <p className="text-2xl text-gray-800 font-medium text-center">
                    {currentWord.meaning}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 italic mb-2">"{currentWord.example}"</p>
                  <p className="text-gray-500">{currentWord.exampleTranslation}</p>
                </div>
                <div className="flex justify-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    currentWord.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    currentWord.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {currentWord.difficulty === 'easy' ? '简单' :
                     currentWord.difficulty === 'medium' ? '中等' : '困难'}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    currentWord.status === 'new' ? 'bg-gray-100 text-gray-800' :
                    currentWord.status === 'learning' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {currentWord.status === 'new' ? '新单词' :
                     currentWord.status === 'learning' ? '学习中' : '已掌握'}
                  </span>
                </div>
              </div>
            )}

            {!showMeaning && (
              <p className="text-center text-gray-400 mt-4">
                点击卡片查看释义
              </p>
            )}
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevWord}
            disabled={currentWordIndex === 0}
            className="bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-md transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex gap-4">
            <button
              onClick={() => handleMarkStatus('learning')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-2"
            >
              <Circle className="w-5 h-5" />
              学习中
            </button>
            <button
              onClick={() => handleMarkStatus('mastered')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              已掌握
            </button>
          </div>

          <button
            onClick={nextWord}
            disabled={currentWordIndex === words.length - 1}
            className="bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full shadow-md transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
