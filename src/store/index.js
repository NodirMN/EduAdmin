import Vue from 'vue'
import Vuex from 'vuex'
import teacher from './modules/teacher.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    teacher,
  }
})
