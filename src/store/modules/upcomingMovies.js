const state = {
  upcoming: [],
  currentPage: 1
};

const mutations = {
  FETCH_UPCOMING(state, movies) {
    state.upcoming = movies.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date
      };
    });
    console.log(state.upcoming);
  }
};

const actions = {
  fetchUpcomingMovies({ commit }, movies) {
    commit("FETCH_UPCOMING", movies);
  }
};

const getters = {
  upcoming: state => {
    return state.upcoming;
  },
  upcomingCurrentPage: state => {
    return state.currentPage;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
