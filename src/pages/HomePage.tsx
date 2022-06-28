import { useMovies } from "../hooks/useMovies";
export const HomePage = () => {
  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) return <p>Loading...</p>;

  console.log(nowPlaying);

  return <div>HomePage</div>;
};
