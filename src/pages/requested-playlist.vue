<template>
  <div class="home relative">
    <div v-if="!showFilter">
      <div class="flex flex-row justify-between px-4 py-4">
        <h1 class="text-2xl text-white font-bold">Requested Playlist</h1>
        <div class="actions flex">
          <a href="#" @click.prevent="showFilter = !showFilter">
            <svg id="tune" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g id="tune-white-18dp" opacity="1">
                <path id="Path_91" data-name="Path 91" d="M0,0H24V24H0Z" fill="none"/>
                <path id="Path_92" class="color" data-name="Path 92" d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z" fill="#cdcdcd"/>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="requested-playlist-info flex flex-col w-full md:w-1/2 flex-wrap px-4 text-white">
          <div class="rounded-lg overflow-hidden">
            <router-link :to="`/requested-playlist-detail/1`">
              <img src="../assets/requested-playlist.jpg" class="w-full rounded-lg overflow-hidden" alt="Requested Playlist" />
            </router-link>
          </div>
          <h2 class="my-2 font-bold"><router-link :to="`/requested-playlist-detail/1`">Requested Playlist</router-link></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p class="my-2">
            <span class="time start">2020.10.10</span> - <span class="time end">2020.12.12</span>
          </p>
        </div>
        <div class="hidden requested-playlist-info md:flex flex-col w-full md:w-1/2 flex-wrap px-4 text-white">
          <div class="rounded-lg overflow-hidden">
            <router-link :to="`/requested-playlist-detail/1`">
              <img src="../assets/requested-playlist.jpg" class="w-full rounded-lg overflow-hidden" alt="Requested Playlist" />
            </router-link>
          </div>
          <h2 class="my-2 font-bold"><router-link :to="`/requested-playlist-detail/1`">Requested Playlist</router-link></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p class="my-2">
            <span class="time start">2020.10.10</span> - <span class="time end">2020.12.12</span>
          </p>
        </div>
      </div>
      <div class="playlist-items flex w-full flex-wrap px-2">
        <div class="playlist-item w-1/2 md:w-1/4 p-2" v-for="item in items" :key="`item-${item.id}`">
          <div class="img-item rounded-md relative overflow-hidden">
            <router-link :to="`/requested-playlist-detail/${item.id}`">
              <img src="../assets/requested-item-1.jpg" class="w-full block" alt="Playlist Name">
            </router-link>
          </div>
          <div class="requested-playlist-info text-white mt-2">
            <h3 class="font-bold"><router-link :to="`/requested-playlist-detail/${item.id}`">Requested Playlist</router-link></h3>
            <p class="my-2">
              <span class="time start text-sm">2020.10.10</span> - <span class="time end text-sm">2020.12.12</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <FilterForm :show="showFilter" @close="closeFilter"></FilterForm>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FilterForm from '../components/FilterForm'

export default {
  components: { FilterForm },
  data() {
    return {
      showFilter: false,
      items: [
        {
          id: 1,
          title: "Requested Playlist",
          image: "assets/requested-item-1.jpg",
          start: "2020.10.10",
          end: "2020.12.12"
        },
        {
          id: 2,
          title: "Requested Playlist",
          image: "assets/requested-item-2.jpg",
          start: "2020.10.10",
          end: "2020.12.12"
        },
        {
          id: 3,
          title: "Requested Playlist",
          image: "assets/requested-item-2.jpg",
          start: "2020.10.10",
          end: "2020.12.12"
        },
        {
          id: 4,
          title: "Requested Playlist",
          image: "assets/requested-item-2.jpg",
          start: "2020.10.10",
          end: "2020.12.12"
        },
      ],
    }
  },
  methods: {
    ...mapActions('app', ['setFlatButtonUrl', 'setShowFlatButton']),
    closeFilter() {
      this.showFilter = false
    }
  },
  created() {
    this.setFlatButtonUrl('/create-playlist')
    this.setShowFlatButton(false)
  },
  mounted() {
    this.setFlatButtonUrl('/create-playlist')
    this.setShowFlatButton(false)
  },
  beforeDestroy() {
    this.setFlatButtonUrl('/upload-my-music')
    this.setShowFlatButton(true)
  }
}
</script>

<style lang="scss" scoped>
  .requested-playlist-info {
    p, span {
      color: #A0A0A0;
    }
  }
</style>
