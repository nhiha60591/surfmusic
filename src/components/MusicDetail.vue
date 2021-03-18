<template>
  <div class="container mt-6 mb-6">
    <div class="ml-3 mr-3 ip:ml-16 ip:mr-16 xl:w-6/12 xl:m-auto">
      <div class="h-48 w-48 bg-gray-600 m-auto flex justify-items-center rounded-full items-center">
        <img class="m-auto" src="../assets/img-music.png" alt="">
      </div>
      <p class="mt-4 text-center menu-text font-bold text-white text-lg">Music Name</p>
      <div class="flex justify-items-center">
        <div class="flex m-auto mt-3">
          <p class="artist-name text-lg">3.6</p>
          <img class="ml-2" src="../assets/star.png" alt="">
        </div>
      </div>
      <div class="flex justify-items-center mt-4">
        <a href="#" class="m-auto px-6 py-2 rounded-3xl play-music-detail flex items-center">
          <img class="h-auto" src="../assets/play.png" alt="">
          <p class="blu-text text-lg ml-3 font-medium">PLAY</p>
        </a>
      </div>
      <div class="flex justify-between mt-8">
        <div>
          <img src="../assets/like (2).png" alt="">
          <p class="artist-name">LIKE</p>
        </div>
        <div>
          <img src="../assets/keep.png" alt="">
          <p class="artist-name">KEEP</p>
        </div>
        <div>
          <img src="../assets/offer.png" alt="">
          <p class="artist-name">OFFER</p>
        </div>
      </div>
      <p class="text-white font-bold mt-10">8 Playlists</p>
      <div class="justify-between flex">
        <div class="mt-2 flex flex-wrap">
          <div v-for="n in 8" :key="`list-playlist-${n}`" class="mr-6">
            <img src="../assets/img-music-detail.png" alt="">
            <p class="text-white text-sm">Playli...</p>
          </div>
        </div>
        <p class="blu-text font-bold mt-28 ip:mt-8">MORE</p>
      </div>
      <div class="flex justify-between border-b border-gray-700 py-6">
        <p class="text-white font-bold">12 likes: Matt, Taro, AAA, BBBBB ......</p>
        <p class="blu-text font-bold">MORE</p>
      </div>
      <div v-for="detail in detail"
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
      ]
    }
  }
}
</script>

<style>
.play-music-detail {
  border: 1px solid #4DD0E1;
}
</style>