<template>
  <div align="center">
    <div class="movie card rounded" style="width: 24rem;">
      <img
        :src="'http://image.tmdb.org/t/p/w500/' + poster_path"
        class="card-img-top rounded"
        alt="#"
      />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ release_date }}</p>
        <router-link :to="'/movie/' + id" tag="button" class="btn btn-danger btn-lg">DETAILS</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "poster_path", "release_date"]
};
</script>

<style scoped>
.movie {
  margin: 10px;
  padding: 5px;
  transition: transform 0.2s;
  box-shadow: 5px 5px 20px white;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card:hover {
  transform: scale(1.12);
  z-index: 10;
}
</style>
