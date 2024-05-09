export interface Book {
  title: string;
  author_name: string[];
  cover_id: string[];
  first_publish_year: number;
  key: string;
  number_of_pages_median?: string;
  num_found?: number;
}

export interface Query {
  filter: string;
  query: string;
  page: string;
  limit: string;
}