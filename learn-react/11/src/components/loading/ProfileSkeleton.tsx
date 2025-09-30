export default function ProfileSkeleton() {
  return (
    <div className="animate-pulse ">
      {/* Page title skeleton */}
      <div className="mb-8">
        <div className="w-20 h-9 bg-gray-200 rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left sidebar skeleton */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Avatar and basic info */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <div className="w-32 h-5 bg-gray-200 rounded mx-auto mb-2"></div>
              <div className="w-40 h-4 bg-gray-200 rounded mx-auto"></div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-200 rounded mr-3"></div>
                <div className="w-28 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-200 rounded mr-3"></div>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Edit button */}
            <div className="mt-6">
              <div className="w-full h-10 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Right content skeleton */}
        <div className="lg:col-span-2">
          {/* About section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-7">
              <div className="w-16 h-6 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-3">
              <div className="w-full h-4.5 bg-gray-200 rounded"></div>
              <div className="w-full h-4.5 bg-gray-200 rounded"></div>
              <div className="w-3/4 h-4.5 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Recent posts section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-24 h-6 bg-gray-200 rounded mb-6"></div>

            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex-1">
                    <div className="w-3/4 h-5 bg-gray-200 rounded mb-2"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-16 h-5 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
