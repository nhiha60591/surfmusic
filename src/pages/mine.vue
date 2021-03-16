<template>
  <div>
    <h1 class="text-2xl text-white font-bold mt-4 ml-4">Playlists</h1>
    <div class="navigation px-4 mb-4">
      <ul class="flex text-white mt-4">
        <li class="mr-2"><router-link to="/playlist" class="font-bold border-2 border-transparent border-t-0 border-l-0 border-r-0 pb-2 px-4">All</router-link></li>
        <li class="mr-2"><router-link to="/playlist/mine" class="font-bold border-2 border-blue-primary border-transparent border-t-0 border-l-0 border-r-0 pb-2 px-4">Mine</router-link></li>
        <li class="mr-2"><router-link to="/playlist/shared" class="font-bold border-2 border-transparent border-t-0 border-l-0 border-r-0 pb-2 px-4">Shared</router-link></li>
        <li class="mr-2"><router-link to="/playlist/artist" class="font-bold border-2 border-transparent border-t-0 border-l-0 border-r-0 pb-2 px-4">Artist</router-link></li>
      </ul>
    </div>
    <div class="playlist-items flex w-full flex-wrap px-2">
        <PlaylistItem v-for="n in 8" :key="`playlist-item-${n}`"></PlaylistItem>
    </div>
  </div>
</template>

<script>
import PlaylistItem from '../components/PlaylistItem'

export default {
  components: { PlaylistItem },
}
</script>

<style>

</style>