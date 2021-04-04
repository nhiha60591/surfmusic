<template>
  <div class="home relative">
    <div class="flex flex-row justify-between px-4 py-4">
      <h1 class="text-2xl text-white font-bold">{{ playlistGroup.title }}</h1>
      <div class="actions flex">
        <a href="#" @click.prevent="isActions = !isActions" class="md:mr-14 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
            <path id="Path_128" data-name="Path 128" d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z" transform="translate(-10 -4)" fill="#fff"/>
          </svg>
        </a>
      </div>
    </div>
    <draggable v-if="isEditing" class="playlist-items flex w-full flex-wrap px-2" v-model="items" group="playlist-group" @start="drag=true" @end="drag=false">
      <PlaylistItem @remove="removeItem" :is-editing="true" v-for="item in items" :item="item" :key="`playlist-item-${item.id}`"></PlaylistItem>
    </draggable>
    <div v-else class="playlist-items flex w-full flex-wrap px-2">
      <PlaylistItem v-for="item in items" :item="item" :key="`playlist-item-${item.id}`"></PlaylistItem>
    </div>
    <div class="fixed bottom-0 sm:absolute sm:top-12 right-0 sm:right-2 action-box z-50 sm:py-1 sm:rounded" v-show="isActions">
      <ul class="block w-full text-white">
        <li class="mb-2"><button class="focus:outline-none flex flex-row items-center p-2 font-bold w-full" @click.prevent="onEdit"><img src="../assets/icons/edit.png" alt="Edit Playlist" class="mr-2">Edit Playlist Group</button></li>
        <li class="pb-1 md:pb-0 md:mb-2"><button class="focus:outline-none  flex flex-row items-center p-2 font-bold w-full" @click.prevent="onShare"><img src="../assets/icons/share.png" alt="Share Playlist" class="mr-2">Share Playlist Group</button></li>
        <li class="pb-1 md:pb-0 md:mb-2">
          <button class="focus:outline-none delete-item flex flex-row items-center p-2 font-bold w-full" @click.prevent="onDelete">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="24" height="24" viewBox="0 0 24 24">
              <g>
                <path id="Path_146" d="M0,0H24V24H0Z" fill="none"/>
                <path id="Path_147" d="M6,19a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2V7H6ZM19,4H15.5l-1-1h-5l-1,1H5V6H19Z" fill="currentColor"/>
              </g>
            </svg>
            Delete Playlist Group
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PlaylistItem from '../components/PlaylistItem'
import draggable from 'vuedraggable'
import {mapActions} from 'vuex'

export default {
  components: { PlaylistItem, draggable },
  data() {
    return {
      showFilter: false,
      isEditing: false,
      isActions: false,
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
    },
    onEdit() {
      this.isEditing = true
      this.isActions = false
    },
    onShare() {},
    onDelete() {
      this.isEditing = true
      this.isActions = false
    },
    removeItem(item) {
      console.log(item)
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

<style lang="scss" scoped>
  .delete-item {
    color: #FF77A1;
  }
  .action-box {
    width: 100%;
  }
  @media screen and (min-width: 601px) {
    .action-box {
      width: 170px;
    }
  }
</style>
