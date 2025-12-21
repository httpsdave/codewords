'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }

    // Send to analytics in production
    if (typeof window !== 'undefined' && window.va) {
      window.va('event', {
        name: metric.name,
        value: metric.value,
        label: metric.id,
      });
    }
  });

  return null;
}

export function trackEvent(name: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', { name, ...properties });
  }
}
