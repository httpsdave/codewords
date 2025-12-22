'use client';

import { useEffect } from 'react';
import { useRecentTerms } from '@/hooks/useRecentTerms';

interface TermViewTrackerProps {
  termId: string;
}

export default function TermViewTracker({ termId }: TermViewTrackerProps) {
  const { addRecentTerm } = useRecentTerms();

  useEffect(() => {
    addRecentTerm(termId);
  }, [termId, addRecentTerm]);

  return null;
}
