import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import $ from 'jquery'
import { set as wwSet } from './utils/WW'

// Pretend
import mockProducts from './mocks/MockProducts'
import wwSettings from './mocks/MockWW'

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  methods: {
    init(wwSettings, products) {
      wwSet(wwSettings);
      this.$store.dispatch('addProducts', products)
    }
  }
})

$(function() {
  console.log('docready');
  app.init(wwSettings, mockProducts);
});
