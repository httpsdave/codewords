'use client';

import { useState, useEffect, useCallback } from 'react';

const MAX_RECENT = 10;

export function useRecentTerms() {
  const [recentTerms, setRecentTerms] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('recentTerms');
    if (stored) {
      try {
        setRecentTerms(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse recent terms', e);
      }
    }
  }, []);

  const addRecentTerm = useCallback((termId: string) => {
    setRecentTerms(prev => {
      const filtered = prev.filter(id => id !== termId);
      const next = [termId, ...filtered].slice(0, MAX_RECENT);
      localStorage.setItem('recentTerms', JSON.stringify(next));
      return next;
    });
  }, []);

  return { recentTerms, addRecentTerm, mounted };
}
