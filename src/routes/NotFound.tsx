import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack justifyContent={"center"} minH="100vh">
      <Heading>Page Not Found</Heading>
      <Text>페이지를 찾을 수 없습니다</Text>
      <Link to={"/"}>
        <Button variant={"link"}>Go home &rarr;</Button>
      </Link>
    </VStack>
  );
}
