import Home from "../components/Home.vue";
import Popular from "../components/Popular.vue";
import TopRated from "../components/TopRated.vue";
import Upcoming from "../components/Upcoming.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/popular", component: Popular },
  { path: "/top_rated", component: TopRated },
  { path: "/upcoming", component: Upcoming }
];
