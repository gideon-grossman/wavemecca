<template>
  <div>
    <div v-for="edge in searchResults" :key="edge.display_url"
>
      <div
        v-if="taggedWithSurfingKeywords(edge.node.edge_media_to_caption.edges)"
      >
        <img
         @mouseover="displayCaptions(edge)"
          width="300px"
          :src="getImageSrc(edge.imageBase64)"
          :alt="getImageSrc(edge.imageBase64)"
        />
        <p>
          <b>{{formatDate(edge.node.taken_at_timestamp)}}</b>
        </p>
        <div
          v-for="textedge in edge.node.edge_media_to_caption.edges"
          :key="textedge.node.text"
        >
          <div class="captions"><p>{{ textedge.node.text }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  data() {
    return {};
  },
  props: ["searchResults"],
  methods: {
    taggedWithSurfingKeywords(textedges) {
      var surfingKeywords = ["tamraght", "surf", "ocean", "kite", "board"];

      for (var i = 0; i < textedges.length; i++) {
        // if (textedges[i].node.text.includes("surf")) {
        if (surfingKeywords.some((el) => textedges[i].node.text.includes(el))) {
          return true;
        }
      }
      return false;
    },
    formatDate(milliseconds) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateTime = new Date(milliseconds * 1000);
      const time = dateTime.toLocaleTimeString(undefined, options);
      return time;

    },
    getImageSrc(base64Image) {
      return "data:image/png;base64 " + base64Image;
    },
    displayCaptions(edge) {
        console.log(Object.keys(edge.node));
        // this.showToolTip();
    }
  },
};
</script>

<style scoped>
.captions {
  margin: auto;
  width: 50%;
  padding: 10px 0px;
}
</style>