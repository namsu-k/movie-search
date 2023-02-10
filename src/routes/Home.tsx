import { Box, Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getMovies } from "../api";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import { IData } from "../types";

export default function Home() {
  const { isLoading, data } = useQuery<IData>(["movies"], getMovies);
  return (
    <>
      {isLoading ? <Loading /> : null}
      <Grid
        justifyContent="center"
        justifyItems="center"
        my={2}
        gap={4}
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
          <Box w="90%">
            <Link to={`movie/${movie.id}`}>
              <Movie
                key={movie.id}
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
            </Link>
          </Box>
        ))}
      </Grid>
    </>
  );
}
