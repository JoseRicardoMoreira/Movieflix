const state = {
  topRated: [],
  currentPage: 1,
  totalResults: 0,
  totalPages: 0,
  isLoading: true
};

const mutations = {
  FETCH_TOP_RATED(state, movies) {
    state.totalResults = movies.total_results;
    state.totalPages = movies.total_pages;

    state.topRated = movies.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date
      };
    });
    console.log(state.topRated);
  },
  INCREMENT_TOP_RATED_CURRENT_PAGE(state) {
    state.currentPage++;
    state.isLoading = true;
  },
  DECREMENT_TOP_RATED_CURRENT_PAGE(state) {
    state.currentPage--;
    state.isLoading = true;
  },
  LOADING_OFF(state) {
    state.isLoading = false;
  }
};

const actions = {
  fetchTopRatedMovies({ commit }, movies) {
    commit("FETCH_TOP_RATED", movies);
  },
  incrementTopRatedCurrentPage({ commit }) {
    commit("INCREMENT_TOP_RATED_CURRENT_PAGE");
  },
  decrementTopRatedCurrentPage({ commit }) {
    commit("DECREMENT_TOP_RATED_CURRENT_PAGE");
  },
  setTopRatedLoadingOff({ commit }) {
    commit("LOADING_OFF");
  }
};

const getters = {
  topRated: state => {
    return state.topRated;
  },
  topRatedCurrentPage: state => {
    return state.currentPage;
  },
  topRatedTotalPages: state => {
    return state.totalPages;
  },
  topRatedIsLoading: state => {
    return state.isLoading;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
