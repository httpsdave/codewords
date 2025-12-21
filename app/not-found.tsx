import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Term Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The term you're looking for doesn't exist in our dictionary yet. 
          Try searching for something else!
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 
                   text-white hover:bg-blue-700 transition-colors font-medium"
        >
          ← Back to Dictionary
        </Link>
      </div>
    </div>
  );
}
