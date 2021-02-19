<template>
  <div class="playlist-detail pb-12 mb-12">
    <div class="info flex p-14 justify-center items-center relative overflow-hidden">
      <img src="../assets/pexels-photo-3769099.png" class="absolute top-0 left-0 w-full h-auto opacity-60 z-0" alt="">
      <div class="actions flex justify-center items-center absolute right-4 top-2">
        <a href="#" class="mr-4 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g opacity="0.87"><path d="M0,0H24V24H0Z" fill="none"/><path d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z" fill="#fff"/></g></svg>
        </a>
        <a href="#" class="mr-2 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
            <path id="Path_128" data-name="Path 128" d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z" transform="translate(-10 -4)" fill="#fff"/>
          </svg>
        </a>
      </div>
      <div class="text-white relative z-10">
        <div class="img-item rounded-lg relative overflow-hidden">
          <img src="../assets/pexels-photo-3769099.png" class="w-full block" alt="Playlist Name">
          <div class="actions absolute right-2 top-2 rounded-full bg-black w-10 h-10 flex justify-center items-center">
            <a href="#"><img src="../assets/share-btn.png" alt="Share"></a>
          </div>
        </div>
        <h3 class="text-center font-bold mt-4">My first playlist</h3>
      </div>
    </div>
    <div class="play-all-button text-center py-2">
      <button class="uppercase font-bold border-2 border-blue-primary text-blue-primary rounded-full px-6 py-4 flex items-center mx-auto my-4 focus:outline-none">
        <svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="11.318" height="14.405" viewBox="0 0 11.318 14.405">
          <path data-name="Path 25" d="M8,5V19.4l11.318-7.2Z" transform="translate(-8 -5)" fill="#80DEEA"/>
        </svg>
        Play All
      </button>
    </div>
    <div class="music-items">
      <MusicItem class="mb-1" v-for="music in musics" :key="`music-${music.id}`" :music="music"></MusicItem>
    </div>
  </div>
</template>

<script>
import MusicItem from '../components/MusicItem'

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
  }
}
</script>
