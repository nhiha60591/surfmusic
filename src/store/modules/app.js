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
  changeToggleMenu (state, stage) {
    state.isToggleMenu = stage
  },
}

const actions = {
  toggleMenu ({ commit }) {
    commit('toggleMenu')
  },
  changeToggleMenu ({ commit }, stage) {
    commit('changeToggleMenu', stage)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
