import Popular from "../components/Popular.vue";
import TopRated from "../components/TopRated.vue";
import Upcoming from "../components/Upcoming.vue";
import Movie from "../components/Movie.vue";

export const routes = [
  { path: "/", component: Popular },
  { path: "/popular", component: Popular },
  { path: "/top_rated", component: TopRated },
  { path: "/upcoming", component: Upcoming },
  { path: "/movie/:id", component: Movie }
];
