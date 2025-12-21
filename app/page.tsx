'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import SearchBar from '@/components/SearchBar';
import TermCard from '@/components/TermCard';
import TermCardSkeleton from '@/components/TermCardSkeleton';
import CategoryFilter from '@/components/CategoryFilter';
import AlphabetNav from '@/components/AlphabetNav';
import BackToTop from '@/components/BackToTop';
import { terms } from '@/data/terms';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Simulate initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when filters change
  useEffect(() => {
    if (selectedCategory !== 'all' || selectedLetter !== 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedCategory, selectedLetter]);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(terms.map(term => term.category))).sort();
  }, []);

  // Get available first letters
  const availableLetters = useMemo(() => {
    return new Set(terms.map(term => term.title[0].toUpperCase()));
  }, []);

  const filteredTerms = useMemo(() => {
    let filtered = terms;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(term => 
        term.title.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        term.category.toLowerCase().includes(query) ||
        term.id.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(term => term.category === selectedCategory);
    }

    // Filter by letter
    if (selectedLetter !== 'all') {
      filtered = filtered.filter(term => 
        term.title[0].toUpperCase() === selectedLetter
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Keyboard navigation for results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, filteredTerms.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && focusedIndex >= 0) {
        const term = filteredTerms[focusedIndex];
        if (term) {
          window.location.href = `/term/${term.id}`;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex, filteredTerms]);

  // Reset focused index when results change
  useEffect(() => {
    setFocusedIndex(0);
  }, [searchQuery, selectedCategory, selectedLetter]);

  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLetter('all');
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-20 bg-gray-50 dark:bg-gray-900">
      <main className="max-w-5xl mx-auto" role="main">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 
                       bg-clip-text text-transparent">
            CodeWords
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your comprehensive dictionary for computer science and IT terminology
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            {terms.length} terms available
          </p>
        </div>
        
        <div className="no-print">
          <SearchBar onSearch={setSearchQuery} />

          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <AlphabetNav 
            selectedLetter={selectedLetter}
            onSelectLetter={setSelectedLetter}
            availableLetters={availableLetters}
          />
        </div>
        
        {filteredTerms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              No terms found {searchQuery && `for "${searchQuery}"`}
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 
                       transition-colors font-medium"
              aria-label="Clear all filters"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400" role="status" aria-live="polite">
                Showing {filteredTerms.length} of {terms.length} terms
              </p>
              {(searchQuery || selectedCategory !== 'all' || selectedLetter !== 'all') && (
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  aria-label="Clear filters"
                >
                  Clear Filters
                </button>
              )}
            </div>
            {isLoading ? (
              <div className="space-y-6" aria-label="Loading terms">
                {[...Array(5)].map((_, i) => (
                  <TermCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="space-y-6" role="list" aria-label="Dictionary terms">
                {filteredTerms.map((term, index) => (
                  <TermCard 
                    key={term.id} 
                    term={term} 
                    searchQuery={searchQuery}
                    isFocused={index === focusedIndex}
                    onFocus={() => setFocusedIndex(index)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
      <BackToTop />
    </div>
  );
}
