<template>
  <transition name="slide">
    <div class="min-h-screen header-menu" :class="{'show-sidebar': isToggleMenu}">
      <div class="pt-2 pb-3 space-y-1">
        <div class="flex text-white p-5 items-center">
          <div class="avatar">
            <img class="inline-block h-14 w-14 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
          </div>
          <div class="user-info pl-4">
            <div class="menu-text font-bold mb-2">User Name</div>
            <strong class="border rounded-full px-4 py-1 text-sm uppercase">Stuff_Producer</strong>
          </div>
        </div>
        <router-link to="/" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/audiotrack-white.svg"></span>
          <span class="menu-text font-bold">My Musics</span>
        </router-link>
        <router-link to="/playlist" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/queue_music-white.svg"></span>
          <span class="menu-text font-bold">Playlists</span>
        </router-link>
        <router-link to="/requested-playlist" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/requested-playlist.svg"></span>
          <span class="menu-text font-bold">Requested Playlists</span>
        </router-link>
        <a href="#" v-if="role !== 'artist' && role !== 'producer'" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/people_alt-white.svg"></span>
          <span class="menu-text font-bold">Producers</span>
        </a>
        <a href="#" v-if="role === 'artist' || role === 'producer'" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/people_alt-white.svg"></span>
          <span class="menu-text font-bold">Musicians</span>
        </a>
        <a href="#" v-if="role === 'artist' || role === 'producer'" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/friends.svg"></span>
          <span class="menu-text font-bold">Friends</span>
        </a>
        <a href="#" v-if="role !== 'artist' && role !== 'producer'" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/people_alt-white.svg"></span>
          <span class="menu-text font-bold">My Artists</span>
        </a>
        <router-link to="/account/basic" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon pl-4"><img src="../../assets/icons/account_circle-white.svg" alt="Account" /></span>
          <span class="menu-text font-bold">Account</span>
        </router-link>
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
  computed: {
    ...mapGetters('app', ['isToggleMenu']),
    ...mapGetters('user', ['role'])
  },
  methods: {
    ...mapActions('app', ['toggleMenu']),
  }
}
</script>

<style lang="scss" scoped>

</style>
