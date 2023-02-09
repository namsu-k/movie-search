// import {
//   Heading,
//   HStack,
//   Img,
//   ListItem,
//   Stack,
//   Text,
//   UnorderedList,
//   VStack,
// } from "@chakra-ui/react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

import {
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

// function Movie({ id, coverImg, title, summary, rating, genres }) {
//   return (
//     <Stack borderWidth={1} w="60%">
//       <HStack>
//         <Img src={coverImg} alt={title} />
//         <VStack w="40%">
//           <Heading>
//             <Link to={`/movie/${id}`}>{title}</Link>
//           </Heading>
//           <Text noOfLines={3}>{summary}</Text>
//           <Text>Rating : {rating}</Text>
//           <UnorderedList>
//             {genres.map((g) => (
//               <ListItem key={g}>{g}</ListItem>
//             ))}
//           </UnorderedList>
//         </VStack>
//       </HStack>
//     </Stack>
//   );
// }

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   rating: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
// export default Movie;

export default function Movie({
  title,
  genres,
  rating,
  medium_cover_image,
  background_image_original,
}: IMovies) {
  const TextColor = useColorModeValue("white", "white");
  return (
    <GridItem
      bgImg={background_image_original}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      borderColor={"blackAlpha.100"}
      borderRadius={20}
      borderStyle={"groove"}
      w="340px"
      h="640px"
    >
      <VStack
        m={4}
        _hover={{
          content: `""`,
          bgColor: "blackAlpha.800",
          borderRadius: 20,
          w: "100%",
          h: "100%",
          m: 0,
          color: TextColor,
        }}
      >
        <Image
          overflow={"hidden"}
          objectFit={"cover"}
          w="100%"
          borderRadius={20}
          src={medium_cover_image}
        />
        <VStack w="100%">
          <Heading noOfLines={2} textAlign={"center"}>
            {title}
          </Heading>
          <HStack w="100%" justifyContent={"space-evenly"}>
            {genres.map((g) => (
              <Text>{g}</Text>
            ))}

            <Text>
              <FaStar />
              {rating}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </GridItem>
  );
}
