<template>
  <div class="playlist-item flex flex-col justify-between w-1/2 md:w-1/5 p-2" v-click-outside="clickOutSide">
    <div class="h-full img-item rounded-md relative overflow-hidden">
      <div class="playlist-img relative">
        <router-link :to="type === 'playlist' ? `/playlist/${item.id}` : `/playlist-group-detail/${item.id}`" class="absolute block w-full h-full top-0 left-0 z-40">
          <img :src="item.image" class="w-full block" :alt="item.title">
        </router-link>
      </div>
      <div v-if="!isEditing" class="actions absolute z-50 right-2 top-2 rounded-full bg-black w-10 h-10 flex justify-center items-center">
        <button class="focus:outline-none" @click.prevent="onShare"><img src="../assets/share-btn.png" alt="Share"></button>
        <div class="absolute top-12 right-0 action-box rounded" :class="{'hidden': !shareOpen}">
          <ul class="block w-full text-white">
            <li class="mb-2 pl-2"><button class="focus:outline-none flex flex-row items-center py-2 font-bold"><img src="../assets/icons/edit.png" alt="Edit Playlist" class="mr-2">Edit Playlist</button></li>
            <li class="mb-2 pl-2"><button class="focus:outline-none  flex flex-row items-center py-2 font-bold"><img src="../assets/icons/share.png" alt="Share Playlist" class="mr-2">Share Playlist</button></li>
          </ul>
        </div>
      </div>
      <div v-else class="absolute z-50 right-2 top-2 rounded-full bg-white w-10 h-10 flex justify-center items-center">
        <button class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g transform="translate(4 4)">
              <rect id="Rectangle_119" width="24" height="24" transform="translate(-4 -4)" fill="none"/>
              <rect id="Rectangle_117" width="11.111" height="2" rx="1" transform="translate(2.445 4.322)" fill="#121212"/>
              <rect id="Rectangle_118" width="11.111" height="2" rx="1" transform="translate(2.445 9.678)" fill="#121212"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
    <div class="info text-white mt-2">
      <h3 class="font-bold flex items-center">
        <span class="mr-2 cursor-pointer" v-if="isEditing" @click.prevent="onRemove">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10,20A10,10,0,0,1,2.926,2.926,10,10,0,0,1,17.074,17.074,9.937,9.937,0,0,1,10,20Zm0-8.59h0L13.59,15,15,13.59,11.41,10,15,6.41,13.59,5,10,8.59,6.41,5,5,6.41,8.59,10,5,13.59,6.41,15,10,11.411Z" transform="translate(0 0)" fill="#ff77a1"/>
          </svg>
        </span>
        <router-link :to="`/playlist/${item.id}`">{{ item.title }}</router-link>
      </h3>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  props: {
    isEditing: {
      type: Boolean,
      default() {
        return false
      }
    },
    type: {
      type: String,
      default() {
        return 'playlist'
      }
    },
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
    onRemove() {
      this.$emit('remove', this.item)
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
