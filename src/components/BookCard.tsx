/* eslint-disable @next/next/no-img-element */
import BookOpenIcon from "@/icons/BookOpenIcon";
import { Book } from "@/lib/definitions";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <Link href={`/home/book/${book.key}`} className="w-[250px] h-[350px] flex flex-col items-center justify-start p-2 rounded-md shadow-lg bg-gray-700 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer">
      {
        book.cover_id ? (
          <div className="flex justify-center items-center w-full h-[220px] mb-2 rounded-md bg-gray-600 border border-gray-700">
            <img
              src={`https://covers.openlibrary.org/b/ID/${book.cover_id}-M.jpg`}
              alt="Book Cover"
              className="w-[150px] h-[200px]"
              onError={(e: React.SyntheticEvent<EventTarget>) => {
                const target = e.target as HTMLImageElement;
                target.src = '';
              }} />
          </div>
        ) : (
          <div className="w-full h-[200px] flex flex-col items-center justify-center mb-2 rounded-md bg-gray-600 border border-gray-700">
            <BookOpenIcon height="100" width="150"/>
            <h1> No Book Cover Found </h1>
          </div>
        )
      }
      <div className="flex flex-col w-full items-start pl-2">
        <h1 className="text-pretty text-left line-clamp-2 font-bold cursor-text"> { book.title } </h1>
        <p className="truncate max-w-full text-left text-gray-300 cursor-text"> { book.author_name.join(', ') } </p>
        <p className="text-pretty text-left text-gray-300 cursor-text">
          { book.first_publish_year ?? 'Unknown' }
          <span className="text-gray-400 cursor-text"> - publish date</span>
        </p>
      </div>
    </Link>
  )
}

export default BookCard;
