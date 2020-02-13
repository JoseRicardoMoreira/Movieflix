<template>
  <div>
    <br />
    <h3 align="center">Top rated movies</h3>
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
          v-for="movie in topRated"
          v-bind:key="movie.id"
          :title="movie.title"
          :poster_path="movie.poster_path"
          :release_date="movie.release_date"
        ></app-simple-movie>
      </div>
      <div align="center">
        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
          <div v-if="topRatedCurrentPage === 1">
            <button
              type="button"
              class="btn-margin btn btn-danger rounded-pill"
              @click="fetchTopRatedNextPage"
            >
              Page&nbsp;
              <strong>2</strong>
            </button>
          </div>
          <div v-else>
            <button
              type="button"
              class="btn-margin btn btn-danger rounded-pill"
              @click="fetchTopRatedPreviousPage"
            >
              Page&nbsp;
              <strong>{{ topRatedCurrentPage-1 }}</strong>
            </button>
            <button
              type="button"
              class="btn-margin btn btn-danger rounded-pill"
              @click="fetchTopRatedNextPage"
            >
              Page&nbsp;
              <strong>{{ topRatedCurrentPage+1 }}</strong>
            </button>
          </div>
        </div>
      </div>
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
    tmdbService.fetchTopRatedMovies(this.topRatedCurrentPage, this.$store);
  },
  methods: {
    fetchTopRatedNextPage() {
      this.$store.dispatch("incrementTopRatedCurrentPage");

      tmdbService.fetchTopRatedMovies(this.topRatedCurrentPage, this.$store);
    },
    fetchTopRatedPreviousPage() {
      this.$store.dispatch("decrementTopRatedCurrentPage");

      tmdbService.fetchTopRatedMovies(this.topRatedCurrentPage, this.$store);
    }
  },
  computed: {
    topRated() {
      return this.$store.getters.topRated;
    },
    topRatedCurrentPage() {
      return this.$store.getters.topRatedCurrentPage;
    },
    topRatedTotalPages() {
      return this.$store.getters.topRatedTotalPages;
    },
    isLoading() {
      return this.$store.getters.topRatedIsLoading;
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

.btn:hover {
  background-color: white;
  color: black;
  border-color: red;
}
</style>
