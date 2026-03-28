import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';

const About = lazy(() => import('./sections/About'));
const Project = lazy(() => import('./sections/Project'));
const Skills = lazy(() => import('./sections/Skills'));
const Education = lazy(() => import('./sections/Education'));
const Achievement = lazy(() => import('./sections/Achievement'));
const Photography = lazy(() => import('./sections/Photography'));
const Contact = lazy(() => import('./sections/Contact'));

const SectionLoader = () => (
  <div className="w-full flex justify-center items-center py-20 min-h-[300px]">
    <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

const LazySection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible && children}</div>;
};

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-[#111] dark:text-gray-100 font-sans selection:bg-accent selection:text-white pb-20 transition-colors duration-300">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <LazySection><About /></LazySection>
          <LazySection><Project /></LazySection>
          <LazySection><Skills /></LazySection>
          <LazySection><Education /></LazySection>
          <LazySection><Achievement /></LazySection>
          <LazySection><Photography /></LazySection>
          <LazySection><Contact /></LazySection>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
