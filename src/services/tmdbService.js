import axios from "axios";

const POPULAR_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=9d479c8041b4e0813af9f60efc678759&language=en-US&page=";

const TOP_RATED_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=9d479c8041b4e0813af9f60efc678759&language=en-US&page=";

const UPCOMING_URL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=9d479c8041b4e0813af9f60efc678759&language=en-US&page=";

export default {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies
};

function fetchPopularMovies(currentPage, store) {
  axios
    .get(POPULAR_URL + currentPage)
    .then(res => {
      store.dispatch("fetchPopularMovies", res.data);
    })
    .catch(error => console.log(error));
}

function fetchTopRatedMovies(currentPage, store) {
  axios
    .get(TOP_RATED_URL + currentPage)
    .then(res => {
      store.dispatch("fetchTopRatedMovies", res.data);
    })
    .catch(error => console.log(error));
}

function fetchUpcomingMovies(currentPage, store) {
  axios
    .get(UPCOMING_URL + currentPage)
    .then(res => {
      store.dispatch("fetchUpcomingMovies", res.data);
    })
    .catch(error => console.log(error));
}
