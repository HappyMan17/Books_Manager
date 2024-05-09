import SearchBar from "@/components/SearchBar";
import BookCardSection from "./components/BookCardSection";

const searchOptions = ["Author", "Title"];

export default function SearchPage({
  searchParams,
} : {
  searchParams: {
    query: string;
    filter: string;
    page: string;
  };
}) {
  const getFullQuery = () => {
    const currentPage = Number(searchParams?.page || 1);
    const query = searchParams?.query || '';
    const filter = searchParams?.filter || '';

    if (!query) {
      return '';
    }

    if (filter === 'q') {
      return `${filter}=${query}&page=${currentPage}`;
    }

    return `${filter}=${query}`;
  };

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
        <div className="max-h-full flex justify-center overflow-y-scroll " >
          <BookCardSection query={getFullQuery()} />
        </div>
      </section>
    </div>
  )
}
