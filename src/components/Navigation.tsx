import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

function Navigation({ theme, toggleTheme }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aptly
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#explore" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Explore Careers
            </a>
            <a href="#roadmap" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Roadmap Generator
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="px-6 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </a>
            <a href="#explore" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Explore Careers
            </a>
            <a href="#roadmap" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Roadmap Generator
            </a>
            <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              About
            </a>
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              <span>Toggle Theme</span>
            </button>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
