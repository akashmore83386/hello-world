import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// we import the vue router from our router/index.js file
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter);
new Vue({
   // we tell our vue instance to use this vue router
  render: h => h(App),
  router,
}).$mount('#app')




