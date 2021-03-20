<template>
  <div class="home relative">
    <div v-if="!showFilter">
      <div class="flex flex-row justify-between p-4">
        <h1 class="text-2xl text-white font-bold">Home</h1>
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
      <div class="music-items">
        <div class="hidden md:flex bg-black w-full justify-between items-center py-2">
          <div class="w-2/6 text-white text-opacity-60 text-center font-semibold">Title</div>
          <div class="w-1/6 text-white text-opacity-60 text-center font-semibold">Tempo</div>
          <div class="w-1/6 text-white text-opacity-60 text-center font-semibold">Genre</div>
          <div class="w-1/6 text-white text-opacity-60 text-center font-semibold">Star</div>
          <div class="w-1/6 text-white text-opacity-60 text-center font-semibold"></div>
        </div>
        <MusicItem class="mb-1" v-for="n in 6" :key="`music-${n}`"></MusicItem>
      </div>
    </div>
    <FilterForm :show="showFilter" @close="closeFilter"></FilterForm>
  </div>
</template>

<script>
import MusicItem from '../components/MusicItem'
import FilterForm from '../components/FilterForm'

export default {
  components: { MusicItem, FilterForm },
  data() {
    return {
      showFilter: false,
    }
  },
  methods: {
    closeFilter() {
      this.showFilter = false
    }
  },
}
</script>

<style scoped>
svg:hover path.color, svg:focus path.color {
  fill: #80DEEA;
}
</style>
