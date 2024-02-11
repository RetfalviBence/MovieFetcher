import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { MovieCard } from "./MovieCard";
import { Movie } from "../interface";

export function MovieGrid({
  moviePages,
  currentPage,
}: {
  moviePages: Movie[][];
  currentPage: number;
}) {
  return (
    <>
      <SimpleGrid gap={6} columns={4}>
        {moviePages.length !== 0 &&
          moviePages[currentPage].map((movie: Movie) => (
            <GridItem key={movie.id}>
              <MovieCard movie={movie} />
            </GridItem>
          ))}
      </SimpleGrid>
    </>
  );
}
