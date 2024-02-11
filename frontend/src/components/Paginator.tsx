import { Button, Text, Center } from "@chakra-ui/react";

export function Paginator({
  pagesCount,
  currentPage,
  setCurrentPage,
}: {
  pagesCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) {
  return (
    <Center>
      <Button
        size="xs"
        variant="ghost"
        onClick={() => setCurrentPage(currentPage - 1)}
        isDisabled={currentPage === 0}
        margin={2}
      >
        Previous
      </Button>
      <Text>{`${currentPage} (${pagesCount - 1})`}</Text>
      <Button
        size="xs"
        variant="ghost"
        margin={2}
        onClick={() => setCurrentPage(currentPage + 1)}
        isDisabled={pagesCount - 1 === currentPage}
      >
        Next
      </Button>
    </Center>
  );
}
