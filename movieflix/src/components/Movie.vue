<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-6 col-lg-6">
        <img
          :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
          class="movie-img rounded"
          alt="#"
        />
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6">
        <h1>{{movie.title}}</h1>
        <h3>{{ movie.tagline}}</h3>
        <hr />
        <br>
        <h5>LANGUAGES</h5>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li
              v-for="language in movie.spoken_languages"
              v-bind:key="language.name"
              class="breadcrumb-item active"
              aria-current="page"
            >{{language.name}}</li>
          </ol>
        </nav>
        <hr />
        <br />
        <h5>GENRES</h5>
        <br />
        <ul class="list-group list-group-horizontal-sm">
          <li
            v-for="genre in movie.genres"
            v-bind:key="genre.id"
            class="list-group-item"
          >{{genre.name}}</li>
        </ul>
        <br />
        <br />
        <h5>THE SYNOPSIS</h5>
        <br />
        <p>{{movie.overview}}</p>
        <hr>
        <br>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div align="center">
      <h5>CAST</h5>
      <hr>
      <br>
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
        <carousel-3d :disable3d="true" :space="365" :clickable="false" :controls-visible="true" :height="520" :width="320">
          <slide v-for="(actor, index) in cast" :key="actor.cast_id" :index="index" >
            <div class="cast card rounded" style="width: 20rem;">
              <img :src="actor.profile_path == null ? 'https://drogariaguarulhos.com.br/media/catalog/product/placeholder/default/notfound.png': 'https://image.tmdb.org/t/p/h632' + actor.profile_path" alt="#" class="card-img-top rounded" style="height:450px;"/>
              <div class="card-body">
                <p class="card-text"><center>{{ actor.name }}</center></p>
              </div>
            </div>
          </slide>
        </carousel-3d>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import tmdbService from "../services/tmdbService.js";

export default {
  components: {
    Carousel3d, Slide
  },
  created() {
    tmdbService.fetchMovieDetails(this.movie_id, this.$store);
    tmdbService.fetchMovieCredits(this.movie_id, this.$store);
  },
  computed: {
    movie_id() {
      return this.$route.params.id;
    },
    movie() {
      return this.$store.getters.movie;
    },
    cast() {
      return this.$store.getters.cast;
    },
    isLoading(){
      return this.$store.getters.castIsLoading;
    }
  }
};
</script>

<style scoped>
.cast {
  padding: 5px;
  width: 100%;
  box-shadow: 5px 5px 20px white;
}

.row {
  margin-top: 50px;
}
.movie-img {
  margin: 10px;
  padding: 5px;
  width: 450px;
  height:720px;
  box-shadow: 5px 5px 20px white;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>