import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueAWN from "vue-awesome-notifications"
import AWN from "awesome-notifications"

Vue.config.productionTip = false

let notifier = new AWN(awnOptions) // where options is an object with your custom values

export default {
  notifier,
  store
}


const awnOptions = {
  position: 'up'
}

new Vue({
  AWN,
  VueAWN,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

