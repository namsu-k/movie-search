import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <Box w="100%" h="10%" mt={2} mb={8}>
      <Flex
        bgColor={"rgba(0,0,0,0.3)"}
        borderRadius={20}
        w="100%"
        h="100%"
        justifyContent={"center"}
        alignItems="center"
      >
        <InputGroup
          w={"500px"}
          as={"form"}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("clicked search button");
          }}
        >
          <Input />
          <InputRightElement>
            <IconButton
              type="submit"
              aria-label="search button"
              icon={<FaSearch />}
              variant={"ghost"}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}
