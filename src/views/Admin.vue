  <template>
  <div>
    <v-row class="pt-8" align="center" justify="space-around">
      <v-btn v-if="!loggedin" tile color="error" @click="login()">
        <v-icon left> mdi-google </v-icon>
        Google Login
      </v-btn>
      <v-btn v-if="loggedin" tile color="primary" @click="logout()">
        <v-icon left> mdi-logout </v-icon>
        Logout
      </v-btn>
    </v-row>
    <div v-if="loggedin" class="pt-8">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Title"
            v-model="post.title"
            placeholder="Title Here"
            outlined
          ></v-text-field>
          <v-textarea
            outlined
            height="120px"
            v-model="post.description"
            name="input-7-4"
            label="Description"
            value="Description comes here"
          ></v-textarea>
          <v-textarea
            outlined
            v-model="post.iframe"
            name="input-7-4"
            label="Video Iframe"
            value="Iframe code here"
          ></v-textarea>
          <v-combobox
            v-model="post.tags"
            chips
            :items="commontags"
            clearable
            label="Tags here"
            multiple
            outlined
          >
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip
                v-bind="attrs"
                :input-value="selected"
                close
                @click="select"
                @click:close="remove(item)"
              >
                <strong>{{ item }}</strong>
              </v-chip>
            </template>
          </v-combobox>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Meta"
            v-model="post.meta"
            placeholder="Meta Here"
            outlined
          ></v-text-field>
          <v-select
            :items="items"
            placeholder="Select Category before Upload"
            label="Category"
            outlined
            v-model="post.category"
          >
          </v-select>
          <v-text-field
            label="Primary Tag"
            v-model="post.ptag"
            placeholder="Primary Tag here"
            outlined
          ></v-text-field>

          <v-text-field
            label="Resources Link"
            v-model="post.link"
            placeholder="Link here"
            outlined
          ></v-text-field>
          <v-file-input
            outlined
            counter
            @change="coverupload"
            label="Cover"
            show-size
            accept=".png, .jpg, .jpeg"
            truncate-length="15"
          ></v-file-input>
          <v-file-input
            counter
            outlined
            label="Screenshot"
            @change="ssupload"
            show-size
            accept=".png, .jpg, .jpeg"
            truncate-length="15"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row class="py-4 mb-4" align="center" justify="space-around">
        <v-btn tile color="success" @click="uploadData">
          <v-icon left> mdi-upload </v-icon>
          Submit
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase";

export default {
  name: "Admin",
  data() {
    return {
      loggedin: null,
      items: ["Games", "Web", "Apps", "Mixed"],
      commontags: [
        "Games",
        "Web",
        "Apps",
        "AR&VR",
        "devbez",
        "Unity",
        "Armory",
      ],
      post: {
        id:"",
        date:"",
        title: "",
        description: "",
        iframe: "",
        category: "",
        meta: "",
        ptag: "",
        tags: [],
        link: "",
        image: "",
        ss: [],
      },
    };
  },
  computed: {},
  methods: {
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;
          console.log(token); // Token
          // User that was authenticated
          if (user.uid === "EhgiLPYUtpVyvbXanAJXNJIzT1L2") {
            this.loggedin = true;
          } else {
            this.logout();
            alert("You dont have permission to access this feature");
          }
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.loggedin = false;
          alert("Successfully signed out.");
        });
        this.$router.push({name: 'Home'});
    },
    async uploadData() {
      const timestamp = firebase.firestore.Timestamp.fromDate(new Date())
      // Add a new document with a generated id.
      const newDoc = db.collection('posts').doc()
      const newDocRef = await newDoc.get()
      this.post.id = newDocRef.id
      this.post.date = timestamp
      console.log(timestamp)
      await db.collection('posts').doc(newDocRef.id).set(this.post)
      this.reset();
    //  this.loggedin = false;

    //  this.$router.push({name: 'Home'});
    },
    //clear form
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    coverupload(e) {
      let coverfile = e;
      var storageRef = firebase
        .storage()
        .ref("" + this.post.category + "/" + coverfile.name);
      let uploadTask = storageRef.put(coverfile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          console.log(snapshot);
        },
        () => {
          // Handle unsuccessful uploads
          console.log("error");
        },
        () => {
          console.log("done");

          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            this.post.image = downloadURL;
          });
        }
      );
    },
    ssupload(e) {
      if (e) {
        let ssfile = e;
        var storageRef = firebase
          .storage()
          .ref("" + this.post.category + "/screenshots/" + ssfile.name);
        let uploadTask = storageRef.put(ssfile);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            console.log(snapshot);
          },
          () => {
            // Handle unsuccessful uploads
            console.log("error");
          },
          () => {
            console.log("done");

            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log("File available at", downloadURL);

              this.post.ss.push(downloadURL);
            });
          }
        );
      }
    },
  },
};
</script>
