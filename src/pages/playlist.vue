<template>
  <div class="home relative">
    <div v-if="!showFilter">
      <div class="flex flex-row justify-between px-4 py-4">
        <h1 class="text-2xl text-white font-bold">{{ role === 'director' ? 'Playlists' : 'My Playlists' }}</h1>
        <div class="actions flex">
          <a href="#" @click.prevent="showFilter = !showFilter" class="md:mr-14">
            <svg id="tune" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g id="tune-white-18dp" opacity="1">
                <path id="Path_91" data-name="Path 91" d="M0,0H24V24H0Z" fill="none"/>
                <path id="Path_92" class="color" data-name="Path 92" d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z" fill="#cdcdcd"/>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="navigation px-4 mb-4">
        <ul class="flex text-white" v-if="role === 'director'">
          <li class="mr-2"><router-link to="/playlist" class="font-bold border-2 border-blue-primary border-t-0 border-l-0 border-r-0 pb-2 px-4">All</router-link></li>
          <li class="mr-2"><router-link to="/playlist/mine" class="font-bold border-2 border-transparent border-t-0 border-l-0 border-r-0 pb-2 px-4">Mine</router-link></li>
          <li class="mr-2"><router-link to="/playlist/Shared" class="font-bold border-2 border-transparent border-t-0 border-l-0 border-r-0 pb-2 px-4">Shared</router-link></li>
          <li class="mr-2"><router-link to="/playlist/Artist" class="font-bold border-2 border-transparent border-t-0 border-l-0 border-r-0 pb-2 px-4">Artist</router-link></li>
        </ul>
        </div>
        <div class="playlist-items flex w-full flex-wrap px-2">
            <PlaylistItem v-for="n in 8" :key="`playlist-item-${n}`"></PlaylistItem>
        </div>
      </div>
    <FilterForm :show="showFilter" @close="closeFilter"></FilterForm>
  </div>
</template>

<script>
import FilterForm from '../components/FilterForm'
import PlaylistItem from '../components/PlaylistItem'

import {mapActions, mapGetters} from 'vuex'

export default {
  components: { FilterForm, PlaylistItem },
  data() {
    return {
      showFilter: false,
    }
  },
  computed: {
    ...mapGetters('user', ['role']),
  },
  methods: {
    ...mapActions('app', ['setFlatButtonUrl']),
    closeFilter() {
      this.showFilter = false
    }
  },
  created() {
    this.setFlatButtonUrl('/create-playlist')
  },
  mounted() {
    this.setFlatButtonUrl('/create-playlist')
  },
  beforeDestroy() {
    this.setFlatButtonUrl('/upload-my-music')
  }
}
</script>

<style scoped>

</style>
