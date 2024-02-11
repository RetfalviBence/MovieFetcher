import { Box, Container, useToast } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { fetchMovies } from "./lib";
import { DataSource, Movie } from "./interface";
import {
  Header,
  Paginator,
  SearchBar,
  DataSourceMarker,
  MovieGrid,
} from "./components";

function App() {
  const toast = useToast();
  const [currentPage, setCurrentPage] = useState(0);
  const [moviePages, setMoviePages] = useState<Movie[][]>([]);
  const [dataSource, setDataSource] = useState<DataSource | null>(null);
  const [searchText, setSearchText] = useState("");

  const handleSearch = useCallback(async () => {
    if (searchText.length < 3) {
      toast({
        title: "Wrong Input",
        description: "Input length must be at least 3!",
        status: "error",
        isClosable: true,
      });
      return;
    }
    const response = await fetchMovies(searchText);
    setMoviePages(response.movies);
    setDataSource(response.source);
    setCurrentPage(0);
  }, [searchText, toast]);

  const handleInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  return (
    <Container maxWidth="80%" marginBottom={20}>
      <Header />
      <SearchBar onSearch={handleSearch} onInputChange={handleInputChange} />
      <DataSourceMarker dataSource={dataSource} />
      <MovieGrid moviePages={moviePages} currentPage={currentPage} />
      {moviePages.length > 1 && (
        <Box marginTop={10}>
          <Paginator
            pagesCount={moviePages.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Box>
      )}
    </Container>
  );
}

export default App;
