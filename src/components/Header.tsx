import {
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SlArrowRightCircle, SlHome, SlMenu } from "react-icons/sl";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const ColorIcon = useColorModeValue(FaSun, FaMoon);
  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Flex>
          <Menu>
            <MenuButton as={IconButton} aria-label="Menu" icon={<SlMenu />} />
            <MenuList>
              <Link to={"/"}>
                <MenuItem icon={<SlHome />}>Home</MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem disabled icon={<SlArrowRightCircle />}>
                recent
              </MenuItem>
              <MenuItem disabled icon={<SlArrowRightCircle />}>
                rating
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Heading>Movie Search</Heading>

        <HStack>
          <Flex>
            <IconButton
              icon={<ColorIcon />}
              aria-label="Toggle Dark mode"
              onClick={toggleColorMode}
            ></IconButton>
          </Flex>
        </HStack>
      </HStack>
      <SearchBar />
    </>
  );
}
