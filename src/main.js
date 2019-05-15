// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store';
import * as VueGoogleMaps from "vue2-google-maps";
import BootstrapVue from 'bootstrap-vue';

const googleApiKey = process.env.GOOGLE_API_KEY;

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: googleApiKey,
  }
});
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
