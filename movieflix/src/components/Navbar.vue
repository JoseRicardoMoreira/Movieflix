<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">Movieflix</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/popular" activeClass="active" class="nav-item"><a class="nav-link">Popular</a></router-link>
          <router-link to="/top_rated" activeClass="active" class="nav-item"><a class="nav-link">Top rated</a></router-link>
          <router-link to="/upcoming" activeClass="active" class="nav-item"><a class="nav-link">Upcoming</a></router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>
