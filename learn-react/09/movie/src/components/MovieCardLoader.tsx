export default function MovieLoaderCard() {
  return (
    <>
      {/* 스켈레톤 */}
      <div className="animate-pulse">
        <div className="pt-[142%] bg-gray-200 rounded-md w-full"></div>
        <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-200">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-6 bg-gray-200 rounded w-4"></div>
            <div className="h-6 bg-gray-200 rounded w-8"></div>
          </div>
          <div className="h-6 bg-gray-200 rounded w-10"></div>
        </div>
      </div>
    </>
  );
}
