import { bookFromDefaultMapper, bookFromSearchMapper } from "@/mappers/bookMapper";

export const getBooks = async (query: string) => {
  const response = await fetch(`http://openlibrary.org/search.json?${query}`);
  const data = await response.json();

  if (!data && !data.docs) {
    return null;
  }

  return data.docs.map((book: any) => bookFromSearchMapper(book));
};

export const getDefaultBooks = async () => {
  const response = await fetch(`http://openlibrary.org/subjects/fantasy.json`);
  const data = await response.json();

  if (!data && !data.works) {
    return null;
  }

  return data.works.map((book: any) => bookFromDefaultMapper(book));
};