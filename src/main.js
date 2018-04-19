// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import VueI18n from 'vue-i18n'
import {messages} from './i18n'

import './firebase';

import App from './App'

//Import css
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.use(VueI18n)
Vue.use(VueFire)

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})


