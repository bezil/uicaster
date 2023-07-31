import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from './firebase'
import store from "./store";

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')
