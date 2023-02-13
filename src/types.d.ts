export interface IData {
  meta: IMeta;
  data: IMoviesData;
  status: string;
  status_message: string;
}

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

export interface IMoviesTorrents {
  date_uploaded: string;
  date_uploaded_unix: number;
  hash: string;
  peers: number;
  quality: string;
  seeds: number;
  size: string;
  size_bytes: number;
  type: string;
  url: string;
}

export interface IDetailData {
  meta: IMeta;
  data: IDetailMovieData;
  status: string;
  status_message: string;
}

export interface IDetailMovieData {
  movie: IDetailMovie;
}

export interface IDetailMovie {
  background_image: string;
  background_image_original: string;
  cast: ICast[];
  date_uploaded: string;
  date_uploaded_unix: number;
  description_full: string;
  description_intro: string;
  download_count: number;
  genres: string[];
  id: number;
  imdb_code: string;
  language: string;
  large_cover_image: string;
  like_count: number;
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

export interface ICast {
  name: string;
  character_name: string;
  imdb_code: string;
  url_small_image?: string;
}
