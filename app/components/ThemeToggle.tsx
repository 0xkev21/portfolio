'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) return <div className="h-[41.6px] w-10" />;

  return (
    <button
      onClick={toggleTheme}
      className="border-(--color-border) border p-2 rounded-lg"
    >
      {isDark ? (
        <Sun className="w-5 stroke-(--foreground)" />
      ) : (
        <Moon className="w-5 stroke-(--foreground)" />
      )}
    </button>
  );
}
