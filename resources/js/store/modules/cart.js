const state = {
    cart: []
}

const mutations = {
    cartDataSync(state, newData) {
        state.cart = newData;
    }
};

const actions = {
    setCartData({ commit }, payload) {
        commit('cartDataSync', payload);
    }
};

const getters = {
    getCartData(state) {
        return state.cart;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}