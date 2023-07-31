<template>
  <v-app>
    <AppBar v-if="showBar"></AppBar>

    <v-main v-if="this.$store.state.postsloaded">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
    Footer: () => import("@/components/layout/footer.vue"),
  },
  created() {
    this.checkroute();
    console.log(this.$route.name)
    this.$store.dispatch("fetchPosts")
  },
  data(){
    return{
      showBar : true
    }
  },
  methods: {
    checkroute() {
     if(this.$route.name === "Admin"){
       this.showBar = false

       return;
     }
    }
  },
  watch: {
    $route(){

     this.checkroute();
    }
  }
};
</script>
<style lang="scss">
body{
-webkit-font-smoothing: subpixel-antialiased !important;
}
</style>
