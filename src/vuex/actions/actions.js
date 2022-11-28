import axios from "axios"

export default {
     
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/products', {
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products

                })
                .catch((er) => {
                    console.log("ERROR in actions", er)
                    return er
                })
        },

        ADD_TO_CART({ commit }, product) {
            commit('SET_CART', product)
        },
        INCREMENT_CART_ITEM({ commit }, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({ commit }, index) {
            commit('DECREMENT', index)
        },
        DELETE_FROM_CART({ commit }, index) {
            commit('REMOVE_FROM_CART', index)
        },


        GET_VALUTE_FROM_API({ commit }) {
            return axios('https://www.cbr-xml-daily.ru/daily_json.js', {
                method: "GET"
            })
                .then((valute) => {
                    commit('SET_VALUTE_TO_STATE', valute.data)
                    return valute

                })
                .catch((er) => {
                    console.log("ERROR in actions", er)
                    return er
                })
        },
    
}