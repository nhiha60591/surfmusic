<template>
  <div class="main-container flex">
    <Sidebar></Sidebar>
    <div class="wrap" :class="{'md:w-4/6 sm:w-2/6': isToggleMenu, 'w-full': !isToggleMenu}">
      <MainHeader v-if="isShowHeader"></MainHeader>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from './components/header'
import Sidebar from './components/sidebar'
import {mapGetters, mapActions} from "vuex";

export default {
  components: { MainHeader, Sidebar },
  computed: {
    ...mapGetters('app', ['isToggleMenu', 'isShowHeader']),
  },
  methods: {
    ...mapActions('app', ['toggleMenu'])
  },
  mounted() {
    if (window.innerWidth > 600 && typeof this.isToggleMenu === 'undefined') {
      this.toggleMenu()
    }
  }
}
</script>

<style scoped>

</style>
