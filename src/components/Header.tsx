import {
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { SlHome, SlMenu } from "react-icons/sl";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const ColorIcon = useColorModeValue(FaSun, FaMoon);
  return (
    <VStack>
      <HStack w={{ sm: "50%" }} justifyContent={"space-between"}>
        <Menu>
          <MenuButton as={IconButton} aria-label="Menu" icon={<SlMenu />} />
          <MenuList>
            <Link to={"/"}>
              <MenuItem icon={<SlHome />}>Home</MenuItem>
            </Link>
          </MenuList>
        </Menu>

        <Heading>Movie Search</Heading>

        <HStack>
          <IconButton
            icon={<ColorIcon />}
            aria-label="Toggle Dark mode"
            onClick={toggleColorMode}
          ></IconButton>
        </HStack>
      </HStack>
      <SearchBar />
    </VStack>
  );
}
