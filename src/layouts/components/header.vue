<template>
  <nav class="bg-gray-800 header" style="background-color: #121212 !important;">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class=" inset-y-0 left-0 flex items-center">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-0 focus:ring-white"
            @click.prevent="toggleMenu"
            v-if="isMobile"
            aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img class="h-8 w-auto ml-1" src="../../assets/logo.png" alt="Surf Music" />
          <h2 class="uppercase text-white font-bold pl-4 text-sm">Surf Music</h2>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button class="text-sm font-bold py-1 px-5 border rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white uppercase">
            <span class="sr-only">User Role</span>
            <!-- Heroicon name: outline/bell -->
            Stuff
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "header",
  data() {
    return {
      isMobile: true,
    }
  },
  computed: {
    ...mapGetters('app', ['isToggleMenu']),
  },
  methods: {
    ...mapActions('app', ['toggleMenu']),
  },
  mounted() {
    if (window.innerWidth > 600) {
      this.isMobile = false
    }
  }
}
</script>

<style scoped>

</style>
