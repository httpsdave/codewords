'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-600">$1</mark>');
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      onSearch(query);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Press '/' to focus search
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      // Press 'Escape' to clear search
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        handleSearch('');
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search terms... (Press '/' to focus)"
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
