'use client';

import { terms } from '@/data/terms';
import { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const [showAll, setShowAll] = useState(false);
  
  const getCategoryCount = (category: string) => {
    return terms.filter(term => term.category === category).length;
  };

  // Sort categories by count (descending) and get top 12
  const categoriesWithCounts = categories.map(cat => ({
    name: cat,
    count: getCategoryCount(cat)
  })).sort((a, b) => b.count - a.count);

  const topCategories = showAll ? categoriesWithCounts : categoriesWithCounts.slice(0, 12);
  const hasMore = categoriesWithCounts.length > 12;

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Filter by Category
      </h3>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Category filters">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          aria-pressed={selectedCategory === 'all'}
        >
          All Categories <span className="ml-1 text-xs opacity-75">({terms.length})</span>
        </button>
        {topCategories.map(({ name, count }) => (
          <button
            key={name}
            onClick={() => onSelectCategory(name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === name
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-pressed={selectedCategory === name}
          >
            {name} <span className="ml-1 text-xs opacity-75">({count})</span>
          </button>
        ))}
        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            {showAll ? '− Show Less' : `+ Show ${categoriesWithCounts.length - 12} More`}
          </button>
        )}
      </div>
    </div>
  );
}
