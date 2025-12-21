'use client';

import { useState } from 'react';

interface CopyButtonProps {
  code: string;
}

export default function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 text-sm rounded-md bg-gray-200 dark:bg-gray-700 
               hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors
               text-gray-700 dark:text-gray-300 font-medium"
    >
      {copied ? '✓ Copied!' : 'Copy Code'}
    </button>
  );
}
