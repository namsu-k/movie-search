// import { Box, Input, Select } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import Movie from "../components/Movie";

import {
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

// function Home() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async (limit) => {
//     const json = await (
//       await fetch(`https://yts.mx/api/v2/list_movies.json/?limit=${limit}`)
//     ).json();
//     console.log(json);
//     setMovies(json.data.movies);
//     setLoading(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return (
//     <Box>
//       <Box m={4}>
//         <Select placeholder="표시할 영화 개수">
//           <option value="10">10개씩 보기</option>
//           <option value="20">20개씩 보기</option>
//           <option value="30">30개씩 보기</option>
//         </Select>
//       </Box>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <>
//           {movies.map((movie) => (
//             <Movie
//               key={movie.id}
//               id={movie.id}
//               coverImg={movie.medium_cover_image}
//               title={movie.title}
//               summary={movie.summary}
//               rating={movie.rating}
//               genres={movie.genres}
//             ></Movie>
//           ))}
//         </>
//       )}
//     </Box>
//   );
// }

// export default Home;

export default function Home() {
  return (
    <Flex justifyContent={"center"} mt={8}>
      <InputGroup
        w={"500px"}
        as={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("click");
        }}
      >
        <Input />
        <InputRightElement>
          <IconButton
            type="submit"
            aria-label="click search button"
            icon={<FaSearch />}
            variant={"ghost"}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}
