import { Button, Flex, Input } from "@chakra-ui/react";

export function SearchBar({
  onSearch,
  onInputChange,
}: {
  onSearch: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => {};
}) {
  return (
    <Flex maxW={"80%"}>
      <Input marginRight={4} onChange={onInputChange} />
      <Button onClick={onSearch}>Search</Button>
    </Flex>
  );
}
