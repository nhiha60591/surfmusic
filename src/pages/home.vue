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

      <div class="flex justify-between items-center p-4">
        <h2 class="font-bold text-white">Playlist Group</h2>
        <a href="#" class="text-blue-primary uppercase font-bold">More</a>
      </div>

      <VueSlickCarousel v-bind="settings" class="playlist-items flex w-full flex-wrap px-2">
        <PlaylistItem type="group" :item="item" v-for="item in playlistGroups" :key="`playlist-item-${item.id}`"></PlaylistItem>
      </VueSlickCarousel>

      <div class="flex justify-between items-center p-4">
        <h2 class="font-bold text-white">Playlist</h2>
        <a href="#" class="text-blue-primary uppercase font-bold">More</a>
      </div>

      <VueSlickCarousel v-bind="settings" class="playlist-items flex w-full flex-wrap px-2">
        <PlaylistItem v-for="n in 10" :key="`playlist-item-${n}`"></PlaylistItem>
      </VueSlickCarousel>
    </div>
    <FilterForm :show="showFilter" @close="closeFilter"></FilterForm>
  </div>
</template>

<script>
import FilterForm from '../components/FilterForm'
import PlaylistItem from '../components/PlaylistItem'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { FilterForm, PlaylistItem, VueSlickCarousel },
  data() {
    return {
      showFilter: false,
      playlistGroups: [
        {
          id: 1,
          title: "Playlist Group 1",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 2,
          title: "Playlist Group 2",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 3,
          title: "Playlist Group 3",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 4,
          title: "Playlist Group 4",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 5,
          title: "Playlist Group 5",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 6,
          title: "Playlist Group 6",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        },
        {
          id: 7,
          title: "Playlist Group 7",
          image: `https://fakeimg.pl/350x${Math.floor(Math.random() * (350 - 200) + 200)}/?text=Surf Music`,
        }
      ],
    }
  },
  computed: {
    settings() {
      return {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
        ],
      }
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
