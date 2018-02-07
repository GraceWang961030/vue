import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters'

let state={
  count:10,
  type:''
};
export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations
})
