// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import store from './vuex/store'

import 'vuetify/dist/vuetify.min.css'
import './stylus/main.styl'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    "primary": "#F44336",  /* #F44336, #FE3B2C */
    "secondary": "#000000",
    "accent": "#82B1FF",
    "error": "#FF5252",
    "info": "#2196F3",
    "success": "#4CAF50",
    "warning": "#FB8C00"
  }
})
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


