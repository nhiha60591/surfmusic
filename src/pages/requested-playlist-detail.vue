<template>
  <div class="playlist-detail pb-12 mb-12">
    <div class="requested-playlist-info flex flex-col w-full flex-wrap px-4 text-white">
      <div class="overflow-hidden -mx-4">
        <router-link :to="`/requested-playlist-detail/1`">
          <img src="../assets/requested-playlist.jpg" class="w-full" alt="Requested Playlist" />
        </router-link>
      </div>
      <h2 class="my-2 font-bold"><router-link :to="`/requested-playlist-detail/1`">Requested Playlist</router-link></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="my-2">
        <span class="time start">2020.10.10</span> - <span class="time end">2020.12.12</span>
      </p>
    </div>
    <div class="music-items">
      <MusicItem class="mb-1" v-for="music in musics" :key="`music-${music.id}`" :music="music"></MusicItem>
    </div>
  </div>
</template>

<script>
import MusicItem from '../components/MusicItem'
import {mapActions} from 'vuex'

export default {
  components: { MusicItem },
  data() {
    return {
      musics: [
        {
          id: 1,
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: false,
          isPlayed: false,
        },
        {
          id: 2,
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: false,
          isPlayed: false,
        },
        {
          id: 3,
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: false,
          isPlayed: false,
        },
        {
          id: 4,
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: true,
          isPlayed: true,
        },
      ]
    }
  },
  methods: {
    ...mapActions('app', ['setFlatButtonUrl'])
  },
  created() {
    this.setFlatButtonUrl('/add-music')
  },
  mounted() {
    this.setFlatButtonUrl('/add-music')
  },
  beforeDestroy() {
    this.setFlatButtonUrl('/upload-my-music')
  }
}
</script>
