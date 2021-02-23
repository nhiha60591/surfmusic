<template>
  <div class="p-4 text-white relative">
    <div class="absolute top-6 right-4">
      <router-link to="/playlist/1"><img src="../assets/close.svg" alt="Close"></router-link>
    </div>
    <div class="add-music-form pt-10 pb-4">
      <h1 class="text-center text-white font-bold text-2xl">Add Music</h1>
      <input
        type="text"
        placeholder="Music Name"
        class="search rounded-md border border-gray-500 w-full my-2 py-2 bg-black" />
    </div>
    <div class="music-items -mx-4">
      <MusicItem
        class="mb-1"
        v-for="music in musics"
        :key="`music-${music.id}`"
        :music="music"
        :addable="true"></MusicItem>
    </div>

    <div class="mt-6 flex">
      <div class="w-1/2 pr-1">
        <button @click.prevent="onCancel" class="border-2 focus:outline-none border-blue-primary rounded block text-center py-4 w-full uppercase text-blue-primary font-bold">Cancel</button>
      </div>
      <div class="w-1/2 pl-1">
        <button @click.prevent="onOK" class="border-2 focus:outline-none bg-blue-primary border-blue-primary rounded block text-center py-4 w-full uppercase text-black font-bold">OK</button>
      </div>
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
          isAdded: true,
        },
        {
          id: 2,
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: false,
          isPlayed: false,
          isAdded: false,
        },
        {
          id: 3,
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: false,
          isPlayed: false,
          isAdded: false,
        },
        {
          id: 4,
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: false,
          isPlayed: true,
          isAdded: false,
        },
        {
          id: 5,
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: false,
          isPlayed: true,
          isAdded: false,
        },
        {
          id: 6,
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: true,
          isPlayed: true,
          isAdded: false,
        },
      ]
    }
  },
  methods: {
    ...mapActions('app', ['setShowHeader', 'setShowFlatButton']),
    onOK() {
      this.$router.push('/playlist/1')
    },
    onCancel() {
      this.$router.push('/playlist/1')
    }
  },
  created() {
    this.setShowHeader(false)
    this.setShowFlatButton(false)
  },
  mounted() {
    this.setShowHeader(false)
    this.setShowFlatButton(false)
  },
  beforeDestroy() {
    this.setShowHeader(true)
    this.setShowFlatButton(true)
  }
}
</script>

<style lang="scss">
  input.search {
    background-image: url('../assets/icons/search-icon@2x.png');
    background-position-x: 5%;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: 20px;
    padding-left: 60px;
  }
</style>
