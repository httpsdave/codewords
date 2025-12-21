'use client';

import { terms } from '@/data/terms';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const getCategoryCount = (category: string) => {
    return terms.filter(term => term.category === category).length;
  };

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
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-pressed={selectedCategory === category}
          >
            {category} <span className="ml-1 text-xs opacity-75">({getCategoryCount(category)})</span>
          </button>
        ))}
      </div>
    </div>
  );
}
