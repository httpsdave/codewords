'use client';

import { Term } from '@/data/terms';
import Link from 'next/link';
import { highlightText } from './SearchBar';

interface TermCardProps {
  term: Term;
  searchQuery?: string;
  isFocused?: boolean;
  onFocus?: () => void;
}

export default function TermCard({ term, searchQuery = '', isFocused = false, onFocus }: TermCardProps) {
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
                      cursor-pointer hover:border-blue-400 dark:hover:border-blue-600">
        <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
          <h2 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            dangerouslySetInnerHTML={{ __html: highlightText(term.title, searchQuery) }}
          />
          <span className="px-3 py-1 text-xs font-semibold rounded-full 
                         bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            {term.category}
          </span>
        </div>
        
        <p 
          className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{ __html: highlightText(term.definition, searchQuery) }}
        />
        
        {term.example && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              ✓ Includes code example
            </p>
          </div>
        )}
        
        {term.relatedTerms && term.relatedTerms.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Related: {term.relatedTerms.length} term{term.relatedTerms.length > 1 ? 's' : ''}
            </p>
          </div>
        )}
        
        <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium">
          View details →
        </div>
      </article>
    </Link>
  );
}
