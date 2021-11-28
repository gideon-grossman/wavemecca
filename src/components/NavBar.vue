<template>
  <div>
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
      <button
        class="btn btn-info about-button wm-button"
        @click.prevent="showAbout()"
      >
        About
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
      showAbout() {
          console.log('showing about');
          this.$emit('show-about');
      }
  }
};
</script>

<style>
.surfboard-image {
  height: 2rem;
  transform: rotate(90deg);
}
.navbar-nav.navbar-center {
  position: relative;
  left: 50%;
  transform: translatex(-50%);
  background: black;
  color: white;
}
.about-button {
  margin-left: 85%;
  height: 70%;
  position: absolute;
  vertical-align: middle;
  color: white;
}
</style>
