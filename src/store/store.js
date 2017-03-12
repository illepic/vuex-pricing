import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: '',
    location: {
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
      }
    },
    products: {
      onlineplus: {
        pdata: {
          "default_price": "3.07",
          "pricing_text": "[price:token]/week nondyn",
          "product_id": null,
          "promo_offer_id": null,
          "type": "0",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Change Zip.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue withe OnlinePlus",
          "sign_up_link_show": true,
          "isMobile": true
        }
      },
      meetings: {
        pdata: {
          "default_price": "666",
          "pricing_text": "[price:token]/week dyn",
          "product_id": "2",
          "promo_offer_id": null,

          "type": "1",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with Meetings",
          "sign_up_link_show": true,
          "isMobile": true
        }
      },
      coaching: {
        pdata: {
          "default_price": "666",
          "pricing_text": "[price:token]/week promo",
          "product_id": "6",
          "promo_offer_id": "11",
          "type": "2",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with Coaching",
          "sign_up_link_show": true,
          "isMobile": true
        }
      }
    }
  },
  mutations: {
    ZIP_CHANGE_REQUEST(state, zip) {
      state.location.zip.status = 'REQUESTING'
      state.location.zip.request = zip
    },
    ZIP_CHANGE_SUCCESS(state) {
      state.location.zip.status = 'SUCCESS'
      state.location.zip.zip = state.location.zip.request
    },
    ZIP_CHANGE_FAIL(state) {
      state.location.zip.status = 'FAIL'
      state.location.zip.bad = true
    },





    GET_TODO(state, todo) {
      state.newTodo = todo
    },
    ADD_TODO(state) {
      state.todos.push({
        body: state.newTodo,
        completed: false
      })
    },
    EDIT_TODO(state, todo) {
      const todos = state.todos
      todos.splice(todos.indexOf(todo), 1);
      state.todos = todos;
      state.newTodo = todo.body
    },
    REMOVE_TODO(state, todo) {
      const todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo) {
      todo.completed = !todo.completed
    },
    CLEAR_TODO(state) {
      state.newTodo = ''
    }
  },
  actions: {
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
    // Set a request, but trigger actual lookup later
    changeZipRequest({ commit }, zip) {
      commit('ZIP_CHANGE_REQUEST', zip)
    },
    changeZip({ commit }, zip) {
      if (zip) {
        commit('ZIP_CHANGE_REQUEST', zip)
      }

      return new Promise((resolve, reject) => {
        setTimeout(() => {

          commit('ZIP_CHANGE_SUCCESS')
          resolve()
        }, 1000)
      })
    },
    // zipChangeRequest({ commit }, zip) {
    //   commit('ZIP_CHANGE_REQUEST', zip);
    // },
    // zipChangeSuccess({ commit }) {
    //   commit('ZIP_CHANGE_SUCCESS')
    // },
    // zipChangeFail({ commit }) {
    //   commit('ZIP_CHANGE_FAIL')
    // },



    getTodo({commit}, todo){
      commit('GET_TODO', todo)
    },
    addTodo({commit}){
      commit('ADD_TODO')
    },
    editTodo({commit}, todo){
      commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo){
      commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo){
      commit('COMPLETE_TODO', todo)
    },
    clearTodo({commit}){
      commit('CLEAR_TODO')
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => {return   !todo.completed}),
    completedTodos: state => state.todos.filter((todo) => {return todo.completed}),
    getProductByUuid: (state, getters) => (uuid) => {
      return state.products[uuid];
    },
    location: state => state.location
  }
})
