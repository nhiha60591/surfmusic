<template>
  <div class="main-container flex">
    <Sidebar></Sidebar>
    <div class="wrap" :class="{'md:w-4/6 sm:w-2/6': isToggleMenu, 'w-full': !isToggleMenu}">
        <Header></Header>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/header'
import Sidebar from './components/sidebar'
import {mapGetters} from "vuex";

export default {
  components: { Header, Sidebar },
  computed: {
    ...mapGetters('app', ['isToggleMenu']),
  },
}
</script>

<style scoped>

</style>
