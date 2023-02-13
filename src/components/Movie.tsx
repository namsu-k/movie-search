import {
  Badge,
  Box,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { IMovies } from "../types";

export default function Movie({
  title,
  genres,
  rating,
  medium_cover_image,
  large_cover_image,
  background_image_original,
}: IMovies) {
  const TextColor = useColorModeValue("whiteAlpha.800", "whiteAlpha.800");
  return (
    <GridItem
      bgImg={background_image_original}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      borderRadius={10}
    >
      <VStack
        color={TextColor}
        _hover={{
          content: `""`,
          bgColor: "blackAlpha.800",
          borderColor: "rgba(0,0,0,0)",
          borderRadius: 10,
          borderWidth: 10,
          color: "white",
        }}
      >
        <Image
          overflow={"hidden"}
          objectFit={"cover"}
          borderRadius={10}
          src={large_cover_image}
          maxH="100%"
        />
        <Heading noOfLines={1} textAlign={"center"}>
          {title}
        </Heading>

        <HStack pb={4}>
          {genres.map((g) => (
            <Badge colorScheme="blue" fontSize={"8"} variant={"outline"}>
              {g}
            </Badge>
          ))}

          <HStack spacing={0}>
            <Box color={"yellow"}>
              <FaStar />
            </Box>
            <Text>{rating}</Text>
          </HStack>
        </HStack>
      </VStack>
    </GridItem>
  );
}
