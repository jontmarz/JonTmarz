import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '00000F', // Dark blue,
        secondary: '#CCA70A', // gold,
        accent: '#2A002B', // purple
        info: '#C0C0C0', // silver
        warning: '#00AAF', // light blue
        error: '#a63034', // red
      },
    },
  },
})
