import { Search, Sparkles, TrendingUp, Target, Zap } from 'lucide-react';
import { useState } from 'react';

function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      document.getElementById('ai-interaction')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="absolute top-40 right-1/4 animate-float">
        <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center transform rotate-12">
          <Sparkles className="w-8 h-8 text-yellow-500" />
        </div>
      </div>

      <div className="absolute bottom-40 left-1/4 animate-float-delayed">
        <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center transform -rotate-12">
          <TrendingUp className="w-7 h-7 text-green-500" />
        </div>
      </div>

      <div className="absolute top-60 left-1/3 animate-float">
        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
          <Target className="w-6 h-6 text-red-500" />
        </div>
      </div>

      <div className="absolute top-1/2 right-1/3 animate-float-delayed">
        <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
          <Zap className="w-5 h-5 text-purple-500" />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            Powered by AI
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Discover Your Future,
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            One Career at a Time
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let AI guide you through personalized career insights, market trends, and step-by-step roadmaps to achieve your dream job.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative flex items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <Search className="w-6 h-6 text-gray-400 ml-6" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="What career path are you curious about?"
                className="flex-1 px-6 py-5 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-lg"
              />
              <button
                onClick={handleSearch}
                className="m-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Software Engineer', 'Data Scientist', 'UX Designer', 'Product Manager'].map((career) => (
              <button
                key={career}
                onClick={() => setSearchQuery(career)}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow hover:shadow-md hover:scale-105 transition-all duration-300 text-sm"
              >
                {career}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
