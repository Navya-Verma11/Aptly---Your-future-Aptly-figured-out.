import { Brain, MapPin, Route, FileText } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Personalized Career Insights',
    description: 'Get AI-powered recommendations tailored to your skills, interests, and career goals. Discover paths you never knew existed.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MapPin,
    title: 'Region-Based Market Analysis',
    description: 'Understand job market trends, salary ranges, and demand in your specific location. Make informed decisions based on real data.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Route,
    title: 'Step-by-Step Skill Roadmaps',
    description: 'Follow customized learning paths with milestones, resources, and timelines. Transform from beginner to expert systematically.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: FileText,
    title: 'Portfolio Review & Project Ideas',
    description: 'Get feedback on your projects and discover new ideas to build. Showcase your work effectively to potential employers.',
    gradient: 'from-orange-500 to-red-500',
  },
];

function Features() {
  return (
    <section id="explore" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful features designed to guide you from career exploration to landing your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="fade-in-section group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>

                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className={`mt-6 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
