import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const DETAIL_BASE_URL = "https://yts.mx/api/v2/movie_details.json/";

const instance = axios.create({
  baseURL: "https://yts.mx/api/v2/list_movies.json/",
});

export const getMovies = () =>
  instance.get("").then((response) => response.data);

export const getMovieDetail = ({ queryKey }: QueryFunctionContext) => {
  const [_, movieId] = queryKey;
  return instance
    .get(`${DETAIL_BASE_URL}?movie_id=${movieId}&with_cast=true`)
    .then((response) => response.data);
};
