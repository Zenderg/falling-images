import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import router from './router'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
