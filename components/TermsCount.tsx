'use client';

import { useEffect, useState } from 'react';

interface TermsCountProps {
  count: number;
  label?: string;
  prefix?: string;
}

export default function TermsCount({ count, label = 'terms available', prefix = '' }: TermsCountProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{prefix}{count} {label}</>;
}
