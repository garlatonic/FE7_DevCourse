export default function BlogDetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Back button skeleton */}
      <div className="mb-8">
        <div className="flex items-start mb-8 h-12">
          <div className="w-4 h-6 bg-gray-200 rounded mr-2"></div>
          <div className="w-20 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>

      <article>
        <header className="mb-8">
          {/* Image skeleton */}
          <div className="relative overflow-hidden rounded-lg mb-6">
            <div className="w-full h-64 md:h-80 bg-gray-200"></div>
          </div>

          {/* Meta info skeleton */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="w-24 h-3 bg-gray-200 rounded"></div>
            <div className="w-20 h-3 bg-gray-200 rounded"></div>
            <div className="w-16 h-3 bg-gray-200 rounded"></div>
            <div className="w-20 h-3 bg-gray-200 rounded"></div>
          </div>

          {/* Title skeleton */}
          <div className="space-y-3 mb-6">
            <div className="w-3/4 h-8 bg-gray-200 rounded"></div>
            <div className="w-1/2 h-8 bg-gray-200 rounded"></div>
          </div>

          {/* Action buttons skeleton */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-4 bg-gray-200 rounded"></div>
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="w-24 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="w-12 h-4 bg-gray-200 rounded"></div>
          </div>
        </header>

        {/* Content skeleton */}
        <div className="space-y-4 mb-12">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-200 rounded"></div>

          <div className="py-4">
            <div className="w-1/3 h-6 bg-gray-200 rounded mb-3"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
            <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
          </div>

          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-4/5 h-4 bg-gray-200 rounded"></div>

          <div className="py-4">
            <div className="w-1/4 h-6 bg-gray-200 rounded mb-3"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
          </div>

          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Author info skeleton */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="w-32 h-5 bg-gray-200 rounded mb-2"></div>
                <div className="space-y-2 mb-2">
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-24 h-3 bg-gray-200 rounded"></div>
                  <div className="w-2 h-3 bg-gray-200 rounded"></div>
                  <div className="w-20 h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
