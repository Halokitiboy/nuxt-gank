import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
    GET_MENU:'GET_MENU',
    TODAY_DATA:'TODAY_DATA'
}

const state = {
    menu:[],
    todayData:[]
}

const mutations = {
    [types.GET_MENU](state,payload){
            state.menu = payload 
    },
    [types.TODAY_DATA](state,payload){
            state.todayData = payload 
    }
}

const actions = {
   async getToday({commit}){
         const data = await this.$axios.$get('https://gank.io/api/today');
         if(!data.error){
            commit(types.GET_MENU,data.category)
            commit(types.TODAY_DATA,data.results)
         }
    }
}
  
const getters={
    todayData:state => state.todayData
}
const store = () =>new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store;