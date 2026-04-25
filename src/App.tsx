import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '@/pages/Home';
import Review from '@/pages/Review';
import Vocabulary from '@/pages/Vocabulary';
import Stats from '@/pages/Stats';
import { BookOpen, RefreshCw, Book, BarChart3 } from 'lucide-react';

export default function App() {
  const navItems = [
    { path: '/', label: '学习', icon: BookOpen },
    { path: '/review', label: '复习', icon: RefreshCw },
    { path: '/vocabulary', label: '单词', icon: Book },
    { path: '/stats', label: '统计', icon: BarChart3 },
  ];

  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="flex justify-around items-center h-16">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center px-4 py-2 transition-all ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`
                }
              >
                {({ isActive }) => {
                  const IconComponent = item.icon;
                  return (
                    <>
                      <IconComponent 
                        className={`w-6 h-6 mb-1 ${isActive ? 'fill-blue-600' : ''}`} 
                        strokeWidth={isActive ? 2.5 : 2} 
                      />
                      <span className="text-xs font-medium">{item.label}</span>
                    </>
                  );
                }}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </Router>
  );
}
