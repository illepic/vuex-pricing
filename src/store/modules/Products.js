import _ from 'lodash'

import * as types from '../MutationTypes'
import DurationParse from '../../utils/DurationParse'

const state = {
  products: {}
}

const mutations = {
  [types.PRODUCTS_ADD_PRODUCT](state, product) {
    _.assign(state.products, product)
  }
}

const actions = {
  addProduct({ commit }, drupalProduct) {
    
  }
}

const getters = {

  // Get a ref to a product
  getProductByUuid: (state, getters) => (uuid) => {
    return state.products[uuid];
  },

  // Do we need to do the extra overhead of checking for various zone things
  needsZoneCalls: ({ products }) => _(products).some(product => product.pdata.type === '2'),

  // Before making location calls, we need a cachable error check URL
  errorCheckUrl: ({ products }, { needsZoneCalls }) => {
    if (!needsZoneCalls) { return '' }

    const firstDynProduct = _.find(products, product => product.pdata.type === '1' || product.pdata.type === '2')
    const duration = DurationParse(firstDynProduct.pdata.duration)

    console.log(duration);
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
