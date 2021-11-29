<template>
  <div class="search-page">
    <div class="instructions my-2">Enter the name of a surf spot to find recent photographs and conditions</div>
    <input
      v-model="hashtag"
      class="searchbar"
      placeholder="Surf spot name"
    />
    <div class="row my-3 justify-content-center">
      <button class="btn btn-info wm-button" :disabled="hashtag.length==0" @click.prevent="search()">
        Search
      </button>
    </div>

    <div v-if="contentLoaded">
      <SearchResults :searchResults="hashtaggedPosts"/>
    </div>
    <div v-else-if="!contentLoaded">
      Loading...
      <RotatingImage class="m-4" filename="surfer-fun-recreation-play-svgrepo-com.svg" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RotatingImage from "./RotatingImage.vue";
import SearchResults from "./SearchResults.vue";
import { DUMMY_POSTS } from "../dummyHashtaggedPosts.js";
export default {
  name: "Search",
  components: { RotatingImage, SearchResults},
  data() {
    return {
      contentLoaded: true,
      hashtaggedPosts: {},
      hashtag: "",
    };
  },
  props: {
    msg: String,
  },

  methods: {
    search() {
      this.contentLoaded = false;
      this.hashtag = this.hashtag.split(" ").join("").toLowerCase();
      console.log("this.hashtag after to lower case: " + this.hashtag);
      this.getHashtaggedPosts();
      // this.getDummyHashtaggedPosts();
    },
    getDummyHashtaggedPosts() {
      console.log('getting dummy data');
      this.contentLoaded = false;
      this.hashtaggedPosts = DUMMY_POSTS;
      this.contentLoaded = true;
      console.log('hashtaggedPosts: ' + this.hashtaggedPosts[0]);
    },
    getHashtaggedPosts() {
      this.contentLoaded = false;
      console.log("getting hashtagged posts");
      // let hashtag = "hookipa";
      axios
        .get("http://localhost:8080/api/content/hashtag/" + this.hashtag)
        // .get("https://wave-mecca-backend.herokuapp.com/api/content/hashtag/" + this.hashtag)
        .then((response) => {
          console.log(
            "response: " + JSON.stringify(response.data.hashtaggedPosts)
          );
          this.hashtaggedPosts = response.data.hashtaggedPosts;
          console.log(
            "Object.keys(this.hashtaggedPosts[0]): " +
              Object.keys(this.hashtaggedPosts[0])
          );
          console.log(
            "this.hashtaggedPosts: " + JSON.stringify(this.hashtaggedPosts)
          );
        }).catch((error) => {
          /*TODO
          Report to the client when an error is due to Instagram API throttling
          */
          console.log('error response: ' + JSON.stringify(error));
        }).finally(() => {
                    this.contentLoaded = true;
        })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.searchbar {
  width: 13rem;
  border-radius: 0.25rem;
  outline: none;
  box-shadow: none;
  text-align: center;
}
.search-page {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.instructions {
  font-weight: bold;
}
</style>
