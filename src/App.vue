<template>
  <div id="app">
    <nav class="navbar navbar-nav navbar-center">
      <div class="d-flex align-items-center justify-content-center">
        <img
          class="surfboard-image mx-3"
          alt="surfboard"
          src="@/assets/surfboard.png"
        />
        <div class="align-bottom">WAVE MECCA</div>
        <div>
          <img
            class="surfboard-image mx-3"
            alt="surfboard"
            src="@/assets/surfboard.png"
          />
        </div>
      </div>
    </nav>
    <div class="card">
      <div class="card-body">
        <Search />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Search,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.card-body {
  background: url("./assets/horizon.jpg");
  height: 90vh;
  background-size: 1920px 1280px;
  background-repeat: repeat-y;
}
.surfboard-image {
  height: 40px;
  transform: rotate(90deg);
}
.navbar-nav.navbar-center {
    position: relative;
    left: 50%;
    transform: translatex(-50%);
    background: black;
    color: white;
}
</style>
