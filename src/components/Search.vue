<template>
  <div class="search-page">
    <input
      v-model="hashtag"
      class="searchbar"
      placeholder="Enter surf spot name"
    />
    <div class="row my-3 justify-content-center">
      <button class="btn btn-info search-button" @click.prevent="search()">
        Search
      </button>
    </div>

    <!-- <iframe src="data:image/jpeg;base64,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"></iframe> -->
    <!-- <iframe src="https://instagram.frak2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c114.0.684.684a/s640x640/245980716_578979036679141_1324421113631639063_n.jpg?_nc_ht=instagram.frak2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=LfEgz6aipscAX8RLfdo&edm=ABZsPhsBAAAA&ccb=7-4&oh=d5849b92d9a4ae594fdff0d7cda496e8&oe=61A589F5&_nc_sid=4efc9f"></iframe> -->
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
console.log('dummyposts: ' + JSON.stringify(DUMMY_POSTS));
// import firebase from "../firebaseConfig.js";
// const db = firebase.firestore();
export default {
  name: "Search",
  components: { RotatingImage, SearchResults},
  data() {
    return {
      contentLoaded: true,
      hashtaggedPosts: {},
      hashtag: null,
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    // this.firebaseCall();
    // this.getVideo();
    // this.getHashtaggedPosts();
  },

  methods: {
    search() {
      this.contentLoaded = false;
      this.hashtag = this.hashtag.split(" ").join("").toLowerCase();
      // let splitHashtag = this.hashtag.split(" ");
      // console.log("this.hashtag after split: " + splitHashtag);
      // let joinHashtag = splitHashtag.join("");
      // console.log("this.hashtag after join: " + joinHashtag);
      // this.hashtag = joinHashtag.toLowerCase();
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
          this.contentLoaded = true;
        });
    },
    getDateTime(unixTimestampMillis) {
      // var date = new Date(unixTimestampMillis * 1000);
      var date = new Date(unixTimestampMillis);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      var formattedTime =
        hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

      return formattedTime;
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
.search-button {
  width: 5rem;
  background: black;
  color: white;
}
.searchbar {
  width: 13rem;
  border-radius: 0.25rem;
  outline: none;
  box-shadow: none;
}
.search-page {
  height: 100%;
  overflow-y: scroll;
}
</style>
