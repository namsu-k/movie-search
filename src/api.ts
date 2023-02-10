import { QueryFunctionContext } from "@tanstack/react-query";

const BASE_URL = "https://yts.mx/api/v2/list_movies.json/";
const DETAIL_BASE_URL = "https://yts.mx/api/v2/movie_details.json/";

export async function getMovies() {
  const response = await fetch(`${BASE_URL}`);
  const json = await response.json();
  return json;
}

export async function getMovieDetail({ queryKey }: QueryFunctionContext) {
  const [_, movieId] = queryKey;
  const response = await fetch(`${DETAIL_BASE_URL}?movie_id=${movieId}`);
  const json = await response.json();
  return json;
}
