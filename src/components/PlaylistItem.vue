<template>
  <div class="playlist-item w-1/2 md:w-1/4 p-2" v-click-outside="clickOutSide">
    <div class="img-item rounded-md relative overflow-hidden">
      <router-link :to="`/playlist/${item.id}`">
        <img src="../assets/pexels-photo-3769099.png" class="w-full block" alt="Playlist Name">
      </router-link>
      <div class="actions absolute right-2 top-2 rounded-full bg-black w-10 h-10 flex justify-center items-center">
        <button class="focus:outline-none" @click.prevent="onShare"><img src="../assets/share-btn.png" alt="Share"></button>
        <div class="absolute top-12 right-0 action-box bg-gray-primary p-2 rounded" :class="{'hidden': !shareOpen}">
          <ul class="block w-full text-white">
            <li class="mb-2"><button class="focus:outline-none flex flex-row items-center py-2 font-bold"><img src="../assets/icons/edit.png" alt="Edit Playlist" class="mr-2">Edit Playlist</button></li>
            <li class="mb-2"><button class="focus:outline-none  flex flex-row items-center py-2 font-bold"><img src="../assets/icons/share.png" alt="Share Playlist" class="mr-2">Share Playlist</button></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info text-white mt-2">
      <h3 class="font-bold"><router-link :to="`/playlist/${item.id}`">Playlist Name</router-link></h3>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: 1,
          title: "Playlist Name"
        }
      }
    }
  },
  data() {
    return {
      shareOpen: false,
    }
  },
  methods: {
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
}
</script>

<style lang="scss">
  .playlist-item {
    h3 {
      font-size: 16px;
    }
    .action-box {
      width: 170px;
    }
    @media screen and (min-width: 601px) {
      .actions {
        display: none;
      }
    }
    &:hover {
      .actions {
        display: flex;
      }
    }
  }
</style>
