<template>
  <div class="music-item flex w-full justify-between">
    <div class="music-item-info flex items-center">
      <div class="player-actions">
        <a href="#" class="play-btn rounded-full flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="11.318" height="14.405" viewBox="0 0 11.318 14.405">
            <path id="Path_25" data-name="Path 25" d="M8,5V19.4l11.318-7.2Z" transform="translate(-8 -5)" fill="#fff"/>
          </svg>
        </a>
      </div>
      <div class="music-info text-white pl-4">
        <h3 class="font-bold music-name"><a href="#">{{ music.title }}</a></h3>
        <p><a href="#">{{ music.artist }}</a></p>
      </div>
    </div>
    <div class="music-item-actions flex items-center">
      <a href="#" class="mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
          <path id="Path_128" data-name="Path 128" d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z" transform="translate(-10 -4)" fill="#fff"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    music: {
      type: Object,
      default() {
        return {
          title: 'My Music Name',
          artist: 'Artist Name',
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .music-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border: 1px solid rgba(112, 112, 112, 0.06);
  }
  .play-btn {
    background: rgba(255, 255, 255, 0.2);
    width: 32px;
    height: 32px;
    padding-left: 5px;
  }
  .music-name {
    font-size: 18px;
  }
</style>
