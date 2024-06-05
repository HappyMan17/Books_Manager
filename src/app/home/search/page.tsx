import { Suspense } from "react";

import SearchBar from "@/components/SearchBar";
import BookCardSection from "./components/BookCardSection";
import k from "@/lib/constants";
import { Book, Query } from "@/lib/definitions";
import { getBooks, getDefaultBooks } from "@/lib/data";
import BookCardSectionSkeleton from "@/components/Skeletons/BookCardSectionSkeleton";

const searchOptions = ["Author", "Title"];

export default async function SearchPage({
  searchParams,
} : {
  searchParams: {
    query: string;
    filter: string;
    page: string;
    limit: string;
  };
}) {
  const currentPage = Number(searchParams?.page || k.INIT_PAGE);
  const currentLimit = Number(searchParams?.limit || k.INIT_LIMIT);
  const query = searchParams?.query || '';
  const filter = searchParams?.filter || '';

  const fullQuery: Query = {
    filter: filter,
    query: query.replace(/ /g, '+'),
    page: currentPage.toString(),
    limit: currentLimit.toString(),
  };

  const books: Book[] = query ? await getBooks(fullQuery) : await getDefaultBooks();

  return (
    <div className="h-full w-full flex flex-col">
      <section className="flex flex-col justify-center items-center gap-2 py-5 px-2 mb-3 border border-white rounded-sm">
        <h1 className="text-5xl font-bold"> Search A Book </h1>
        <p> Choose if your looking for the Title or the Author </p>
        {/* Make a component with it */}
        <SearchBar searchOptions={searchOptions} />
      </section>
      <section className="h-full flex flex-col overflow-hidden rounded-sm p-3  ">
        <h1 className="text-2xl font-bold"> BOOK LIST: </h1>
        {
          books ? (
            <div className="max-h-full flex justify-center overflow-y-scroll " >
              <Suspense fallback={<BookCardSectionSkeleton />}>
                <BookCardSection books={books} query={fullQuery} />
              </Suspense>
            </div>
          ) : (
            <div className="max-h-full flex justify-center pt-5">
              <h1 className="text-4xl"> No books found </h1>
            </div>
          )
        }
      </section>
    </div>
  )
}
