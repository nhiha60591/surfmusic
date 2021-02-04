require('dotenv').config()
import Vue from 'vue'
import App from './App.vue'
import './styles/app.css'
import store from './store'
import router from './routes'

import './plugins'
import './thirdParty'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
