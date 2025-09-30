export default function BlogListSkeleton() {
  return (
    <div className="space-y-8">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bg-white space-y-8">
          <article className="group">
            <a className="block" href="#" aria-label="Loading blog post">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative overflow-hidden h-52">
                    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                  </div>
                  <div className="bg-white md:w-2/3 p-6 md:p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center mt-1">
                        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse mr-1"></div>
                        <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse mr-1"></div>
                        <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
                      </div>
                    </div>
                    <h2 className="w-3/4 h-6 bg-gray-300 rounded animate-pulse mt-5 mb-5"></h2>
                    <p className="w-full h-4.5 bg-gray-300 rounded animate-pulse mb-3"></p>
                    <p className="w-full h-4.5 bg-gray-300 rounded animate-pulse mb-3"></p>
                  </div>
                </div>
              </div>
            </a>
          </article>
        </div>
      ))}
    </div>
  );
}
