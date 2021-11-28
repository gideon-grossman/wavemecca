<template>
  <div class="about-section">
    <div class="cancel-button d-flex justify-content-between">
      <div><u>ABOUT WAVE MECCA</u></div>
      <button class="btn btn-info btn-sm wm-button" @click.prevent="cancelHandler()">Close</button>
    </div>
    <b>Instructions: </b>Enter the name of a surf break such as 'Pipeline' and
    click the Search button. After a few moments, the page will display the most
    recent Instagram photos that are tagged with the name of the surf spot in
    addition to keywords related to surfing such as 'wave', 'ocean' and 'surf'.
    The app will display results in reverse chronological order with the most recent
    photos first.
    <br />
    <b>Caveats: </b>The app displays some false positive results because
    businesses near a surf spot often post photos of their services tagged with the name of the surf spot and surf-related keywords. For
    example, a search for "Hookipa" may bring up photographs from a restaurant
    with the caption "Come enjoy our fresh catch of the day at Mama's Fish House
    by Hookipa while watching the waves." For best results, search for surf
    breaks that have unique names, such as "Anchor Point" or "Honolua Bay".
    <br />
    It takes 10 seconds or so to load results because it is not possible to
    fetch images directly from Instagram's API and display them in an image tag.
    Accordingly, the backend of this app must first fetch the images, convert
    the images to base64 format and then pass the output to the client.
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    cancelHandler() {
      this.$emit("close-about");
    },
  },
};
</script>

<style scoped>
.about-section {
  position: absolute;
  top: 3%;
  left: 20%;
  background-color: white;
  box-shadow: #2c3e50;
  border-radius: 5px;
  text-align: left;
  padding: 1rem;
  overflow-y: scroll;
  height: 50vh;
}
.cancel-button {
  left: 10px;
  text-align: left;
}
</style>
