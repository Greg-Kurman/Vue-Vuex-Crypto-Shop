import Vuex from 'vuex'
 

import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

 

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters,

})

export default store