import Vue from 'vue'
import App from './App.vue'
import InstantSearch from 'vue-instantsearch';
import router from './router'
import store from './store'
import VueSocialSharing from 'vue-social-sharing'
import VueMeta from 'vue-meta'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Vuetify from 'vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(InstantSearch);
Vue.use(VueSocialSharing);
Vue.use(VueMeta)
Vue.use(Vuetify)


Vue.config.productionTip = false

const opts = {}

export default new Vuetify(opts)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


