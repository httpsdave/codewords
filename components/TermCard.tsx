'use client';

import { Term } from '@/data/terms';
import Link from 'next/link';
import { highlightText } from './SearchBar';
import FavoriteButton from './FavoriteButton';
import { useState, memo } from 'react';

interface TermCardProps {
  term: Term;
  searchQuery?: string;
  isFocused?: boolean;
  onFocus?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

function TermCard({ 
  term, 
  searchQuery = '', 
  isFocused = false, 
  onFocus,
  isFavorite = false,
  onToggleFavorite 
}: TermCardProps) {
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const copyDefinition = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(`${term.title}: ${term.definition}`);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <Link 
      href={`/term/${term.id}`} 
      className={`block rounded-lg ${isFocused ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-900' : ''}`} 
      role="listitem"
      onMouseEnter={onFocus}
      onFocus={onFocus}
    >
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg 
                      transition-all p-6 border border-gray-200 dark:border-gray-700 
                      cursor-pointer hover:border-blue-400 dark:hover:border-blue-600
                      group">
        <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
          <h2 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex-1"
            dangerouslySetInnerHTML={{ __html: highlightText(term.title, searchQuery) }}
          />
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-semibold rounded-full 
                           bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {term.category}
            </span>
            {onToggleFavorite && (
              <FavoriteButton 
                termId={term.id}
                isFavorite={isFavorite}
                onToggle={onToggleFavorite}
                size="sm"
              />
            )}
          </div>
        </div>
        
        <p 
          className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{ __html: highlightText(term.definition, searchQuery) }}
        />
        
        <div className="flex flex-wrap gap-3 items-center mb-3">
          {term.example && (
            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Code example
            </span>
          )}
          
          {term.relatedTerms && term.relatedTerms.length > 0 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              {term.relatedTerms.length} related
            </span>
          )}

          <button
            onClick={copyDefinition}
            className="ml-auto text-xs text-gray-500 dark:text-gray-400 
                     hover:text-blue-600 dark:hover:text-blue-400 
                     flex items-center gap-1 opacity-0 group-hover:opacity-100
                     transition-opacity duration-200"
            title="Copy definition"
          >
            {showCopySuccess ? (
              <>
                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
        
        <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center gap-1">
          View details 
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  );
}

export default memo(TermCard);
