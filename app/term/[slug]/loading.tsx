export default function TermLoading() {
  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-20 bg-gray-50 dark:bg-gray-900">
      <main className="max-w-4xl mx-auto">
        <div className="mb-6 animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
        </div>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start mb-6 animate-pulse">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
          </div>

          <div className="space-y-3 mb-6 animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 animate-pulse">
            <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </article>
      </main>
    </div>
  );
}
