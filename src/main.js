import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from '@/store';


Vue.config.productionTip = false;

Vue.use(Vuex);

const InstanceVuex = new Vuex.Store(store);

new Vue({
  el: '#app',
  store: InstanceVuex,
  vuetify,
  render: h => h(App)
});
