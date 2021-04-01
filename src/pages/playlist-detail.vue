<template>
  <div class="playlist-detail pb-12 mb-12">
    <div class="info flex flex-col p-4 md:pb-14 md:px-14 md:pt-4 justify-center items-center relative overflow-hidden">
      <img src="../assets/pexels-photo-3769099.png" class="absolute top-0 left-0 w-full h-auto opacity-60 z-0" alt="">
      <div class="flex w-full justify-end md:justify-between pb-2 md:pb-8 max-w-7xl">
        <div class="back-btn relative z-50 hidden md:block">
          <router-link to="/playlist" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="7.4" height="12" viewBox="0 0 7.4 12">
              <path id="_Color" data-name="prev" d="M7.4,1.41,5.992,0,0,6l5.992,6L7.4,10.59,2.826,6Z" fill="#fff"/>
            </svg>
          </router-link>
        </div>
        <div class="actions flex justify-center items-center md:pr-4">
          <a
            href="#"
            class="mr-4"
            :class="{
              'text-red-700 opacity-90': isFavorite,
              'text-white opacity-50': !isFavorite,
              }"
            @click.prevent="isFavorite =!isFavorite">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g opacity="0.87"><path d="M0,0H24V24H0Z" fill="none"/><path d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z" fill="currentColor"/></g></svg>
          </a>
          <a href="#" class="mr-2 opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
              <path id="Path_128" data-name="Path 128" d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z" transform="translate(-10 -4)" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="text-white relative z-10 p-8 w-full md:flex md:items-center">
        <div class="w-full img-item rounded-lg relative overflow-hidden">
          <div class="absolute z-20 top-0 left-0 w-full h-full flex">
            <img :src="imageURL" class="w-full h-full mx-auto" alt="Playlist Name">
          </div>
          <div class="actions absolute right-2 top-2 z-50 rounded-full bg-black w-10 h-10 flex justify-center items-center" v-click-outside="clickOutSide">
            <button class="focus:outline-none" @click.prevent="onShare"><img src="../assets/share-btn.png" alt="Share"></button>
            <div class="absolute top-12 right-0 action-box rounded" :class="{'hidden': !shareOpen}">
              <ul class="block w-full text-white rounded overflow-hidden py-1">
                <li class="mb-2"><button class="focus:outline-none flex flex-row items-center p-2 font-bold"><img src="../assets/icons/edit.png" alt="Edit Playlist" class="mr-2">Edit Playlist</button></li>
                <li class="mb-2"><button class="focus:outline-none  flex flex-row items-center p-2 font-bold"><img src="../assets/icons/share.png" alt="Share Playlist" class="mr-2">Share Playlist</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="md:pl-8">
          <h3 class="text-center font-bold mt-4 md:text-2xl">My First Playlist</h3>
          <div class="play-all-button py-2 hidden md:block">
            <button class="uppercase font-bold border-2 border-blue-primary text-blue-primary rounded-full px-6 py-4 flex items-center my-4 focus:outline-none">
              <svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="11.318" height="14.405" viewBox="0 0 11.318 14.405">
                <path data-name="Path 25" d="M8,5V19.4l11.318-7.2Z" transform="translate(-8 -5)" fill="#80DEEA"/>
              </svg>
              Play All
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="play-all-button text-center py-2 block md:hidden">
      <button class="uppercase font-bold border-2 border-blue-primary text-blue-primary rounded-full px-6 py-4 flex items-center mx-auto my-4 focus:outline-none">
        <svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="11.318" height="14.405" viewBox="0 0 11.318 14.405">
          <path data-name="Path 25" d="M8,5V19.4l11.318-7.2Z" transform="translate(-8 -5)" fill="#80DEEA"/>
        </svg>
        Play All
      </button>
    </div>
    <div class="music-items">
      <div class="hidden md:flex bg-black w-full justify-between items-center py-2">
        <div class="w-2/6 text-white text-opacity-60 text-center font-semibold">Title</div>
        <div class="w-1/6 text-white text-opacity-60 text-center font-semibold">Tempo</div>
        <div class="w-1/6 text-white text-opacity-60 text-center font-semibold">Genre</div>
        <div class="w-1/6 text-white text-opacity-60 text-center font-semibold">Star</div>
        <div class="w-1/6 text-white text-opacity-60 text-center font-semibold"></div>
      </div>
      <MusicItem class="mb-1" v-for="music in musics" :key="`music-${music.id}`" :music="music" :show-dot="true"></MusicItem>
    </div>
  </div>
</template>

<script>
import MusicItem from '../components/MusicItem'
import {mapActions} from 'vuex'
import ClickOutside from "vue-click-outside";

export default {
  components: { MusicItem },
  data() {
    return {
      shareOpen: false,
      isFavorite: false,
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
  computed: {
    imageURL() {
      let height = Math.floor(Math.random() * (350 - 200) + 200);
      return `https://fakeimg.pl/350x${height}/?text=Surf Music`
    }
  },
  methods: {
    ...mapActions('app', ['setFlatButtonUrl']),
    onShare() {
      this.shareOpen = !this.shareOpen
    },
    clickOutSide() {
      if (this.shareOpen === true) {
        this.shareOpen = false
      }
    },
  },
  directives: {
    ClickOutside
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

<style lang="scss">
  .action-box {
    width: 170px;
  }
  .img-item {
    display: flex;
    width: 250px;
    height: 250px;
    img {
      align-items: stretch;
    }
  }
  @media screen and (max-width: 900px) {
    .info {
      min-height: 50vh;
      > img.absolute {
        width: auto;
        max-width: none;
        min-width: 100%;
        min-height: 100%;
        max-height: none;
      }
    }
    .img-item {
      width: 200px;
      height: 200px;
      margin: auto;
    }
  }
</style>
