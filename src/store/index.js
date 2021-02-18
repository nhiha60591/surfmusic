import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import camelCase from 'camelcase'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const modulesFiles = require.context('./modules', false, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = camelCase(modulePath.replace(/^\.\/(.*)\.\w+$/, '$1'));
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {})

const store = new Vuex.Store({
  modules,
  getters,
  plugins: [new VuexPersistence({modules: ['user']}).plugin]
})

export default store
