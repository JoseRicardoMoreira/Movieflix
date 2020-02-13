<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-6 col-lg-6">
        <img
          :src="'http://image.tmdb.org/t/p/w185_and_h278_bestv2/' + movie.poster_path"
          class="movie-img rounded"
          alt="#"
        />
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6">
        <h1>{{movie.title}}</h1>
        <h3>{{ movie.tagline}}</h3>
        <hr />
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
        <br />
        <hr />
        <br />
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div
              v-for="(actor, index) in cast"
              v-bind:key="actor.cast_id"
              :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
              align="center"
            >
              <img
                :src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + actor.profile_path"
                class="d-block w-100 circle"
                alt="#"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tmdbService from "../services/tmdbService.js";

export default {
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
    }
  }
};
</script>

<style scoped>
.carousel-inner {
  width: 75px;
  height: 200px;
}

.row {
  margin-top: 50px;
}
.movie-img {
  margin: 10px;
  padding: 5px;
  width: 300px;
  height: 420px;
  box-shadow: 5px 5px 20px white;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>