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
  const [isFocused, setIsFocused] = useState(false);
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
      <div className={`relative group transition-all duration-200 ${isFocused ? 'scale-[1.02]' : ''}`}>
        {/* Search Icon */}
        <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200 ${
              isFocused ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'
            }`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Search terms..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-12 sm:pl-14 pr-24 sm:pr-28 py-3 sm:py-4 text-base sm:text-lg 
                   rounded-xl sm:rounded-2xl border-2 
                   bg-white dark:bg-gray-800
                   border-gray-200 dark:border-gray-700
                   hover:border-gray-300 dark:hover:border-gray-600
                   focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                   dark:focus:border-blue-400 dark:focus:ring-blue-400/10
                   shadow-sm hover:shadow-md focus:shadow-lg
                   transition-all duration-200
                   placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />

        {/* Right Side Controls */}
        <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 sm:gap-3">
          {/* Loading Spinner */}
          {isSearching && (
            <div className="animate-spin h-4 w-4 sm:h-5 sm:w-5 border-2 border-blue-500 border-t-transparent rounded-full" />
          )}
          
          {/* Clear Button */}
          {query && (
            <button
              onClick={() => handleSearch('')}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 
                       hover:bg-gray-100 dark:hover:bg-gray-700/50 
                       transition-all duration-150 active:scale-95"
              aria-label="Clear search"
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Keyboard Shortcut Hint */}
          {!query && !isFocused && (
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md 
                          bg-gray-100 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600
                          text-xs text-gray-500 dark:text-gray-400 font-medium">
              <kbd className="font-mono">/</kbd>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
