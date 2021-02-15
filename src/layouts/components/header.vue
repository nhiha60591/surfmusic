<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-gray-800" style="background-color: #121212 !important;">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="inset-y-0 left-0 flex items-center">
          <!-- Mobile menu button-->
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-0 focus:ring-white"
            @click.prevent="openMenu = !openMenu"
            aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <svg
              class="h-6 w-6"
              :class="{hidden: openMenu, block: !openMenu}"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <svg
              class="h-6 w-6"
              :class="{hidden: !openMenu, block: openMenu}"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
    <transition name="slide">
    <div v-if="openMenu" class="min-h-screen header-menu max-w-md">
      <div class="pt-2 pb-3 space-y-1">
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-2/6 pl-2">
            <strong class="border rounded-full px-4 py-1 text-sm uppercase">Stuff</strong>
          </span>
          <span class="menu-text font-bold -ml-2">User Name</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/home-white.svg"></span>
          <span class="menu-text font-bold">Home</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/audiotrack-white.svg"></span>
          <span class="menu-text font-bold">Musics</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/queue_music-white.svg"></span>
          <span class="menu-text font-bold">Playlists</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/favorite-white.svg"></span>
          <span class="menu-text font-bold">Favorite</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/album-white.svg"></span>
          <span class="menu-text font-bold">Labels</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/people_alt-white.svg"></span>
          <span class="menu-text font-bold">Producers</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/people_alt-white.svg"></span>
          <span class="menu-text font-bold">Directors</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/people_alt-white.svg"></span>
          <span class="menu-text font-bold">Stuff</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/account_circle-white.svg"></span>
          <span class="menu-text font-bold">Account</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/notification_important-white.svg"></span>
          <span class="menu-text font-bold">Notification</span>
        </a>
        <a href="#" class="menu-item text-white flex flex-row w-full px-3 py-4 text-base font-medium">
          <span class="menu-icon w-1/6 pl-4"><img src="../../assets/icons/search-white.svg"></span>
          <span class="menu-text font-bold">Search</span>
        </a>
      </div>
    </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      openMenu: true,
    }
  }
}
</script>

<style scoped>

</style>
