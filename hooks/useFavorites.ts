'use client';

import { useState, useEffect, useCallback } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('favorites');
    if (stored) {
      try {
        setFavorites(new Set(JSON.parse(stored)));
      } catch (e) {
        console.error('Failed to parse favorites', e);
      }
    }
  }, []);

  const toggleFavorite = useCallback((termId: string) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(termId)) {
        next.delete(termId);
      } else {
        next.add(termId);
      }
      localStorage.setItem('favorites', JSON.stringify([...next]));
      return next;
    });
  }, []);

  const isFavorite = useCallback((termId: string) => favorites.has(termId), [favorites]);

  return { favorites: [...favorites], toggleFavorite, isFavorite, mounted };
}
