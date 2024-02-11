import { DataSource, Movie } from "../interface";

type MovieResponse = {
  movies: Movie[][];
  source: DataSource;
};

export async function fetchMovies(searchText: string): Promise<MovieResponse> {
  return fetch(`http://localhost:3002/movies?searchText=${searchText}`, {
    method: "GET",
    headers: { "Access-Control-Allow-Origin": "*" },
  }).then((data) => data.json());
}
