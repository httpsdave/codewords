'use client';

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import TermCard from '@/components/TermCard';
import TermCardSkeleton from '@/components/TermCardSkeleton';
import CategoryFilter from '@/components/CategoryFilter';
import AlphabetNav from '@/components/AlphabetNav';
import BackToTop from '@/components/BackToTop';
import KeyboardShortcutsModal from '@/components/KeyboardShortcutsModal';
import { trackEvent } from '@/lib/analytics';
import { terms } from '@/data/terms';
import { useRecentTerms } from '@/hooks/useRecentTerms';
import Link from 'next/link';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const mainRef = useRef<HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedLetter, setSelectedLetter] = useState(searchParams.get('letter') || 'all');
  const [isLoading, setIsLoading] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(30);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  const { recentTerms, mounted: recentLoaded } = useRecentTerms();

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

  // Display only a subset of filtered terms for performance
  const displayedTerms = useMemo(() => {
    return filteredTerms.slice(0, displayedCount);
  }, [filteredTerms, displayedCount]);

  // Reset displayed count when filters change
  useEffect(() => {
    setDisplayedCount(30);
    setFocusedIndex(0);
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (isLoadingMore || displayedCount >= filteredTerms.length) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 500;

      if (scrollPosition >= threshold) {
        setIsLoadingMore(true);
        setTimeout(() => {
          setDisplayedCount(prev => Math.min(prev + 30, filteredTerms.length));
          setIsLoadingMore(false);
        }, 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoadingMore, displayedCount, filteredTerms.length]);

  // Keyboard navigation for results
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show keyboard shortcuts modal
      if (e.key === '?' && !showShortcuts) {
        e.preventDefault();
        setShowShortcuts(true);
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, displayedTerms.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && focusedIndex >= 0) {
        const term = displayedTerms[focusedIndex];
        if (term) {
          trackEvent('term_opened', { term: term.id, method: 'keyboard' });
          window.location.href = `/term/${term.id}`;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedIndex, displayedTerms, showShortcuts]);

  // Reset focused index when results change
  useEffect(() => {
    setFocusedIndex(0);
    // Focus main content after filter change
    if (mainRef.current && (selectedCategory !== 'all' || selectedLetter !== 'all')) {
      mainRef.current.focus();
    }
  }, [searchQuery, selectedCategory, selectedLetter]);

  // Sync URL with search params
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) {
      params.set('q', searchQuery);
      trackEvent('search', { query: searchQuery, results: filteredTerms.length });
    }
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
      trackEvent('filter_category', { category: selectedCategory });
    }
    if (selectedLetter !== 'all') {
      params.set('letter', selectedLetter);
      trackEvent('filter_letter', { letter: selectedLetter });
    }
    
    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    
    // Debounce URL updates slightly to avoid too many history entries
    const timer = setTimeout(() => {
      router.replace(newUrl, { scroll: false });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, selectedLetter, pathname, router, filteredTerms.length]);

  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLetter('all');
  }, []);

  const getRandomTerm = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * terms.length);
    const randomTerm = terms[randomIndex];
    trackEvent('random_term', { term: randomTerm.id });
    router.push(`/term/${randomTerm.id}`);
  }, [router]);

  // Get recently viewed terms data
  const recentTermsData = useMemo(() => {
    if (!recentLoaded) return [];
    return recentTerms
      .map(id => terms.find(t => t.id === id))
      .filter(Boolean)
      .slice(0, 5);
  }, [recentTerms, recentLoaded]);

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <main className="max-w-5xl mx-auto pb-16 outline-none focus:outline-none" role="main" id="main-content" ref={mainRef} tabIndex={-1}>
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 
                       bg-clip-text text-transparent">
            CodeWords
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your comprehensive dictionary for computer science and IT terminology
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-500 mt-3">
            <span>{terms.length} terms available</span>
            <span>•</span>
            <button
              onClick={() => setShowShortcuts(true)}
              className="text-blue-600 dark:text-blue-400 hover:underline font-mono"
            >
              Press ? for shortcuts
            </button>
            <span>•</span>
            <button
              onClick={getRandomTerm}
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Random term
            </button>
          </div>
        </div>
        
        <div className="no-print">
          <SearchBar onSearch={setSearchQuery} />

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
            {recentTermsData.length > 0 && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 w-full sm:w-auto">
                <span className="text-sm text-gray-600 dark:text-gray-400 flex-shrink-0">Recent:</span>
                <div className="flex flex-wrap gap-2">
                  {recentTermsData.map(term => (
                    <Link
                      key={term!.id}
                      href={`/term/${term!.id}`}
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
                    >
                      {term!.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

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
                Showing {displayedTerms.length} of {filteredTerms.length} terms
                {filteredTerms.length !== terms.length && ` (${terms.length} total)`}
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
              <>
                <div className="space-y-6" role="list" aria-label="Dictionary terms">
                  {displayedTerms.map((term, index) => (
                    <TermCard 
                      key={term.id} 
                      term={term} 
                      searchQuery={searchQuery}
                      isFocused={index === focusedIndex}
                      onFocus={() => setFocusedIndex(index)}
                    />
                  ))}
                </div>
                
                {/* Load More section */}
                {displayedCount < filteredTerms.length && (
                  <div className="mt-8 text-center">
                    {isLoadingMore ? (
                      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Loading more terms...</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setIsLoadingMore(true);
                          setTimeout(() => {
                            setDisplayedCount(prev => Math.min(prev + 30, filteredTerms.length));
                            setIsLoadingMore(false);
                          }, 200);
                        }}
                        className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 
                                 transition-colors font-medium shadow-md hover:shadow-lg"
                        aria-label={`Load more terms (${filteredTerms.length - displayedCount} remaining)`}
                      >
                        Load More ({filteredTerms.length - displayedCount} remaining)
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </main>
      <BackToTop />
      <KeyboardShortcutsModal isOpen={showShortcuts} onClose={() => setShowShortcuts(false)} />
    </div>
  );
}