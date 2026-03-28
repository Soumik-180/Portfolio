import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Project', href: '#project' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Achievement', href: '#achievement' },
  { name: 'Photography', href: '#photography' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Default to dark mode so text is visible on the dark background
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full pt-4 pb-2 px-8 md:px-16 flex items-center justify-between z-[100] pointer-events-none transition-colors duration-300">
      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-wrap pointer-events-auto">
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-base font-medium transition-all duration-300 hover:scale-110 origin-left hover:text-black dark:hover:text-white hover:underline underline-offset-4 ${
              index === 0
                ? 'text-black dark:text-white underline underline-offset-4 decoration-2'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Right Side Control */}
      <div className="flex items-center ml-auto pointer-events-auto">
        <button
          onClick={toggleDarkMode}
          className="text-black dark:text-white p-2 rounded-full cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 hover:-translate-y-1 hover:scale-110 transition-all duration-300 opacity-90 hover:opacity-100"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun size={24} fill="currentColor" /> : <Moon size={24} fill="currentColor" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
