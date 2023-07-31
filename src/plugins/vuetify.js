import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#1F282B',
        secondary: '#FF9E46',
        accent: '#3FC1BF',
      },
    },
  },
});
