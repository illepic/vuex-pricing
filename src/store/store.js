import Vue from 'vue';
import Vuex from 'vuex';

import Location from './modules/LocationStore'
import Products from './modules/ProductsStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Products,
    Location,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {}
})
