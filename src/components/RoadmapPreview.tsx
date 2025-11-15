import { CheckCircle, Circle } from 'lucide-react';

const roadmapSteps = [
  {
    step: 1,
    title: 'Learn Foundational Skills',
    description: 'Master the basics through online courses, tutorials, and documentation.',
    completed: true,
  },
  {
    step: 2,
    title: 'Build Beginner Projects',
    description: 'Apply your knowledge by creating small, practical projects.',
    completed: true,
  },
  {
    step: 3,
    title: 'Create Portfolio',
    description: 'Showcase your best work with a professional portfolio website.',
    completed: false,
  },
  {
    step: 4,
    title: 'Apply for Internships',
    description: 'Gain real-world experience and build your professional network.',
    completed: false,
  },
  {
    step: 5,
    title: 'Explore Job Opportunities',
    description: 'Start applying to positions aligned with your career goals.',
    completed: false,
  },
];

function RoadmapPreview() {
  return (
    <section id="roadmap" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Personalized
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Career Roadmap</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Follow a structured path from beginner to professional with clear milestones and actionable steps.
          </p>
        </div>

        <div className="relative fade-in-section">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {roadmapSteps.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {item.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400" />
                      )}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold">{item.step}</span>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-6 mt-8">
            {roadmapSteps.map((item, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    {item.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400" />
                    )}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
                {index < roadmapSteps.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 fade-in-section">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Generate My Custom Roadmap
          </button>
        </div>
      </div>
    </section>
  );
}

export default RoadmapPreview;
