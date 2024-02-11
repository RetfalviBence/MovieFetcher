import { fetchMovieDatabase } from "./fetchMovieDatabase";

export async function collectMoviePages(searchText: string) {
  const firstPage = await fetchMovieDatabase(searchText, 1);
  if (firstPage.total_pages > 1) {
    const fetchPages = Array(Math.min(firstPage.total_pages, 10) - 1)
      .fill(0)
      .map((_, index) => fetchMovieDatabase(searchText, index + 2));
    const additionalPages = await Promise.all(fetchPages);
    return [firstPage, ...additionalPages].map((page) => page.results);
  }

  return [firstPage.results];
}
