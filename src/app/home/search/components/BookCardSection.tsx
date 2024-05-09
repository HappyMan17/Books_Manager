'use client';

import BookCard from "@/components/BookCard";
import k from "@/lib/constants";
import { getBooks } from "@/lib/data";
import { Book, Query } from "@/lib/definitions";
import { Button } from "@nextui-org/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// https://medium.com/@ferlat.simon/infinite-scroll-with-nextjs-server-actions-a-simple-guide-76a894824cfd

interface SectionProps {
  books: Book[];
  query: Query | null;
}

const BookCardSection = ({ books, query }: SectionProps) => {
  const [currentPage, setPage] = useState<string>(query?.limit ?? k.INIT_PAGE.toString());
  const [currentBooks, setBooks] = useState<Book[]>(books);

  const loadMoreUsers = async () => {
    const newPage = (Number(currentPage) + k.INIT_LIMIT).toString();
    const apiBooks = await getBooks({ ...query!, page: currentPage });

    if (!apiBooks) return;
    setBooks([...currentBooks, ...apiBooks]);
    setPage(newPage);

  }

  useEffect(() => {
    if (books) {
      setBooks(books);
      setPage(query?.limit ?? k.INIT_PAGE.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books])
  

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-8 2xl:grid-cols-4 gap-4">
        {
          currentBooks.map(book => {
            return (
              <BookCard key={book.key} book={book} />
            )
          })
        }
      </div>
      {
        (currentBooks[0]?.num_found && (currentBooks[0].num_found > Number(currentPage))) && (
          <div className="w-full flex justify-center m-5">
            <Button className="bg-gray-700" onClick={loadMoreUsers}>Load more</Button>
          </div>
        )
      }
    </section>
  )
};

export default BookCardSection;
