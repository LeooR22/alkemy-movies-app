import axios from "axios";

const movieDBApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "e75473137a4937e4cb6c409e6a94563e",
    language: "en-US",
  },
});

export default movieDBApi;
