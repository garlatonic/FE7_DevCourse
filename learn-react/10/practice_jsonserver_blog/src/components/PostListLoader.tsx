export default function PostListLoader() {
  return (
    <>
      <section className="grid md:grid-cols-2 gap-[35px] mt-[80px] mb-[152px] animate-pulse">
        <div className="bg-white">
          <a href="#" aria-label="Loading article">
            <article className="animate-pulse">
              <div className="bg-gray-200 w-full py-[28.1%] rounded-lg"></div>
              <div className="mt-5.25">
                <div className="bg-gray-300 w-20 h-6.5 rounded-md mb-4"></div>
                <div className="bg-gray-300 w-3/4 h-6 rounded-md mb-3"></div>
                <div className="bg-gray-300 w-1/2 h-4 rounded-md mb-2"></div>
                <div className="bg-gray-300 w-full h-4 rounded-md mb-4"></div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="bg-gray-200 w-10 h-10 rounded-full"></div>
                  <div className="bg-gray-300 w-24 h-4 rounded-md"></div>
                </div>
              </div>
            </article>
          </a>
        </div>
        <div className="bg-white">
          <a href="#" aria-label="Loading article">
            <article className="animate-pulse">
              <div className="bg-gray-200 w-full py-[28.1%] rounded-lg"></div>
              <div className="mt-5.25">
                <div className="bg-gray-300 w-20 h-6.5 rounded-md mb-4"></div>
                <div className="bg-gray-300 w-3/4 h-6 rounded-md mb-3"></div>
                <div className="bg-gray-300 w-1/2 h-4 rounded-md mb-2"></div>
                <div className="bg-gray-300 w-full h-4 rounded-md mb-4"></div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="bg-gray-200 w-10 h-10 rounded-full"></div>
                  <div className="bg-gray-300 w-24 h-4 rounded-md"></div>
                </div>
              </div>
            </article>
          </a>
        </div>
      </section>
    </>
  );
}
