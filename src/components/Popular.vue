<template>
  <div>
    <br />
    <h3 align="center">Popular movies</h3>
    <hr />
    <div class="row">
      <app-simple-movie
        v-for="movie in populars"
        v-bind:key="movie.id"
        :title="movie.title"
        :poster_path="movie.poster_path"
        :release_date="movie.release_date"
      ></app-simple-movie>
    </div>
  </div>
</template>

<script>
import SimpleMovie from "./SimpleMovie.vue";
import tmdbService from "../services/tmdbService.js";

export default {
  components: {
    appSimpleMovie: SimpleMovie
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
    }
  }
};
</script>
