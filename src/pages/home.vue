<template>
  <div class="home relative">
    <div class="flex flex-row justify-between px-2 py-4">
      <h1 class="text-2xl text-white font-bold">My Musics</h1>
      <div class="actions flex">
        <a href="#">
          <svg id="tune" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="tune-white-18dp" opacity="1">
              <path id="Path_91" data-name="Path 91" d="M0,0H24V24H0Z" fill="none"/>
              <path id="Path_92" class="color" data-name="Path 92" d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z" fill="#cdcdcd"/>
            </g>
          </svg>
        </a>
        <a href="#">
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
      <div class="music-item flex w-full mb-1 justify-between" v-for="n in 6" :key="`music-${n}`">
        <div class="music-item-info flex items-center">
          <div class="player-actions">
            <a href="#" class="play-btn rounded-full flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="11.318" height="14.405" viewBox="0 0 11.318 14.405">
                <path id="Path_25" data-name="Path 25" d="M8,5V19.4l11.318-7.2Z" transform="translate(-8 -5)" fill="#fff"/>
              </svg>
            </a>
          </div>
          <div class="music-info text-white pl-4">
            <h3 class="font-bold music-name"><a href="#">My Music Name</a></h3>
            <p><a href="#">Artist Name</a></p>
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
    </div>
    <div class="flat-btn fixed bottom-4 right-4">
      <router-link to="/upload-my-music" class="p-4 rounded-full block">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
          <path id="_Color" data-name=" ↳Color" d="M14,8H8v6H6V8H0V6H6V0H8V6h6Z" fill="rgba(0,0,0,0.87)"/>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
}
</script>

<style scoped>
svg:hover path.color, svg:focus path.color {
  fill: #80DEEA;
}
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
.flat-btn a {
  background: #80DEEA;
}
.music-name {
  font-size: 18px;
}
</style>
