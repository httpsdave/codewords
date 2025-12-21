'use client';

interface AlphabetNavProps {
  selectedLetter: string;
  onSelectLetter: (letter: string) => void;
  availableLetters: Set<string>;
}

export default function AlphabetNav({ selectedLetter, onSelectLetter, availableLetters }: AlphabetNavProps) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Browse A-Z
      </h3>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        <button
          onClick={() => onSelectLetter('all')}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-colors ${
            selectedLetter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          All
        </button>
        {alphabet.map((letter) => {
          const isAvailable = availableLetters.has(letter);
          return (
            <button
              key={letter}
              onClick={() => isAvailable && onSelectLetter(letter)}
              disabled={!isAvailable}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-colors ${
                selectedLetter === letter
                  ? 'bg-blue-600 text-white'
                  : isAvailable
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  : 'bg-gray-50 dark:bg-gray-900 text-gray-300 dark:text-gray-700 cursor-not-allowed'
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
