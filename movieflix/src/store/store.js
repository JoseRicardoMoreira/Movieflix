import Vue from "vue";
import Vuex from "vuex";
import popularMovies from "./modules/popularMovies.js";
import topRatedMovies from "./modules/topRatedMovies.js";
import upcomingMovies from "./modules/upcomingMovies.js";
import movie from "./modules/movie.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    movie
  }
});
