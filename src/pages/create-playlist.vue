<template>
  <div class="upload-my-music p-4 text-white relative">
    <div class="absolute top-6 right-4">
      <router-link to="/playlist"><img src="../assets/close.svg" alt="Close"></router-link>
    </div>
    <div class="create-playlist-form">
      <h1 class="text-center text-white font-bold text-2xl">Create New Playlist</h1>
      <div class="flex w-full justify-center mt-8">
        <img src="../assets/icons/audiotrack-white.svg" class="p-5 bg-gray-600 block rounded-lg" width="150" alt="Audio Track" />
      </div>
      <input type="file" name="file" ref="file" id="file" style="opacity: 0;">
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
    }
  },
  created() {
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
