export interface IMeta {
  api_version: number;
  execution_time: string;
  server_time: number;
  server_timezone: string;
}

export interface IMoviesData {
  limit: number;
  movie_count: number;
  movies: [IMovies];
  page_number: number;
}

export interface IData {
  meta: IMeta;
  data: IMoviesData;
  status: string;
  status_message: string;
}

export interface IMoviesTorrents {
  date_uploaded: string;
  date_uploaded_unix: number;
  hash: string;
  peers: number;
  quality: string;
  seeds: number;
  size: string;
  size_bytes: number;
  types: string;
  url: string;
}

export interface IMovies {
  background_image: string;
  background_image_original: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  description_full: string;
  genres: string[];
  id: number;
  imdb_code: string;
  language: string;
  large_cover_image: string;
  medium_cover_image: string;
  mpa_rating: string;
  rating: number;
  runtime: number;
  slug: string;
  small_cover_image: string;
  state: string;
  summary: string;
  synopsis: string;
  title: string;
  title_english: string;
  title_long: string;
  torrents: IMoviesTorrents[];
  url: string;
  year: number;
  yt_trailer_code: string;
}
