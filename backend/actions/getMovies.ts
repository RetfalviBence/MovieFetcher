import { incrementCacheCounter, resetCacheCounter } from "../lib/cacheCounter";
import { getResponseByCache, saveResultToCache } from "../lib/dataHandler";
import { DataSource } from "../interface";
import { collectMoviePages } from "../lib/collectMoviePages";

export async function getMovies(searchText: string) {
  const resultFromCache = getResponseByCache(searchText);
  if (resultFromCache) {
    incrementCacheCounter();
    return { movies: resultFromCache, source: DataSource.CACHE };
  }
  resetCacheCounter();
  const resultFromDatabase = await collectMoviePages(searchText);
  saveResultToCache(searchText, resultFromDatabase as any);
  return { movies: resultFromDatabase, source: DataSource.DATABASE };
}
