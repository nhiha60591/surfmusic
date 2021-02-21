<template>
  <div class="home relative">
    <div class="flex flex-row justify-between px-4 py-4">
      <h1 class="text-2xl text-white font-bold">My Playlist</h1>
      <div class="actions flex">
        <a href="#">
          <svg id="tune" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="tune-white-18dp" opacity="1">
              <path id="Path_91" data-name="Path 91" d="M0,0H24V24H0Z" fill="none"/>
              <path id="Path_92" class="color" data-name="Path 92" d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z" fill="#cdcdcd"/>
            </g>
          </svg>
        </a>
      </div>
    </div>
    <div class="playlist-items flex w-full flex-wrap px-2">
      <PlaylistItem v-for="n in 8" :key="`playlist-item-${n}`"></PlaylistItem>
    </div>
  </div>
</template>

<script>
import PlaylistItem from '../components/PlaylistItem'
import {mapActions} from 'vuex'

export default {
  components: { PlaylistItem },
  methods: {
    ...mapActions('app', ['setFlatButtonUrl'])
  },
  created() {
    this.setFlatButtonUrl('/create-playlist')
  },
  beforeDestroy() {
    this.setFlatButtonUrl('/upload-my-music')
  }
}
</script>

<style scoped>

</style>
