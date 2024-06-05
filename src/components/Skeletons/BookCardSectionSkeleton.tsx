import BookCardSkeleton from "./BookCardSkeleton";

const BookCardSectionSkeleton = () => {
  const books = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-8 2xl:grid-cols-4 gap-4">
        {
          books.map(book => {
            return (
              <BookCardSkeleton key={book} />
            )
          })
        }
      </div>
    </section>
  )
};

export default BookCardSectionSkeleton;
