import axios from 'axios'

const state = {
  id: null,
  token: null,
  name: '',
  avatar: '',
  is_admin: false,
};

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
      commit('SET_TOKEN', '');
      commit('SET_ROLES', []);
      resolve();
    });
  },

  async postLogin(formData) {
    try {
      let { data } = await axios.post('login', formData)
      return data
    } catch (e) {
      return false
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
