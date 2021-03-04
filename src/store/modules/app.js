const state = () => ({
  isToggleMenu: undefined,
  showHeader: true,
  showFlatButton: true,
  flatButtonUrl: '/upload-my-music',
  flatButtonClass: 'bottom-4 right-4',
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
  },
  flatButtonUrl: (state) => {
    return state.flatButtonUrl
  },
  flatButtonClass: (state) => {
    return state.flatButtonClass
  },
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
  },
  setFlatButtonUrl(state, url) {
    state.flatButtonUrl = url
  },
  setFlatButtonClass(state, classString) {
    state.flatButtonClass = classString
  },
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
  },
  setFlatButtonUrl({ commit }, url) {
    commit('setFlatButtonUrl', url)
  },
  setFlatButtonClass({ commit }, classString) {
    commit('setFlatButtonClass', classString)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
