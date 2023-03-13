import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            featured: [
                {id:1, title: 'Quality Product'},
                {id:2, title: 'Free Shipping'},
                {id:3, title: '14-Day Return'},
                {id:4, title: '24/7 Support'},
            ]
        }
    },
    mutations: {},
    actions: {},
    getters: {
        featured(state) {
            return state.featured
        }
    }
})
