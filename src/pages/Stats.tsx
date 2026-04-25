import { useEffect } from 'react';
import { useWordStore } from '../store/useWordStore';
import { TrendingUp, BookOpen, CheckCircle, Calendar } from 'lucide-react';

export default function Stats() {
  const { words, stats, initializeWords } = useWordStore();

  useEffect(() => {
    initializeWords();
  }, [initializeWords]);

  const newWords = words.filter((w) => w.status === 'new').length;
  const learningWords = words.filter((w) => w.status === 'learning').length;
  const masteredWords = words.filter((w) => w.status === 'mastered').length;
  const masteredPercentage = words.length > 0 ? (masteredWords / words.length) * 100 : 0;

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + i);
    return date.toISOString().split('T')[0];
  });

  const getDailyCount = (date: string) => stats.dailyStudy[date] || 0;

  const maxDailyCount = Math.max(...last7Days.map(getDailyCount), 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">学习统计</h1>
          <p className="text-gray-600">查看你的学习进度</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">{stats.totalWords}</div>
            <div className="text-sm text-gray-600">总单词数</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <TrendingUp className="w-10 h-10 text-green-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">{stats.learnedWords}</div>
            <div className="text-sm text-gray-600">已学习</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <CheckCircle className="w-10 h-10 text-purple-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">{stats.masteredWords}</div>
            <div className="text-sm text-gray-600">已掌握</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Calendar className="w-10 h-10 text-orange-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-800">{stats.streak}</div>
            <div className="text-sm text-gray-600">连续天数</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">掌握进度</h2>
          
          <div className="relative pt-4">
            <div className="flex mb-2 justify-between text-sm">
              <span className="text-gray-600">已掌握 {masteredWords} 个单词</span>
              <span className="text-gray-600">{masteredPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-8">
              <div 
                className="bg-gradient-to-r from-green-400 to-emerald-600 h-8 rounded-full transition-all duration-500 flex items-center justify-end pr-4"
                style={{ width: `${masteredPercentage}%` }}
              >
                {masteredPercentage > 10 && (
                  <span className="text-white text-sm font-bold">{masteredPercentage.toFixed(0)}%</span>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-500">{newWords}</div>
              <div className="text-sm text-gray-600">新单词</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{learningWords}</div>
              <div className="text-sm text-gray-600">学习中</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{masteredWords}</div>
              <div className="text-sm text-gray-600">已掌握</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">最近7天学习记录</h2>
          
          <div className="flex items-end justify-between gap-2 h-48">
            {last7Days.map((date) => {
              const count = getDailyCount(date);
              const height = (count / maxDailyCount) * 100;
              const dateObj = new Date(date);
              const dayName = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][dateObj.getDay()];
              
              return (
                <div key={date} className="flex-1 flex flex-col items-center">
                  <div className="text-sm text-gray-600 mb-2">{count}</div>
                  <div 
                    className={`w-full rounded-t-lg transition-all duration-500 ${count > 0 ? 'bg-gradient-to-t from-blue-400 to-blue-600' : 'bg-gray-200'}`}
                    style={{ height: `${Math.max(height, 5)}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-2">{dayName}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
