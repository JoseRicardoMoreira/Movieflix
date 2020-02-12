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
  setTimeout(
    () => {console.log('Loading...')
      axios
      .get(POPULAR_URL + currentPage)
      .then(res => {
        store.dispatch("fetchPopularMovies", res.data);
        store.dispatch('setPopularLoadingOff');
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
      store.dispatch('setPopularLoadingOff');
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
      store.dispatch('setPopularLoadingOff');
    })
    .catch(error => console.log(error));
  }, 2000);
}
