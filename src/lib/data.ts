import { bookFromDefaultMapper, bookFromSearchMapper } from "@/mappers/bookMapper";

// https://nextjs.org/docs/app/building-your-application/caching#routerprefetch

export const getBooks = async (query: string) => {
  const response = await fetch(`http://openlibrary.org/search.json?${query}`, { cache: 'no-store' });
  const data = await response.json();

  if (!data && !data.docs) {
    return null;
  }

  return data.docs.map((book: any) => bookFromSearchMapper(book));
};

export const getDefaultBooks = async () => {
  const response = await fetch(`http://openlibrary.org/subjects/fantasy.json`, { cache: 'force-cache' });
  const data = await response.json();

  if (!data && !data.works) {
    return null;
  }

  return data.works.map((book: any) => bookFromDefaultMapper(book));
};