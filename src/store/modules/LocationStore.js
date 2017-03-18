import * as types from '../MutationTypes'

const state = {
  mode: 'pc', // pc|ml
  border: false,
  zip: {
    status: '',
    zip: '',
    request: '', // can be a 'bad' zip like 99999, and we need to indicate failure
    bad: false,
  },
  zone: {
    status: '',
    request: '',
    zone: '',
  },
  id: {
    status: '',
    id: '',
    name: '',
    slug: '',
  },
}

const mutations = {
  [types.ZIP_CHANGE_REQUEST](state, zip) {
    state.zip.status = 'REQUESTING'
    state.zip.request = zip
  },
  [types.ZIP_CHANGE_SUCCESS](state) {
    state.zip.status = 'SUCCESS'
    state.zip.zip = state.zip.request
  },
  [types.ZIP_CHANGE_FAIL](state) {
    state.zip.status = 'FAIL'
    state.zip.bad = true
  },
}

const actions = {
  changeLocation({ commit, dispatch }, { zip, id }) {
    // Zip
    if (zip) {
      dispatch('changeZip', zip)
    }
    // locationId
    else if (id) {
      dispatch('changeId', id)
    }
    // Nothing sent over, trigger zip with no arg
    else {
      dispatch('changeZip')
    }
  },
  changeZip({ commit }, zip) {
    commit(types.ZIP_CHANGE_REQUEST, zip)

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        commit(types.ZIP_CHANGE_SUCCESS)
        resolve()
      }, 1000)
    })
  },
}

const getters = {
  // Make location info available to comopnents
  location: state => state,
}


export default {
  state,
  mutations,
  actions,
  getters
}
