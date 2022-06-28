import { useEffect, useState } from "react";
import movieDBApi from "../api/movieDBApi";
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface";

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieState, setMovieState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlaying = movieDBApi.get<MovieDBMoviesResponse>("/now_playing");
    const popular = movieDBApi.get<MovieDBMoviesResponse>("/popular");
    const topRated = movieDBApi.get<MovieDBMoviesResponse>("/top_rated");
    const upcoming = movieDBApi.get<MovieDBMoviesResponse>("/upcoming");

    const response = await Promise.all([
      nowPlaying,
      popular,
      topRated,
      upcoming,
    ]);

    setMovieState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { ...movieState, isLoading };
};
