const state = {
  id: null,
  token: undefined,
  name: '',
  avatar: '',
  is_admin: false,
};

const getters = {
  isAuthenticated: (state) => {
    return typeof state.token !== "undefined" && state.token
  },
  accessToken: (state) => {
    return state.token
  },
}

const mutations = {
  SET_ID: (state, id) => {
    state.id = id;
  },
  SET_IS_ADMIN: (state, isAdmin) => {
    state.is_admin = isAdmin;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', undefined);
      commit('SET_ROLES', []);
      resolve();
    });
  },

  setToken({ commit }, token) {
    return new Promise(resolve => {
      commit('SET_TOKEN', token);
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
