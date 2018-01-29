import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import mapboxgl from 'mapbox-gl'
import { store } from './store/store';


Vue.use(vueResource)
Vue.use(Buefy)
Vue.use(mapboxgl)

//Vue.component('navbar', Navbar)
//require('../node_modules/bootstrap/less/bootstrap.less');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(App)
})
