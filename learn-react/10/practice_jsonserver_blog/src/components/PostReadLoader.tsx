export default function PostReadLoader() {
  return (
    <>
      <div className="animate-pulse">
        <section className="max-w-[800px] mx-auto">
          <div className="w-[73px] h-[26px] bg-gray-200 mt-[21px] mb-[8px] rounded-[3px]"></div>
          <div className="h-6 bg-gray-200 w-3/4 md:h-7 rounded-sm"></div>
          <div className="h-4 bg-gray-200 rounded-sm text-sm text-[#515151] mb-[18px]"></div>
          <div className="h-[278px] bg-gray-200 mb-4 rounded-md"></div>
          <div className="mt-4 flex items-center gap-[14px]">
            <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-200 rounded-sm"></div>
          </div>
        </section>
        <section className="max-w-[800px] mx-auto text-lg sm:text-xl text-[#434343] mt-5 [&>p]:mb-10 ">
          <div className="h-6 bg-gray-200 w-1/3 rounded-sm my-3"></div>
          <div className="h-6 bg-gray-200 w-2/3 rounded-sm my-3"></div>
          <div className="mb-10 h-6 bg-gray-200 w-full rounded-sm my-3"></div>
        </section>
      </div>
    </>
  );
}
