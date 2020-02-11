const state = {
  populars: [],
  currentPage: 1
};

const mutations = {
  FETCH_POPULAR(state, movies) {
    state.populars = movies.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date
      };
    });
    console.log(state.populars);
  }
};

const actions = {
  fetchPopularMovies({ commit }, movies) {
    commit("FETCH_POPULAR", movies);
  }
};

const getters = {
  populars: state => {
    return state.populars;
  },
  popularCurrentPage: state => {
    return state.currentPage;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
