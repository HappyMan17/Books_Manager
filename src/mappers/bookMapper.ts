import { Book } from "@/lib/definitions";

function getBookKey(bookKey: string) {
  if (!bookKey) return { works: '', key: '' };

  const [_, category, key] = bookKey.split('/');

  return { works: category, key };
}

export const bookFromSearchMapper = (searchResult: any): Book => {
  return {
    title: searchResult.title ?? 'No Title Provided',
    author_name: searchResult.author_name ?? ['No Author Provided'],
    cover_id: searchResult.cover_i,
    first_publish_year: searchResult.first_publish_year,
    key: getBookKey(searchResult.key).key,
    number_of_pages_median: searchResult.number_of_pages,
    num_found: searchResult.numFound,
  };
};

export const bookFromDefaultMapper = (searchResult: any): Book => {
  return {
    title: searchResult.title,
    author_name: searchResult.authors.map((author: any) => author.name),
    cover_id: searchResult.cover_id,
    first_publish_year: searchResult.first_publish_year,
    key: getBookKey(searchResult.key).key,
  };
};
