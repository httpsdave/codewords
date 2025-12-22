'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }

    // Send to analytics in production - defer to reduce blocking
    if (typeof window !== 'undefined') {
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          if (window.va) {
            window.va('event', {
              name: metric.name,
              value: metric.value,
              label: metric.id,
            });
          }
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          if (window.va) {
            window.va('event', {
              name: metric.name,
              value: metric.value,
              label: metric.id,
            });
          }
        }, 0);
      }
    }
  });

  return null;
}

export function trackEvent(name: string, properties?: Record<string, any>) {
  // Defer event tracking to not block main thread
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        if (window.va) {
          window.va('event', { name, ...properties });
        }
      });
    } else {
      setTimeout(() => {
        if (window.va) {
          window.va('event', { name, ...properties });
        }
      }, 0);
    }
  }
}
