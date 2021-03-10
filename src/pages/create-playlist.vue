<template>
  <div class="upload-my-music p-4 text-white relative">
    <div class="absolute top-6 right-4">
      <router-link to="/playlist"><img src="../assets/close.svg" alt="Close"></router-link>
    </div>
    <div class="create-playlist-form pt-10">
      <h1 class="text-center text-white font-bold text-2xl">Create New Playlist</h1>
      <div class="flex w-full justify-center mt-8 relative mx-auto" style="max-width: 200px;">
        <img :src="image" class="p-5 bg-gray-600 block rounded-lg w-full" width="150" alt="Audio Track" />
        <button class="rounded-full w-12 h-12 flex justify-center items-center absolute bottom-2 right-2 z-20 focus:outline-none" style="background-color: #929292; color: #000;" @click="openFile">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path data-name="Path 144" d="M0,0H24V24H0Z" fill="none"/>
            <path data-name="Path 145" d="M3,17.25V21H6.75L17.81,9.94,14.06,6.19ZM20.71,7.04a1,1,0,0,0,0-1.41L18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75,1.83-1.83Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <input type="file" name="file" ref="file" id="file" accept="image/*" style="opacity: 0; width: 1px; height: 1px; overflow: hidden;" @change.prevent="fileChange">
      <div class="my-3">
        <input type="text" class="input-bg p-4 w-full rounded rounded-b-none" placeholder="Playlist Name" />
      </div>
    </div>
    <div class="mt-2 flex">
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
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      imageURL: '../assets/icons/audiotrack-white.svg',
    }
  },
  computed: {
    image() {
      if (this.imageURL.includes('http')) {
        return this.imageURL
      }
      return require('../assets/icons/audiotrack-white.svg')
    }
  },
  methods: {
    ...mapActions('app', ['setShowHeader', 'setShowFlatButton']),
    openFile() {
      this.$refs.file.click()
    },
    onOK() {
      this.$router.push('/playlist')
    },
    onCancel() {
      this.$router.push('/')
    },
    fileChange(e) {
      this.imageURL = window.URL.createObjectURL(e.target.files[0]);
    },
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

<style lang="scss" scoped>
  .input-bg {
    outline: none;
    background-color: rgba(255, 255, 255, 0.12);
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .create-playlist-form {
    min-height: calc(100vh - 50px);
  }
</style>
