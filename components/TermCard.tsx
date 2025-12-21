import { Term } from '@/data/terms';
import Link from 'next/link';

interface TermCardProps {
  term: Term;
}

export default function TermCard({ term }: TermCardProps) {
  return (
    <Link href={`/term/${term.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg 
                      transition-all p-6 border border-gray-200 dark:border-gray-700 
                      cursor-pointer hover:border-blue-400 dark:hover:border-blue-600">
        <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {term.title}
          </h2>
          <span className="px-3 py-1 text-xs font-semibold rounded-full 
                         bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            {term.category}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {term.definition}
        </p>
        
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
      </div>
    </Link>
  );
}
