const state = {
  upcoming: [],
  currentPage: 1,
  totalResults: 0,
  totalPages: 0,
  isLoading: true
};

const mutations = {
  FETCH_UPCOMING(state, movies) {
    state.totalResults = movies.total_results;
    state.totalPages = movies.total_pages;

    state.upcoming = movies.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date
      };
    });
    console.log(state.upcoming);
  },
  INCREMENT_UPCOMING_CURRENT_PAGE(state) {
    state.currentPage++;
    state.isLoading = true;
  },
  DECREMENT_UPCOMING_CURRENT_PAGE(state) {
    state.currentPage--;
    state.isLoading = true;
  },
  LOADING_OFF(state) {
    state.isLoading = false;
  },
  LOADING_ON(state) {
    state.isLoading = true;
  }
};

const actions = {
  fetchUpcomingMovies({ commit }, movies) {
    commit("FETCH_UPCOMING", movies);
  },
  incrementUpcomingCurrentPage({ commit }) {
    commit("INCREMENT_UPCOMING_CURRENT_PAGE");
  },
  decrementUpcomingCurrentPage({ commit }) {
    commit("DECREMENT_UPCOMING_CURRENT_PAGE");
  },
  setUpcomingLoadingOff({ commit }) {
    commit("LOADING_OFF");
  },
  setUpcomingLoadingOn({ commit }) {
    commit("LOADING_ON");
  }
};

const getters = {
  upcoming: state => {
    return state.upcoming;
  },
  upcomingCurrentPage: state => {
    return state.currentPage;
  },
  upcomingTotalPages: state => {
    return state.totalPages;
  },
  upcomingIsLoading: state => {
    return state.isLoading;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
