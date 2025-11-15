import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import AIInteraction from './components/AIInteraction';
import RoadmapPreview from './components/RoadmapPreview';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <AIInteraction />
      <RoadmapPreview />
      <Footer />
    </div>
  );
}

export default App;
