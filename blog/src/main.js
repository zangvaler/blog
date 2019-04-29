// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueScroller from 'vue-scroller'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueScroller )
Vue.config.productionTip = false
Vue.prototype.$http = Axios
// Vue.use(Vuex);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
