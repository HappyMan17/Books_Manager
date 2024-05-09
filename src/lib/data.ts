import { bookFromDefaultMapper, bookFromSearchMapper } from "@/mappers/bookMapper";
import k from "@/lib/constants";
import { Book } from "./definitions";

// https://nextjs.org/docs/app/building-your-application/caching#routerprefetch
interface Query {
  filter: string;
  query: string;
  page: string;
  limit: string;
}
export const getBooks = async (query: Query): Promise<Book[] | null> => {
  const response = await fetch(`${k.BOOK_API}/search.json?${query.filter}=${query.query}&page=${query.page}&limit=${query.limit}`, { cache: 'no-store' });
  const data = await response.json();
  if (!data || data.num_found === 0) {
    return null;
  }

  return data.docs.map((book: any) => bookFromSearchMapper({ ...book, numFound: data.num_found }));
};

export const getDefaultBooks = async () => {
  const response = await fetch(`${k.BOOK_API}/subjects/fantasy.json`, { cache: 'force-cache' });
  const data = await response.json();

  if (!data || !data.works) {
    return null;
  }

  return data.works.map((book: any) => bookFromDefaultMapper(book));
};