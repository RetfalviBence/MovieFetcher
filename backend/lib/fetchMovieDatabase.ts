import { Movie } from "../interface";
import { ExternalApiCallError } from "./customErrrors";

type MovieDbResponseData = {
  results: Movie[];
  total_pages: number;
  page: number;
};

export async function fetchMovieDatabase(
  searchText: string,
  page: number
): Promise<MovieDbResponseData> {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?page=${page}&query=${searchText}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Authorization: Bearer ${process.env.MOVIE_DB_API_KEY}`,
      },
    }
  )
    .catch((error) => {
      throw new ExternalApiCallError(
        "Service is not available. Error message: " + error.message
      );
    })
    .then((data) => data.json());
}
