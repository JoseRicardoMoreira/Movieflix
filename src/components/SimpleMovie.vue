<template>
  <div class="col-md-2" align="center">
    <div class="movie card" style="width: 15rem;">
      <img
        :src="'http://image.tmdb.org/t/p/w185_and_h278_bestv2/' + poster_path"
        class="card-img-top"
        alt="#"
      />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ release_date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "poster_path", "release_date"]
};
</script>

<style scoped>
.movie {
  margin: 10px;
  padding: 5px;
  transition: transform 0.2s;
}

.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card:hover {
  transform: scale(1.15);
  z-index: 10;
  background-color: crimson;
  color: white;
}
</style>
