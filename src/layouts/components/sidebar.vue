<template>
  <transition name="slide">
    <div class="min-h-screen header-menu" :class="{'show-sidebar': isToggleMenu}">
      <div class="pt-2 pb-3 space-y-1">
        <div class="text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="pl-2 mr-4">
            <strong class="border rounded-full px-4 py-1 text-sm uppercase">Stuff</strong>
          </span>
          <span class="menu-text font-bold">User Name</span>
        </div>
        <router-link to="/" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/home-white.svg"></span>
          <span class="menu-text font-bold">Home</span>
        </router-link>
        <router-link to="/music" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/audiotrack-white.svg"></span>
          <span class="menu-text font-bold">Musics</span>
        </router-link>
        <router-link to="/playlist" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/queue_music-white.svg"></span>
          <span class="menu-text font-bold">Playlists</span>
        </router-link>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/favorite-white.svg"></span>
          <span class="menu-text font-bold">Favorite</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/album-white.svg"></span>
          <span class="menu-text font-bold">Labels</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/people_alt-white.svg"></span>
          <span class="menu-text font-bold">Producers</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/people_alt-white.svg"></span>
          <span class="menu-text font-bold">Directors</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/people_alt-white.svg"></span>
          <span class="menu-text font-bold">Stuff</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/account_circle-white.svg"></span>
          <span class="menu-text font-bold">Account</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/notification_important-white.svg"></span>
          <span class="menu-text font-bold">Notification</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/search-white.svg"></span>
          <span class="menu-text font-bold">Search</span>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "sidebar",
  computed: {
    ...mapGetters('app', ['isToggleMenu'])
  },
  methods: {
    ...mapActions('app', ['toggleMenu']),
  }
}
</script>

<style scoped>

</style>
