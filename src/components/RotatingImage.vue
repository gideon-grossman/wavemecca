<template>
  <div>
    <img
      class="rotate logo"
      :src="getImgUrl"
      alt="surfer logo"
    />
  </div>
</template>

<script>
export default {
  name: "RotatingImage",
  props: {
    filename: String,
  },
  computed: {
    getImgUrl() {
      return require(`@/assets/${this.filename}`);
    },
  },
};
</script>

<style scoped>
.rotate {
  animation: rotation 4s infinite linear;
  /* transition: transform 0.5s ease-in; */
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.logo {
  width: 6rem;
}
</style>
