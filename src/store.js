import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: [],

    },
    mutations: {
        //添加数据
        addList(state, { name, level }) {
            let obj = {
                id: new Date() * 1,
                name,
                level
            }
            state.data.push(obj)
        },
        //删除数据
        deleteList(state, { id }) {
            state.data = state.data.filter(item => item.id != id);
        },
        //修改数据
        changeList(state, { id, name, level }) {
            state.data = state.data.filter(item => {
                if (item.id == id) {
                    item.name = name;
                    item.level = level
                }
                return item
            })
        }
    },
    actions: {

    }
})