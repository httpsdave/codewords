'use client';

import { useState, useMemo, useCallback } from 'react';
import SearchBar from '@/components/SearchBar';
import TermCard from '@/components/TermCard';
import CategoryFilter from '@/components/CategoryFilter';
import AlphabetNav from '@/components/AlphabetNav';
import { terms } from '@/data/terms';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('all');

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

  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLetter('all');
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-20 bg-gray-50 dark:bg-gray-900">
      <main className="max-w-5xl mx-auto">
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
        
        {filteredTerms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              No terms found {searchQuery && `for "${searchQuery}"`}
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 
                       transition-colors font-medium"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredTerms.length} of {terms.length} terms
              </p>
              {(searchQuery || selectedCategory !== 'all' || selectedLetter !== 'all') && (
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear Filters
                </button>
              )}
            </div>
            <div className="space-y-6">
              {filteredTerms.map((term) => (
                <TermCard key={term.id} term={term} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
