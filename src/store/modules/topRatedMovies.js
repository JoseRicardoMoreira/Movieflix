const state = {
  topRated: [],
  currentPage: 1
};

const mutations = {
  FETCH_TOP_RATED(state, movies) {
    state.topRated = movies.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date
      };
    });
    console.log(state.topRated);
  }
};

const actions = {
  fetchTopRatedMovies({ commit }, movies) {
    commit("FETCH_TOP_RATED", movies);
  }
};

const getters = {
  topRated: state => {
    return state.topRated;
  },
  topRatedCurrentPage: state => {
    return state.currentPage;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
