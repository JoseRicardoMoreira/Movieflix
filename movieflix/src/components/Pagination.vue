<template>
    <div align="center">
        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <div v-if="popularCurrentPage === 1">
            <button type="button" class="btn-margin btn btn-danger rounded-pill" @click="fetchPopularsNextPage">Page&nbsp;<strong>2</strong></button>
            </div>
            <div v-else>
            <button type="button" class="btn-margin btn btn-danger rounded-pill" @click="fetchPopularsPreviousPage">Page&nbsp;<strong>{{ popularCurrentPage-1 }}</strong></button>
            <button type="button" class="btn-margin btn btn-danger rounded-pill" @click="fetchPopularsNextPage">Page&nbsp;<strong>{{ popularCurrentPage+1 }}</strong></button>
            </div>
        </div>
    </div>
</template>
    
<script>
import tmdbService from "../services/tmdbService.js";

export default {
    methods: {
        fetchPopularsNextPage(){
            this.$store.dispatch('incrementCurrentPage');

            tmdbService.fetchPopularMovies(
                    this.$store.getters.popularCurrentPage,
                    this.$store
                );
        },
        fetchPopularsPreviousPage(){
            this.$store.dispatch('decrementCurrentPage');

            tmdbService.fetchPopularMovies(
                    this.$store.getters.popularCurrentPage,
                    this.$store
                );
        }
    },
    computed: {
        popularCurrentPage(){
            return this.$store.getters.popularCurrentPage;
        },
        popularTotalPages(){
            return this.$store.getters.popularTotalPages;
        },
    }
}
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