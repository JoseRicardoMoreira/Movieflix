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
      <div v-if="populars.length > 0">
        <div class="row">
          <app-simple-movie
            v-for="movie in populars"
            v-bind:key="movie.id"
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
                class="btn-margin btn btn-danger rounded-pill"
                @click="fetchPopularsNextPage"
              >
                Page&nbsp;
                <strong>2</strong>
              </button>
            </div>
            <div v-else>
              <button
                type="button"
                class="btn-margin btn btn-danger rounded-pill"
                @click="fetchPopularsPreviousPage"
              >
                Page&nbsp;
                <strong>{{ popularCurrentPage-1 }}</strong>
              </button>
              <button
                type="button"
                class="btn-margin btn btn-danger rounded-pill"
                @click="fetchPopularsNextPage"
              >
                Page&nbsp;
                <strong>{{ popularCurrentPage+1 }}</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="centered">
        <h3>Oops! Apparently there are no movies...</h3>
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
    tmdbService.fetchPopularMovies(this.popularCurrentPage, this.$store);
  },
  methods: {
    fetchPopularsNextPage() {
      this.$store.dispatch("incrementPopularCurrentPage");

      tmdbService.fetchPopularMovies(this.popularCurrentPage, this.$store);
    },
    fetchPopularsPreviousPage() {
      this.$store.dispatch("decrementPopularCurrentPage");

      tmdbService.fetchPopularMovies(this.popularCurrentPage, this.$store);
    }
  },
  computed: {
    populars() {
      return this.$store.getters.populars;
    },
    popularCurrentPage() {
      return this.$store.getters.popularCurrentPage;
    },
    popularTotalPages() {
      return this.$store.getters.popularTotalPages;
    },
    isLoading() {
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

.btn:hover {
  background-color: white;
  color: black;
  border-color: red;
}
</style>
