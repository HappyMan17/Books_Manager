const BookCardSkeleton = () => {
  return (
    <div className="animate-pulse w-[250px] h-[350px] flex flex-col items-center justify-start p-2 rounded-md shadow-lg bg-gray-700">
      <div className="w-full h-[200px] flex flex-col items-center justify-center mb-2 rounded-md bg-slate-600 border border-gray-700">
        <div className="min-h-100 min-w-150" ></div>
      </div>
      <div className="flex flex-col w-full items-start px-2 gap-4">
        <div className="h-5 w-9/12 rounded-full bg-slate-600"></div>
        <div className="h-5 w-8/12 rounded-full bg-slate-600"></div>
        <div className="h-5 w-6/12 rounded-full bg-slate-600"></div>
      </div>
    </div>
  )
}

export default BookCardSkeleton;
