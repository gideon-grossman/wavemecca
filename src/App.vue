<template>
  <div id="app">
    <div class="card">
      <div class="card-header">
        Wave Mecca
      </div>
      <div class="card-body">
        <img alt="Vue logo" src="./assets/abstractwave.png" />
        <HelloWorld />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
  margin-top: 60px;
}
</style>
