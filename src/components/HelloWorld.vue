<template>
  <div>
    <input v-model="hashtag" placeholder="Enter surf spot name" />
    <button @click.prevent="search()">Search</button>
    <br />

    <div v-if="videoReady">
      <video width="320" height="240" controls autoplay>
        <source :src="videoUrl" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div v-if="contentLoaded">
      <div v-for="edge in hashtaggedPosts" :key="edge.display_url">
        <div
          v-if="
            taggedWithSurfingKeywords(edge.node.edge_media_to_caption.edges)
          "
        >
          <img width="300px" :src="edge.node.display_url" />
          <div
            v-for="textedge in edge.node.edge_media_to_caption.edges"
            :key="textedge.node.text"
          >
            <p>{{ textedge.node.text }}</p>
          </div>
          <!-- <p>{{ edge.node.taken_at_timestamp }}</p> -->
          <!-- <p>{{ getDateTime(edge.node.taken_at_timestamp) }}</p> -->
          <p>
            <b>{{ new Date(edge.node.taken_at_timestamp * 1000) }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import firebase from "../firebaseConfig.js";
// const db = firebase.firestore();
export default {
  name: "HelloWorld",
  data() {
    return {
      videoUrl: {},
      videoReady: false,
      contentLoaded: false,
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
      console.log("this.hashtag: " + this.hashtag);
      this.getHashtaggedPosts();
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
          this.contentLoaded = true;
        });
    },
    getVideo() {
      this.videoReady = false;
      console.log("getting video");
      axios.get("http://localhost:8080/api/content/3").then(
        (response) => {
          console.log("response: " + JSON.stringify(response.data.videoUrl));
          this.videoUrl = response.data.videoUrl;
          this.videoReady = true;
        },
        (error) => {
          console.log("error: " + error);
        }
      );
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
    taggedWithSurfingKeywords(textedges) {
      var surfingKeywords = ["surf", "ocean", "kite", "board"];

      for (var i = 0; i < textedges.length; i++) {
        // if (textedges[i].node.text.includes("surf")) {
        if (surfingKeywords.some((el) => textedges[i].node.text.includes(el))) {
          return true;
        }
      }
      return false;
    },
    // callFirebaseFunction() {
    //   exports.date = functions.https.onRequest((req, res) => {
    //     // ...
    //   });
    // },
    // firebaseCall() {
    //   {
    //     this.callFirebaseFunction();
    //     let id = "uv6DSV63dcSeFEFFp1Nb";
    //     let name = "Hello world";
    //     let date = new Date();
    //     db.collection("employees")
    //       .doc(id)
    //       .update({
    //         name: name,
    //         date: date,
    //       })
    //       .then(() => {
    //         console.log("Document successfully updated!");
    //       })
    //       .catch((error) => {
    //         console.error("Error updating document: ", error);
    //       });
    //   }
    // },
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
</style>
