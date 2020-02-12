<template>
  <div>
    <br />
    <h3 align="center">Popular movies</h3>
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
      <div class="row">
        <app-simple-movie
          v-for="movie in populars"
          v-bind:key="movie.id"
          :title="movie.title"
          :poster_path="movie.poster_path"
          :release_date="movie.release_date"
        ></app-simple-movie>
      </div>
      <app-pagination></app-pagination>
    </div>
  </div>
</template>

<script>
import SimpleMovie from "./SimpleMovie.vue";
import Pagination from './Pagination.vue';
import tmdbService from "../services/tmdbService.js";

export default {
  components: {
    appSimpleMovie: SimpleMovie,
    appPagination: Pagination
  },
  created() {
    tmdbService.fetchPopularMovies(
      this.$store.getters.popularCurrentPage,
      this.$store
    );
  },
  computed: {
    populars() {
      return this.$store.getters.populars;
    },
    isLoading(){
      return this.$store.getters.isLoading;
    }
  }
};
</script>
