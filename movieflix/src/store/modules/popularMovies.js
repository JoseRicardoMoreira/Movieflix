const state = {
  populars: [],
  currentPage: 1,
  totalResults: 0,
  totalPages: 0,
  isLoading: true
};

const mutations = {
  FETCH_POPULAR(state, movies) {
    state.totalResults = movies.total_results;
    state.totalPages = movies.total_pages;

    state.populars = movies.results.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date
      };
    });
    console.log(state.populars);
  },
  INCREMENT_CURRENT_PAGE(state){
    state.currentPage++;
    state.isLoading = true;
  },
  DECREMENT_CURRENT_PAGE(state){
    state.currentPage--;
    state.isLoading = true;
  },
  LOADING_OFF(state){
    state.isLoading = false;
  }
};

const actions = {
  fetchPopularMovies({ commit }, movies) {
    commit("FETCH_POPULAR", movies);
  },
  incrementCurrentPage({ commit }){
    commit('INCREMENT_CURRENT_PAGE');
  },
  decrementCurrentPage({ commit }){
    commit('DECREMENT_CURRENT_PAGE');
  },
  setPopularLoadingOff({commit}){
    commit('LOADING_OFF');
  }
};

const getters = {
  populars: state => {
    return state.populars;
  },
  popularCurrentPage: state => {
    return state.currentPage;
  },
  popularTotalPages: state => {
    return state.totalPages;
  },
  isLoading: state => {
    return state.isLoading;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
