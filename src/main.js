import Vue from 'vue'
import './plugins/base'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import VuePageTransition from 'vue-page-transition'
/* import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css' */

Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  /* created () {
    AOS.init()
  }, */
  vuetify,
  render: h => h(App),
}).$mount('#app')
