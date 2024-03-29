import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <Flex
      w="50%"
      bgColor={"rgba(0,0,0,0.3)"}
      borderRadius={10}
      justifyContent={"center"}
      alignItems="center"
    >
      <InputGroup
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
  );
}
