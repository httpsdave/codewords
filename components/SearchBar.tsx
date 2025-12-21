'use client';

import { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      onSearch(query);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search terms... (e.g., Java, OOP, recursion)"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg rounded-lg border-2 border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-500 
                   dark:focus:border-blue-400 transition-colors"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {isSearching && (
            <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
          )}
          {query && (
            <button
              onClick={() => handleSearch('')}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
