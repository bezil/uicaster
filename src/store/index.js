import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    posts: [],
    postsloaded:null
  },
  getters : {
    latest(state){
      let lat = state.posts
      return lat.slice(0,6)
    },
    full(state){
      return state.posts
    },
    getgames(state){
      return state.posts.filter(post => post.category === 'Games')
    },
    getweb(state){
      return state.posts.filter(post => post.category === 'Web')
    },
    getapps(state){
      return state.posts.filter(post => post.category === 'Apps')
    },
    getmixed(state){
      return state.posts.filter(post => post.category === 'Mixed')
    },

  },
  mutations: {
    setPosts(state, val) {
      state.posts = val;
      state.postsloaded = true;

    },

  },
  actions: {
    fetchPosts({commit}) {
      db.collection('posts').get().then((querySnapshot) => {
          if (querySnapshot.empty) {
              //this.$router.push('/HelloWorld')
              console.log('empty')
          } else {

              var posts = []
              querySnapshot.forEach(doc => {

                  posts.push(doc.data());


              });

              commit("setPosts", posts);


          }
      })

      }
  },
  modules: {
  }
})
