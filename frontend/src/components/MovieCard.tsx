import { Card, Center, Image, Text, Box } from "@chakra-ui/react";
import { Movie } from "../interface";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card paddingY={8} height={"400px"} paddingX={4}>
      <Center marginBottom={10}>
        <Image
          boxSize="200px"
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          fallbackSrc="https://via.placeholder.com/500"
          borderRadius="lg"
        />
      </Center>
      <Box overflow={"auto"}>
        <Text as={"b"}> Title:</Text>
        <Text>{movie.title}</Text>
        <br />
        <Text as={"b"}> overview:</Text>
        <Text>{movie.overview}</Text>
      </Box>
    </Card>
  );
}
