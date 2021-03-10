<template>
  <div class="music-item flex w-full justify-between relative" :class="{'is-playing': music.isPlaying}" v-click-outside="clickOutSide">
    <div class="music-item-info flex items-center pl-1 md:w-2/6">
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
        <h3 class="font-bold music-name"><button class="focus:outline-none">{{ music.title }}</button></h3>
        <p><button class="artist-name focus:outline-none">{{ music.artist }}</button></p>
      </div>
    </div>
    <div class="tempo items-center justify-center hidden md:flex text-white md:w-1/6">
      Mid
    </div>
    <div class="genre items-center justify-center hidden md:flex text-white md:w-1/6">
      Live sounds, Pop
    </div>
    <div class="genre items-center justify-center hidden md:flex text-white md:w-1/6">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" width="16" height="16" viewBox="0 0 16 16">
        <g opacity="0.87">
          <path data-name="Path 16" d="M0,0H16V16H0Z" fill="none"/>
          <path data-name="Path 17" d="M8,10.841,11.708,13l-.984-4.07L14,6.192,9.686,5.838,8,2,6.314,5.838,2,6.192,5.276,8.93,4.292,13Z" fill="#fff"/>
        </g>
      </svg>
      4.2
    </div>
    <div class="music-item-actions flex items-center md:w-1/6 md:justify-end">
      <template v-if="addable">
        <button class="rounded-full px-5 py-2 add-btn uppercase font-bold" v-if="!music.isAdded">Add</button>
        <img v-else src="../assets/icons/checked@2x.png" width="18" class="mr-6" alt="">
      </template>
      <template v-else>
        <button class="focus:outline-none px-4 cursor-pointer z-10 relative" @click.prevent="onShare">
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16">
            <path id="Path_128" data-name="Path 128" d="M12,8a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,8Zm0,2a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2.006,2.006,0,0,0,12,16Z" transform="translate(-10 -4)" fill="#fff"/>
          </svg>
        </button>
        <div class="fixed bottom-0 sm:absolute sm:top-12 right-0 sm:right-2 action-box z-50 sm:py-1 sm:rounded" v-show="shareOpen">
          <ul class="block w-full text-white">
            <li class="mb-2"><button class="focus:outline-none flex flex-row items-center p-2 font-bold w-full" @click.prevent="onShare"><img src="../assets/icons/edit.png" alt="Edit Playlist" class="mr-2">Edit Playlist</button></li>
            <li class="pb-1 md:pb-0 md:mb-2"><button class="focus:outline-none  flex flex-row items-center p-2 font-bold w-full" @click.prevent="onShare"><img src="../assets/icons/share.png" alt="Share Playlist" class="mr-2">Share Playlist</button></li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import {mapActions} from 'vuex'

export default {
  props: {
    showDot: {
      type: Boolean,
      default() {
        return false
      }
    },
    addable: {
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
          isAdded: false
        }
      }
    }
  },
  data() {
    return {
      shareOpen: false,
    }
  },
  methods: {
    ...mapActions('app', ['setFlatButtonClass']),
    onShare() {
      this.shareOpen = !this.shareOpen
      if (this.shareOpen) {
        this.setFlatButtonClass('bottom-22 right-4')
      } else {
        this.setFlatButtonClass('bottom-4 right-4')
      }
    },
    clickOutSide() {
      if (this.shareOpen === true) {
        this.shareOpen = false
      }
      if (this.shareOpen) {
        this.setFlatButtonClass('bottom-22 right-4')
      } else {
        this.setFlatButtonClass('bottom-4 right-4')
      }
    },
  },
  directives: {
    ClickOutside
  },
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
    .action-box {
      width: 100%;
    }
  }
  @media screen and (min-width: 601px) {
    .music-item {
      .action-box {
        width: 170px;
      }
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
  .add-btn {
    background: #344749;
    color: #80DEEA;
  }
</style>
