// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    // Color schemes for easy access
    colors: {
      primary: isDark ? '#60A5FA' : '#004a8c',
      primaryHover: isDark ? '#3B82F6' : '#003d73',
      background: isDark ? '#1F2937' : '#ffffff',
      surface: isDark ? '#374151' : '#f0f0f0',
      surfaceHover: isDark ? '#4B5563' : '#e5e5e5',
      text: isDark ? '#F9FAFB' : '#1F2937',
      textSecondary: isDark ? '#D1D5DB' : '#6B7280',
      border: isDark ? '#4B5563' : '#E5E7EB',
      cardBg: isDark ? '#374151' : '#ffffff',
      gradient: isDark 
        ? 'linear-gradient(135deg, #1e40af 0%, #059669 100%)'
        : 'linear-gradient(135deg, #00bcd4 0%, #4caf50 100%)'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};