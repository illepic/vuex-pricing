import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import $ from 'jquery'
import ww from 'ww'

// Pretend
import mockProducts from './mocks/MockProducts'

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  methods: {
    init(products) {
      this.$store.dispatch('addProducts', products)
    }
  }
})

$(function() {
  console.log('docready');
  // Assume ww.settings available global
  app.init(mockProducts);
});
