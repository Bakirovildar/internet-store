import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            featured: [
                {id:1, title: 'Quality Product'},
                {id:2, title: 'Free Shipping'},
                {id:3, title: '14-Day Return'},
                {id:4, title: '24/7 Support'},
            ],
            categories: [
                {id:1, categoryName: 'cloth', howManyProducts: 100, img: 'https://images.unsplash.com/photo-1543331707-30e9129663e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'},
                {id:2, categoryName: 'phone', howManyProducts: 122, img: 'https://images.unsplash.com/photo-1509645470620-c9c349934693?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'},
                {id:3, categoryName: 'shoes', howManyProducts: 103, img: 'https://images.unsplash.com/photo-1670269110677-d9e24654df8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'},
                {id:4, categoryName: 'cream', howManyProducts: 55, img: 'https://images.unsplash.com/photo-1520173043194-dc6b2a237fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'},
                {id:5, categoryName: 'photo', howManyProducts: 54, img: 'https://images.unsplash.com/photo-1584713945776-55f3daca7a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
                {id:6, categoryName: 'cloth', howManyProducts: 134, img: 'https://images.unsplash.com/photo-1670269110677-d9e24654df8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'},
                {id:7, categoryName: 'cream', howManyProducts: 123, img: 'https://images.unsplash.com/photo-1571782742478-0816a4773a10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80'},
                {id:8, categoryName: 'shoes', howManyProducts: 156, img: 'https://images.unsplash.com/photo-1543331707-30e9129663e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'},
                {id:9, categoryName: 'photo', howManyProducts: 166, img: 'https://images.unsplash.com/photo-1584713945776-55f3daca7a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
                {id:10, categoryName: 'shoes', howManyProducts: 107, img: 'https://images.unsplash.com/photo-1543331707-30e9129663e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80'},
                {id:11, categoryName: 'photo', howManyProducts: 178, img: 'https://images.unsplash.com/photo-1571782742478-0816a4773a10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80'},
                {id:12, categoryName: 'shoes', howManyProducts: 145, img: 'https://images.unsplash.com/photo-1670269110677-d9e24654df8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'},
            ]
        }
    },
    mutations: {},
    actions: {},
    getters: {
        featured(state) {
            return state.featured
        },
        categoryProducts(state) {
            return state.categories
        }
    }
})
