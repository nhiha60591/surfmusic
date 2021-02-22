<template>
  <div class="upload-my-music p-4 text-white relative">
    <div class="absolute top-6 right-4">
      <router-link to="/"><img src="../assets/close.svg" alt="Close"></router-link>
    </div>
    <h1 class="text-center text-white font-bold text-2xl">Upload My Music</h1>
    <div class="flex w-full justify-center mt-8">
      <img src="../assets/icons/audiotrack-white.svg" class="p-5 bg-gray-600 block rounded-full" width="100" alt="Audio Track" />
    </div>
    <input type="file" name="file" ref="file" id="file" style="opacity: 0;">
    <button class="block focus:outline-none w-full text-center rounded-sm border-2 font-bold border-blue-primary text-blue-primary uppercase py-4 mb-4" @click.prevent="openFile">Upload music file</button>
    <div class="my-3">
      <input type="text" class="input-bg p-4 w-full rounded rounded-b-none" placeholder="Music Name" />
    </div>
    <div class="my-3">
      <select class="input-bg p-4 w-full rounded rounded-b-none text-white">
        <option>Tempo</option>
      </select>
    </div>
    <div class="my-3">
      <select class="input-bg p-4 w-full rounded rounded-b-none text-white">
        <option>Genre</option>
      </select>
    </div>
    <div class="my-3">
      <h4 class="font-bold my-4">Instulmental</h4>
      <label class="ml-6 mr-8">
        Yes
        <input type="radio" checked name="instulmental">
        <span class="checkmark"></span>
      </label>
      <label>
        No
        <input type="radio" name="instulmental">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="my-3">
      <input type="text" class="input-bg p-4 w-full rounded rounded-b-none" placeholder="Co-Producer" />
    </div>
    <div class="my-3">
      <input type="text" class="input-bg p-4 w-full rounded rounded-b-none" placeholder="Manager" />
    </div>
    <div class="my-3">
      <h4 class="font-bold my-4">Co-writing Program</h4>
      <label class="ml-6 mr-8">
        Yes
        <input type="radio" checked name="coWriting">
        <span class="checkmark"></span>
      </label>
      <label>
        No
        <input type="radio" name="coWriting">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="my-3">
      <input type="text" class="input-bg p-4 w-full rounded rounded-b-none" placeholder="Publisher" />
    </div>
    <div class="my-3">
      <textarea type="text" class="input-bg p-4 w-full rounded rounded-b-none" placeholder="Comment"></textarea>
    </div>
    <div class="my-3">
      <h4 class="font-bold my-4">Currency</h4>
      <label class="ml-6 mr-8">
        JPY
        <input type="radio" checked name="currency">
        <span class="checkmark"></span>
      </label>
      <label>
        USD
        <input type="radio" name="currency">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="my-3">
      <input type="text" class="input-bg p-4 w-full rounded rounded-b-none" placeholder="Royalty price" />
    </div>
    <div class="my-3">
      <input type="text" class="input-bg p-4 w-full rounded rounded-b-none" placeholder="Sellout price" />
    </div>
    <div class="my-4 flex justify-between">
      <strong class="font-bold">Status</strong>
      <span>Selling</span>
    </div>
    <div class="mt-8 flex">
      <div class="w-1/2 pr-1">
        <button @click.prevent="onCancel" class="border-2 focus:outline-none border-blue-primary rounded block text-center py-4 w-full uppercase text-blue-primary font-bold">Cancel</button>
      </div>
      <div class="w-1/2 pl-1">
        <button @click.prevent="onOK" class="border-2 focus:outline-none bg-blue-primary border-blue-primary rounded block text-center py-4 w-full uppercase text-black font-bold">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "upload-my-music",
  methods: {
    ...mapActions('app', ['setShowHeader', 'setShowFlatButton']),
    openFile() {
      this.$refs.file.click()
    },
    onOK() {
      this.$router.push('/confirm-form')
    },
    onCancel() {
      this.$router.push('/')
    }
  },
  created() {
    this.setShowHeader(false)
    this.setShowFlatButton(false)
  },
  mounted() {
    this.setShowHeader(false)
    this.setShowFlatButton(false)
  },
  beforeDestroy() {
    this.setShowHeader(true)
    this.setShowFlatButton(true)
  }
}
</script>

<style lang="scss" scoped>
  .input-bg {
    outline: none;
    background-color: rgba(255, 255, 255, 0.12);
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  select {
    color: rgba(255, 255, 255, 0.6);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    background-image: url("../assets/dropdown-icon.svg");
    background-repeat: no-repeat;
    background-position: 97% 49%;
    option {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  label {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-transform: uppercase;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }
  .checkmark {
    position: absolute;
    top: 2px;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #eee;
    border-radius: 50%;
  }
  label:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  label input:checked ~ .checkmark {
    background-color: #03DAC5;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
  }

  /* Show the checkmark when checked */
  label input:checked ~ .checkmark:after {
    background-color: #03DAC5;
  }

  /* Style the checkmark/indicator */
  label .checkmark:after {
    left: 2px;
    top: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid #000;
    background-color: #000;
  }
</style>
