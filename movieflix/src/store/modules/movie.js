const state = {
  movie: {},
  cast: [],
  isLoading: true
};

const mutations = {
  SET_MOVIE(state, movie) {
    state.movie = movie;
  },
  SET_CAST(state, cast) {
    state.cast = cast;
    console.log(state.cast);
  },
  SET_IS_LOADING_OFF(state){
    state.isLoading = false;
  },
  SET_IS_LOADING_ON(state){
    state.isLoading = true;
  }
};

const actions = {
  setMovie({ commit }, movie) {
    commit("SET_MOVIE", movie);
  },
  setCast({ commit }, cast) {
    commit("SET_CAST", cast);
  },
  setCastIsLoadingOff({commit}){
    commit("SET_IS_LOADING_OFF")
  },
  setCastIsLoadingOn({commit}){
    commit("SET_IS_LOADING_ON")
  }
};

const getters = {
  movie: state => {
    return state.movie;
  },
  cast: state => {
    return state.cast;
  },
  castIsLoading: state => {
    return state.isLoading;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
