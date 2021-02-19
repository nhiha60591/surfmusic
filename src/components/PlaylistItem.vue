<template>
  <div class="playlist-item w-1/2 md:w-1/4 p-2">
    <div class="img-item rounded-md relative overflow-hidden">
      <router-link :to="`/playlist/${item.id}`">
        <img src="../assets/pexels-photo-3769099.png" class="w-full block" alt="Playlist Name">
      </router-link>
      <div class="actions absolute right-2 top-2 rounded-full bg-black w-10 h-10 flex justify-center items-center">
        <a href="#"><img src="../assets/share-btn.png" alt="Share"></a>
      </div>
    </div>
    <div class="info text-white mt-2">
      <h3 class="font-bold"><router-link :to="`/playlist/${item.id}`">Playlist Name</router-link></h3>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
  .playlist-item {
    h3 {
      font-size: 16px;
    }
    .actions {
      display: none;
    }
    &:hover {
      .actions {
        display: flex;
      }
    }
  }
</style>
