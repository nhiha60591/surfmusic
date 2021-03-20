<template>
  <div class="mt-6 mb-6">
    <div class="ml-3 mr-3 ip:ml-16 ip:mr-16 xl:w-6/12 xl:m-auto">
      <div class="h-48 w-48 bg-gray-600 m-auto flex justify-items-center rounded-full items-center">
        <img class="m-auto" src="../assets/img-music.png" alt="">
      </div>
      <p class="mt-4 text-center menu-text font-bold text-white text-lg">Music Name</p>
      <div class="flex justify-items-center">
        <div class="flex m-auto mt-3 items-center">
          <p class="artist-name text-lg mr-2">{{ rate }}</p>
          <div class="rate-star">
            <div class="active-star" :style="`width: ${rateWidth}%;`"></div>
          </div>
        </div>
      </div>
      <div class="flex justify-items-center mt-4">
        <a href="#" class="m-auto px-6 py-2 rounded-3xl play-music-detail flex items-center">
          <img class="h-auto" src="../assets/play.png" alt="">
          <p class="blu-text text-lg ml-3 font-medium">PLAY</p>
        </a>
      </div>
      <div class="flex justify-between justify-items-center items-center max-w-xs mt-8 mx-auto">
        <div class="w-1/3 text-center">
          <img src="../assets/like (2).png" alt="" class="mx-auto">
          <p class="artist-name">LIKE</p>
        </div>
        <div class="w-1/3 text-center">
          <img src="../assets/keep.png" alt="" class="mx-auto">
          <p class="artist-name">KEEP</p>
        </div>
        <div class="w-1/3 text-center">
          <img src="../assets/offer.png" alt="" class="mx-auto">
          <p class="artist-name">OFFER</p>
        </div>
      </div>
      <p class="text-white font-bold mt-10">5 Playlists</p>
      <div class="justify-between flex items-center">
        <div class="w-5/6 mt-2 flex flex-wrap -mx-2">
          <div v-for="n in 5" :key="`list-playlist-${n}`" class="w-1/5 px-2">
            <img src="../assets/img-music-detail.png" class="w-full" alt="">
            <p class="text-white text-sm playlist-title">Playlist</p>
          </div>
        </div>
        <p class="w-1/6 blu-text font-bold text-right">MORE</p>
      </div>
      <div class="flex justify-between border-b border-gray-700 py-6" v-if="likes">
        <p class="text-white font-bold">{{ likes.length }} likes: <span v-for="(like, index) in likes" :key="`like-${index}`">{{ like.name + ((likes.length - 1) > index ? ', ' : '') }} </span></p>
        <p class="blu-text font-bold">MORE</p>
      </div>
      <div
        v-for="detail in detail"
        :key="detail.title"
        class="border-b border-gray-700 py-6">
        <p class="artist-name text-sm"> {{ detail.title }} </p>
        <p class="text-white font-bold"> {{ detail.text }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: [
        {
          title: 'Tempo',
          text: 'High',
        },
        {
          title: 'Genre',
          text: 'Rock, Pops, GenreXX',
        },
        {
          title: 'Instulmental',
          text: 'Yes',
        },
        {
          title: 'Co-writer',
          text: 'Writer Name',
        },
        {
          title: 'Manager',
          text: 'Maneger Name',
        },
        {
          title: 'Co-writing Program',
          text: 'Yes',
        },
        {
          title: 'Publisher',
          text: 'XXX Publisher',
        },
        {
          title: 'Comment',
          text: 'comment',
        },
        {
          title: 'Currency',
          text: 'JPY',
        },
        {
          title: 'Royalty Price',
          text: '100,000 JPY',
        },
        {
          title: 'Sellout Price',
          text: '100.000 JPY',
        },
        {
          title: 'Status',
          text: 'Selling',
        },
      ],
      rate: 3.5,
      likes: [
        {
          name: "Matt",
        },
        {
          name: "Taro",
        },
        {
          name: "AAA",
        },
        {
          name: "BBBBBB",
        },
      ],
    }
  },
  computed: {
    rateWidth() {
      return (100 / 5) * this.rate
    },
  }
}
</script>

<style>
  .play-music-detail {
    border: 1px solid #4DD0E1;
  }
  .rate-star {
    background-image: url('../assets/star-gray.png');
    width: 72px;
    height: 14px;
  }
  .active-star {
    background-image: url('../assets/star-yellow.png');
    height: 14px;
  }
  .playlist-title {
    text-overflow: ellipsis;
    font-size: 12px;
    margin-top: 5px;
  }
</style>
