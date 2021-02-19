const state = () => ({
  isToggleMenu: undefined,
  showHeader: true,
  showFlatButton: true,
})

const getters = {
  isToggleMenu: (state) => {
    return state.isToggleMenu
  },
  isShowHeader: (state) => {
    return state.showHeader
  },
  isShowFlatButton: (state) => {
    return state.showFlatButton
  }
}

const mutations = {
  toggleMenu (state) {
    state.isToggleMenu = !state.isToggleMenu
  },
  changeToggleMenu (state, stage) {
    state.isToggleMenu = stage
  },
  setShowHeader(state, show) {
    state.showHeader = show
  },
  setShowFlatButton(state, show) {
    state.showFlatButton = show
  }
}

const actions = {
  toggleMenu ({ commit }) {
    commit('toggleMenu')
  },
  changeToggleMenu ({ commit }, stage) {
    commit('changeToggleMenu', stage)
  },
  setShowHeader({ commit }, show) {
    commit('setShowHeader', show)
  },
  setShowFlatButton({ commit }, show) {
    commit('setShowFlatButton', show)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
