<template>
  <div class="playlist-item flex flex-col justify-between w-1/2 md:w-1/5 p-2" v-click-outside="clickOutSide">
    <div class="h-full img-item rounded-md relative overflow-hidden">
      <div class="playlist-img relative">
        <router-link :to="`/playlist/${item.id}`" class="absolute block w-full h-full top-0 left-0 z-40">
          <img :src="item.image" class="w-full block" alt="Playlist Name">
        </router-link>
      </div>
      <div class="actions absolute z-50 right-2 top-2 rounded-full bg-black w-10 h-10 flex justify-center items-center">
        <button class="focus:outline-none" @click.prevent="onShare"><img src="../assets/share-btn.png" alt="Share"></button>
        <div class="absolute top-12 right-0 action-box rounded" :class="{'hidden': !shareOpen}">
          <ul class="block w-full text-white">
            <li class="mb-2 pl-2"><button class="focus:outline-none flex flex-row items-center py-2 font-bold"><img src="../assets/icons/edit.png" alt="Edit Playlist" class="mr-2">Edit Playlist</button></li>
            <li class="mb-2 pl-2"><button class="focus:outline-none  flex flex-row items-center py-2 font-bold"><img src="../assets/icons/share.png" alt="Share Playlist" class="mr-2">Share Playlist</button></li>
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
        let height = Math.floor(Math.random() * (350 - 200) + 200);
        return {
          id: 1,
          title: "Playlist Name",
          image: `https://fakeimg.pl/350x${height}/?text=Surf Music`,
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
    .playlist-img {
      overflow: hidden;
      display: flex;
      width: 100%;
      padding-top: 100%;
      a {
        width: 100%;
        background: #cdcdcd;
        display: flex;
        img {
          align-items: stretch;
        }
      }
    }
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
