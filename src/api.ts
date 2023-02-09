const BASE_URL = "https://yts.mx/api/v2/list_movies.json/";

export async function getMovies() {
  const response = await fetch(`${BASE_URL}`);
  const json = await response.json();
  return json;
}
