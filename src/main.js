import Vue from 'vue'
import App from './App.vue'
import {store} from "@/globals/store/store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from "vue-router";
import {router} from "./globals/router/router";
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
