import { Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <header>
      <Heading as={"h1"} padding={10}>
        Movie fetcher
      </Heading>
    </header>
  );
}
