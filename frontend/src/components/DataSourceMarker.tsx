import { Box, Text } from "@chakra-ui/react";
import { DataSource } from "../interface";

const getDataSourceProperties = (dataSource: DataSource | null) => {
  switch (dataSource) {
    case DataSource.CACHE:
      return { text: "data from cache", color: "green" };
    case DataSource.DATABASE:
      return { text: "data from database", color: "red" };
    default:
      return { text: "no data", color: "blue" };
  }
};

export function DataSourceMarker({
  dataSource,
}: {
  dataSource: DataSource | null;
}) {
  const { color, text } = getDataSourceProperties(dataSource);
  return (
    <Box
      backgroundColor={color}
      width="220px"
      padding="8px"
      borderRadius={8}
      marginY={8}
    >
      <Text color={"white"}>{text}</Text>
    </Box>
  );
}
