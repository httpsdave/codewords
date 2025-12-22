'use client';

import { useEffect, useState } from 'react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KeyboardShortcutsModal({ isOpen, onClose }: KeyboardShortcutsModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const shortcuts = [
    { key: '/', description: 'Focus search bar' },
    { key: 'Esc', description: 'Clear search / Close modal' },
    { key: '↑ / ↓', description: 'Navigate search results' },
    { key: 'Enter', description: 'Open focused result' },
    { key: '?', description: 'Show keyboard shortcuts' },
  ];

  const features = [
    { icon: '🎲', description: 'Click "Random term" for discovery' },
    { icon: '📋', description: 'Copy definitions on hover' },
    { icon: '🕐', description: 'View recently visited terms' },
    { icon: '🔍', description: 'Search across all terms' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 no-print"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortcuts-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="shortcuts-title" className="text-2xl font-bold text-gray-900 dark:text-white">
            Help & Shortcuts
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 
                     p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Keyboard Shortcuts
          </h3>
          <div className="space-y-2">
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2"
              >
                <span className="text-gray-600 dark:text-gray-300">{shortcut.description}</span>
                <kbd className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                             rounded font-mono text-sm border border-gray-300 dark:border-gray-600">
                  {shortcut.key}
                </kbd>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Features
          </h3>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 py-2"
              >
                <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                <span className="text-gray-600 dark:text-gray-300 flex-1">{feature.description}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">Esc</kbd> to close
        </p>
      </div>
    </div>
  );
}
