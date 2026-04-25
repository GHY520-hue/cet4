import { useState } from 'react';
import { useWordStore } from '../store/useWordStore';
import { Volume2, CheckCircle2, XCircle } from 'lucide-react';

export default function Review() {
  const { words, getReviewWords, updateWordStatus } = useWordStore();
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  const reviewWords = getReviewWords();

  const currentWord = reviewWords[currentReviewIndex];

  const handleSpeak = () => {
    if ('speechSynthesis' in window && currentWord) {
      const utterance = new SpeechSynthesisUtterance(currentWord.word);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const handleMarkStatus = (status: 'learning' | 'mastered') => {
    if (currentWord) {
      updateWordStatus(currentWord.id, status);
      setCurrentReviewIndex((prev) => prev + 1);
      setShowMeaning(false);
    }
  };

  if (reviewWords.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center pb-20">
        <div className="text-center">
          <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">太棒了！</h2>
          <p className="text-gray-600">没有需要复习的单词</p>
          <p className="text-gray-500 mt-2">继续保持！</p>
        </div>
      </div>
    );
  }

  if (currentReviewIndex >= reviewWords.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center pb-20">
        <div className="text-center">
          <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">复习完成！</h2>
          <p className="text-gray-600">你复习了 {reviewWords.length} 个单词</p>
        </div>
      </div>
    );
  }

  const progress = ((currentReviewIndex + 1) / reviewWords.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">复习单词</h1>
          <p className="text-gray-600">需要复习的单词: {reviewWords.length}</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>复习进度</span>
            <span>{currentReviewIndex + 1} / {reviewWords.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
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
                className="bg-green-100 hover:bg-green-200 p-3 rounded-full transition-colors"
              >
                <Volume2 className="w-6 h-6 text-green-600" />
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
              </div>
            )}

            {!showMeaning && (
              <p className="text-center text-gray-400 mt-4">
                点击卡片查看释义
              </p>
            )}
          </div>
        )}

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => handleMarkStatus('learning')}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg shadow-md transition-all flex items-center gap-2 text-lg"
          >
            <XCircle className="w-6 h-6" />
            忘记了
          </button>
          <button
            onClick={() => handleMarkStatus('mastered')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg shadow-md transition-all flex items-center gap-2 text-lg"
          >
            <CheckCircle2 className="w-6 h-6" />
            记住了
          </button>
        </div>
      </div>
    </div>
  );
}
