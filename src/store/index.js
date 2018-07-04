import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num: 3,
        length: 10,
        lists: []
    },
    mutations: {
        _addList(state, list) {
            if(state.lists.every(item => item.title !== list.title) || state.lists.length==0) {
                console.log(state.lists.every(item => item.title !== list.title))
                 var l = {}
                 l.title = list.title
                 l.time = new Date()
                 l.clickNum = list.num
                 state.lists.push(l)
            } 

           state.lists = state.lists.sort((a, b) =>   b.clickNum - a.clickNum)
        },
        _changeList(state, title) {
            var l = state.lists.filter(item => item.title ==  title)[0]
                l.title = title
        },
        _delList(state, title) {
            state.lists = state.lists.filter(item => item.title !==  title)
        },
        _changeNum(state, num) {
            state.num = num
        },
        _changeLength(state, length) {
            state.length = length
        },
        _add(state, name) {
            var l = state.lists.filter(item => item.title ==  name)[0]
                l.clickNum ++
                state.lists = state.lists.sort((a, b) =>   b.clickNum - a.clickNum)
        }
    }
})