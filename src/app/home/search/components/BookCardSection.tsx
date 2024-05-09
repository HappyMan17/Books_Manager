import BookCard from "@/components/BookCard";
import { getBooks, getDefaultBooks } from "@/lib/data";
import { Book } from "@/lib/definitions";

const BookCardSection = async({ query }: { query:string }) => {
  const books: Book[] = query ? await getBooks(query) : await getDefaultBooks();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-8 2xl:grid-cols-4 gap-4">
      {
        books.map(book => {
          return (
            <BookCard key={book.key} book={book} />
          )
        })
      }
    </div>
  )
};

export default BookCardSection;
