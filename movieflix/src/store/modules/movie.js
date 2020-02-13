const state = {
  movie: {},
  cast: []
};

const mutations = {
  SET_MOVIE(state, movie) {
    state.movie = movie;
  },
  SET_CAST(state, cast) {
    state.cast = cast;
    console.log(state.cast);
  }
};

const actions = {
  setMovie({ commit }, movie) {
    commit("SET_MOVIE", movie);
  },
  setCast({ commit }, cast) {
    commit("SET_CAST", cast);
  }
};

const getters = {
  movie: state => {
    return state.movie;
  },
  cast: state => {
    return state.cast;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
