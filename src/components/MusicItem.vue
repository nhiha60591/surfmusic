<template>
  <div class="music-item flex w-full justify-between" :class="{'is-playing': music.isPlaying}">
    <div class="music-item-info flex items-center pl-1">
      <div class="w-3" v-if="showDot">
        <svg v-if="!music.isPlayed" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6">
          <circle id="Ellipse_61" data-name="Ellipse 61" cx="3" cy="3" r="3" fill="#80deea"/>
        </svg>
      </div>
      <div class="player-actions">
        <a v-if="!music.isPlaying" href="#" class="play-btn rounded-full flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="11.318" height="14.405" viewBox="0 0 11.318 14.405">
            <path id="Path_25" data-name="Path 25" d="M8,5V19.4l11.318-7.2Z" transform="translate(-8 -5)" fill="#fff"/>
          </svg>
        </a>
        <a v-else href="#" class="pause-btn rounded-full flex justify-center items-center">
          <svg id="pause-white-18dp" xmlns="http://www.w3.org/2000/svg" width="28.8" height="28.8" viewBox="0 0 28.8 28.8">
            <path id="Path_74" data-name="Path 74" d="M0,0H28.8V28.8H0Z" fill="none"/>
            <path id="Path_75" data-name="Path 75" d="M6,21.8h4.8V5H6ZM15.6,5V21.8h4.8V5Z" transform="translate(1.2 1)" fill="#80deea"/>
          </svg>
        </a>
      </div>
      <div class="music-info text-white pl-4">
        <h3 class="font-bold music-name"><a href="#">{{ music.title }}</a></h3>
        <p><a href="#" class="artist-name">{{ music.artist }}</a></p>
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
    showDot: {
      type: Boolean,
      default() {
        return false
      }
    },
    music: {
      type: Object,
      default() {
        return {
          title: 'My Music Name',
          artist: 'Artist Name',
          isPlaying: false,
          isPlayed: true,
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
    &.is-playing {
      background: rgba(77, 208, 225, 0.2);
    }
  }
  .play-btn {
    background: rgba(255, 255, 255, 0.2);
    width: 32px;
    height: 32px;
    padding-left: 5px;
  }
  .pause-btn {
    background: rgba(255, 255, 255, 0.2);
    width: 32px;
    height: 32px;
  }
  .music-name {
    font-size: 18px;
    &:hover {
      color: darken(#FFF, 20);
    }
  }
  .artist-name {
    color: #A6A6A6;
    &:hover {
      color: darken(#A6A6A6, 20);
    }
  }
</style>
