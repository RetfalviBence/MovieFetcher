import { MovieSearch } from "../models/MovieSearch";

export async function getMovieSearch(key: string) {
  return MovieSearch.findOne({ key }).exec();
}
