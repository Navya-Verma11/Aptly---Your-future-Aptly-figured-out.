import { useState } from 'react';
import { Send, Loader, Sparkles } from 'lucide-react';

function AIInteraction() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const getCareerInsights = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      setResponse(`Based on your interest in "${query}", here are some AI-generated insights:\n\n🎯 Career Overview: This field offers excellent growth opportunities with competitive salaries.\n\n📊 Market Demand: High demand in tech hubs with a 15% year-over-year growth rate.\n\n💡 Key Skills: Focus on core technical skills, communication, and continuous learning.\n\n🚀 Getting Started: Build a strong foundation, create projects, and network with professionals.\n\n✨ This is a placeholder response. Connect your OpenAI API key to get real AI-powered insights!`);
    } catch (error) {
      setResponse('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      getCareerInsights();
    }
  };

  return (
    <section id="ai-interaction" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 fade-in-section">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <span className="text-purple-600 dark:text-purple-400 font-medium">AI-Powered</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ask Anything About Your Career
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get instant, personalized insights powered by advanced AI technology.
          </p>
        </div>

        <div className="fade-in-section bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Your Question
            </label>
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about any career... e.g., 'What skills do I need to become a data scientist?'"
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
                rows={4}
              />
            </div>
          </div>

          <button
            onClick={getCareerInsights}
            disabled={loading || !query.trim()}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Generating Insights...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Generate Insights</span>
              </>
            )}
          </button>

          {response && (
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">AI Response</h3>
              </div>
              <div id="ai-output" className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                {response}
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> This is a prototype interface. To enable real AI responses, replace <code className="bg-yellow-100 dark:bg-yellow-900/40 px-2 py-1 rounded">YOUR_OPENAI_API_KEY</code> in the code with your actual OpenAI API key.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIInteraction;
