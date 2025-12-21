'use client';

import { useState } from 'react';
import { Term } from '@/data/terms';

interface ShareButtonProps {
  term: Term;
}

export default function ShareButton({ term }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/term/${term.id}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${term.title} - CodeWords`,
          text: term.definition.substring(0, 100) + '...',
          url: url,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback to copy link
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 
               hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors
               text-gray-700 dark:text-gray-300 text-sm font-medium"
    >
      {copied ? '✓ Link Copied!' : '⬆ Share'}
    </button>
  );
}
