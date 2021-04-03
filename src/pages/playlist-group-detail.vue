<template>
  <div class="home relative">
    <div v-if="!showFilter">
      <div class="flex flex-row justify-between px-4 py-4">
        <h1 class="text-2xl text-white font-bold">{{ playlistGroup.title }}</h1>
        <div class="actions flex">
          <a href="#" @click.prevent="showFilter = !showFilter" class="md:mr-14">
            <svg id="tune" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g id="tune-white-18dp" opacity="1">
                <path id="Path_91" data-name="Path 91" d="M0,0H24V24H0Z" fill="none"/>
                <path id="Path_92" class="color" data-name="Path 92" d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z" fill="#cdcdcd"/>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <draggable class="playlist-items flex w-full flex-wrap px-2" v-model="items" group="people" @start="drag=true" @end="drag=false">
        <PlaylistItem v-for="item in items" :item="item" :key="`playlist-item-${item.id}`"></PlaylistItem>
      </draggable>
    </div>
    <FilterForm :show="showFilter" @close="closeFilter"></FilterForm>
  </div>
</template>

<script>
import FilterForm from '../components/FilterForm'
import PlaylistItem from '../components/PlaylistItem'
import draggable from 'vuedraggable'

import {mapActions} from 'vuex'

export default {
  components: { FilterForm, PlaylistItem, draggable },
  data() {
    return {
      showFilter: false,
      playlistGroup: {
        id: 1,
        title: 'Playlist Group 1'
      },
      items: [
        {
          id: 1,
          order: 1,
          title: "Playlist Group 1",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 2,
          order: 2,
          title: "Playlist Group 2",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 3,
          order: 3,
          title: "Playlist Group 3",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 4,
          order: 4,
          title: "Playlist Group 4",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 5,
          order: 5,
          title: "Playlist Group 5",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 6,
          order: 6,
          title: "Playlist Group 6",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 7,
          order: 7,
          title: "Playlist Group 7",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        }
      ]
    }
  },
  methods: {
    ...mapActions('app', ['setFlatButtonUrl']),
    closeFilter() {
      this.showFilter = false
    }
  },
  created() {
    this.setFlatButtonUrl('/create-playlist')
  },
  mounted() {
    this.setFlatButtonUrl('/create-playlist')
  },
  beforeDestroy() {
    this.setFlatButtonUrl('/upload-my-music')
  }
}
</script>

<style scoped>

</style>
