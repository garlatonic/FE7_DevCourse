export default function PostRelativeLoader() {
  return (
    <>
      <section className="max-w-[800px] mx-auto">
        <div className="h-6 animate-pulse bg-gray-200 mb-5"></div>
        <ul>
          <li>
            <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[34px]">
              <div className="w-full h-40 sm:w-64 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="w-full mt-2">
                <div className="h-5 sm:h-6 bg-gray-200 animate-pulse mb-2"></div>
                <div className="h-4 sm:h-5 bg-gray-200 animate-pulse w-3/4"></div>
                <div className="h-4 sm:h-5 bg-gray-200 animate-pulse w-2/3 mt-1"></div>
                <div className="h-4 sm:h-5 bg-gray-200 animate-pulse w-1/2 mt-1"></div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
