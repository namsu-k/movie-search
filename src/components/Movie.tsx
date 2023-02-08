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

export {};
