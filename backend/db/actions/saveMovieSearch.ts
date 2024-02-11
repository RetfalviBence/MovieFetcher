import { Movie } from "../../interface";
import { MovieSearch } from "../models/MovieSearch";

export async function saveMovieSearch(key: string, movies: Movie[][]) {
  await MovieSearch.create({
    key,
    movies,
  });
}
