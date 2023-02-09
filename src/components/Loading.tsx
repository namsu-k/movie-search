import { Box, Heading, Spinner, VStack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box w="100%" h="100%">
      <VStack h="70%" justifyContent={"center"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="blue.500"
          color="whiteAlpha"
          size="xl"
        />
        <Heading>Loading...</Heading>
      </VStack>
    </Box>
  );
}
