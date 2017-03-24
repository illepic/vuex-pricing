import _ from 'lodash'

import * as types from '../MutationTypes'
import productWidgetState from '../../utils/ProductWidgetState';
import DurationParse from '../../utils/DurationParse'

const state = {
  collection: {}
}

const mutations = {
  [types.PRODUCTS_ADD_PRODUCT](state, { uuid, data }) {
    state.collection = { ...state.collection, [uuid]: data }
  }
}

const actions = {
  addProduct({ commit }, { uuid, pdata }) {
    // Build up what a product's state should look like at first
    const productState = {
      uuid,
      data: {
        pdata,
        widget: productWidgetState // starting widget state, might need to copy
      }
    }

    commit(types.PRODUCTS_ADD_PRODUCT, productState)
  },
  addProducts({ dispatch }, products) {
    _.forEach(products, (pdata, uuid) => {
      dispatch('addProduct', { uuid, pdata })
    })
  }
}

const getters = {

  // Get a ref to a product
  getProductByUuid: (state, getters) => (uuid) => {
    return state.collection[uuid];
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
