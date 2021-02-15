const state = () => ({
  isToggleMenu: undefined,
})

const getters = {
  isToggleMenu: (state) => {
    return state.isToggleMenu
  }
}

const mutations = {
  toggleMenu (state) {
    state.isToggleMenu = !state.isToggleMenu
  },
}

const actions = {
  toggleMenu ({ commit }) {
    commit('toggleMenu')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
