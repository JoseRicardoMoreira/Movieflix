import Vue from "vue";
import Vuex from "vuex";
import popularMovies from "./modules/popularMovies.js";
import topRatedMovies from "./modules/topRatedMovies.js";
import upcomingMovies from "./modules/upcomingMovies.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    popularMovies,
    topRatedMovies,
    upcomingMovies
  }
});
