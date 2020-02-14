<template>
  <div>
    <br />
    <h3 align="center">POPULAR</h3>
    <h4 align="center">MOVIES</h4>
    <hr />
    <div v-if="isLoading" class="centered" align="center">
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div class="row" style="margin: 35px;">
          <app-simple-movie
            v-for="movie in populars"
            v-bind:key="movie.id"
            :id="movie.id"
            :title="movie.title"
            :poster_path="movie.poster_path"
            :release_date="movie.release_date"
          ></app-simple-movie>
        </div>
        <div align="center">
          <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <div v-if="popularCurrentPage === 1">
              <button
                type="button"
                class="btn-margin btn btn-danger btn-lg rounded-pill"
                @click="fetchPopularsNextPage"
              >
                Page&nbsp;
                <strong>2</strong>
              </button>
            </div>
            <div v-else>
              <button
                type="button"
                class="btn-margin btn btn-danger btn-lg rounded-pill"
                @click="fetchPopularsPreviousPage"
              >
                Page&nbsp;
                <strong>{{ popularCurrentPage-1 }}</strong>
              </button>
              <button
                type="button"
                class="btn-margin btn btn-danger btn-lg rounded-pill"
                @click="fetchPopularsNextPage"
              >
                Page&nbsp;
                <strong>{{ popularCurrentPage+1 }}</strong>
              </button>
            </div>
          </div>
        </div>
    </div>

    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-danger btn-to-top"><i class="fa fa-chevron-up"></i></button>
    </back-to-top>
  </div>
</template>

<script>
import SimpleMovie from "./SimpleMovie.vue";
import tmdbService from "../services/tmdbService.js";
import BackToTop from 'vue-backtotop';
import { mapGetters } from "vuex";

export default {
  components: {
    appSimpleMovie: SimpleMovie,
    BackToTop
  },
  created() {
    tmdbService.fetchPopularMovies(this.popularCurrentPage, this.$store);
    this.$store.dispatch('setUpcomingLoadingOn');
    this.$store.dispatch('setTopRatedLoadingOn');
    this.$store.dispatch('setCastIsLoadingOn');
  },
  methods: {
    fetchPopularsNextPage() {
      this.$store.dispatch("incrementPopularCurrentPage");

      tmdbService.fetchPopularMovies(this.popularCurrentPage, this.$store);

      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    },
    fetchPopularsPreviousPage() {
      this.$store.dispatch("decrementPopularCurrentPage");

      tmdbService.fetchPopularMovies(this.popularCurrentPage, this.$store);

      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    }
  },
  computed: {
    ...mapGetters([
      'populars',
      'popularCurrentPage',
      'popularTotalPages'
    ]),
    isLoading(){
      return this.$store.getters.popularIsLoading;
    }
  }
};
</script>

<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

.btn-margin {
  margin: 10px;
}

.btn-to-top {
  height: 70px;
  width: 70px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>
