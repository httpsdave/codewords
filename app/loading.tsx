export default function Loading() {
  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-20 bg-gray-50 dark:bg-gray-900">
      <main className="max-w-5xl mx-auto" role="main">
        <div className="text-center mb-8 sm:mb-12">
          <div className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
            <div className="h-12 w-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="h-6 w-96 mx-auto bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>

        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
              <div className="flex justify-between items-start mb-3">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
