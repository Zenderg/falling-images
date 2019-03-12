import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false
import 'vuetify/dist/vuetify.min.css'
new Vue({
  render: h => h(App),
}).$mount('#app')
