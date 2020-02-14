import axios from "axios";

const POPULAR_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=9d479c8041b4e0813af9f60efc678759&language=en-US&page=";

const TOP_RATED_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=9d479c8041b4e0813af9f60efc678759&language=en-US&page=";

const UPCOMING_URL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=9d479c8041b4e0813af9f60efc678759&language=en-US&page=";

const MOVIE_DETAILS_URL_PART_1 = "https://api.themoviedb.org/3/movie/";

const MOVIE_DETAILS_URL_PART_2 =
  "?api_key=9d479c8041b4e0813af9f60efc678759&language=en-US&append_to_response=videos";

export default {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchMovieDetails,
  fetchMovieCredits
};

function fetchPopularMovies(currentPage, store) {
  setTimeout(() => {
    console.log("Loading...");
    axios
      .get(POPULAR_URL + currentPage)
      .then(res => {
        store.dispatch("fetchPopularMovies", res.data);
        store.dispatch("setPopularLoadingOff");
      })
      .catch(error => console.log(error));
  }, 2000);
}

function fetchTopRatedMovies(currentPage, store) {
  setTimeout(() => {
    axios
      .get(TOP_RATED_URL + currentPage)
      .then(res => {
        store.dispatch("fetchTopRatedMovies", res.data);
        store.dispatch("setTopRatedLoadingOff");
      })
      .catch(error => console.log(error));
  }, 2000);
}

function fetchUpcomingMovies(currentPage, store) {
  setTimeout(() => {
    axios
      .get(UPCOMING_URL + currentPage)
      .then(res => {
        store.dispatch("fetchUpcomingMovies", res.data);
        store.dispatch("setUpcomingLoadingOff");
      })
      .catch(error => console.log(error));
  }, 2000);
}

function fetchMovieDetails(movie_id, store) {
  setTimeout(() => {
    axios
      .get(MOVIE_DETAILS_URL_PART_1 + movie_id + MOVIE_DETAILS_URL_PART_2)
      .then(res => {
        store.dispatch("setMovie", res.data);
      })
      .catch(error => console.log(error));
  }, 2000);
}

function fetchMovieCredits(movie_id, store) {
  setTimeout(() => {
    axios
      .get(
        MOVIE_DETAILS_URL_PART_1 +
          movie_id +
          "/credits" +
          MOVIE_DETAILS_URL_PART_2
      )
      .then(res => {
        store.dispatch("setCast", res.data.cast);
        store.dispatch("setCastIsLoadingOff");
      })
      .catch(error => console.log(error));
  }, 2000);
}
