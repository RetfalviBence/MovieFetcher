import { DataSource } from "../interface";
import { collectMoviePages } from "../lib/collectMoviePages";
import { incrementCacheCounter } from "../db/actions/incrementCacheCounter";
import { resetCacheCounter } from "../db/actions/resetCacheCounter";
import { saveMovieSearch } from "../db/actions/saveMovieSearch";
import { getMovieSearch } from "../db/actions/getMovieSearch";
import { checkTimeStampIsTooOld } from "../lib/checkTimestampIsTooOld";

export async function getMovies(searchText: string) {
  const resultFromCache = await getMovieSearch(searchText);
  if (resultFromCache && !checkTimeStampIsTooOld(resultFromCache.updatedAt)) {
    await incrementCacheCounter();
    return { movies: resultFromCache.movies, source: DataSource.CACHE };
  }
  await resetCacheCounter();
  const resultFromExternalAPI = await collectMoviePages(searchText);
  await saveMovieSearch(searchText, resultFromExternalAPI);
  return { movies: resultFromExternalAPI, source: DataSource.DATABASE };
}
