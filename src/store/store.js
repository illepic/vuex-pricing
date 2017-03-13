import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

import Location from './modules/Location'
import Products from './modules/Products'

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
