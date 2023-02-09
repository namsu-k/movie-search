// import { Box, Input, Select } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import Movie from "../components/Movie";

import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../api";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import SearchBar from "../components/SearchBar";
import { IData } from "../types";

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
  const { isLoading, data } = useQuery<IData>(["movies"], getMovies);
  return (
    <>
      <SearchBar />
      {isLoading ? <Loading /> : null}
      <Grid
        justifyContent="center"
        justifyItems="center"
        my={2}
        gap={8}
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
      >
        {data?.data.movies.map((movie) => (
          <Movie
            title={movie.title}
            background_image={""}
            background_image_original={movie.background_image_original}
            date_uploaded={""}
            date_uploaded_unix={0}
            description_full={""}
            genres={movie.genres}
            id={movie.id}
            imdb_code={""}
            language={""}
            large_cover_image={""}
            medium_cover_image={movie.medium_cover_image}
            mpa_rating={""}
            rating={movie.rating}
            runtime={0}
            slug={""}
            small_cover_image={""}
            state={""}
            summary={""}
            synopsis={""}
            title_english={""}
            title_long={""}
            torrents={[]}
            url={""}
            year={0}
            yt_trailer_code={""}
          />
        ))}
      </Grid>
    </>
  );
}
