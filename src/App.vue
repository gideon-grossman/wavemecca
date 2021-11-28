<template>
  <div id="app">
    <NavBar @show-about="showAbout=true"/>
    <div class="card">
      <div class="card-body">
        <Search />
      </div>
      <About class="about-section" @close-about="showAbout=false" v-show="showAbout"/>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import NavBar from "./components/NavBar.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Search,
    NavBar,
    About
  },
  data() {
    return {
      showAbout: false
    }
  }
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
  height: 93vh;
  background-size: 1920px 1280px;
  background-repeat: repeat-y;
}
.card {
  position: relative;
}
.about-section {
  position: absolute;
  top: 3%;
  right: 3%;
  background-color: white;
  box-shadow: #2c3e50;
  border-radius: 5px;
}
</style>
