<template>
  <div class="upload-my-music p-4 text-white relative">
    <div class="absolute top-4 right-4">
      <router-link to="/upload-my-music"><img src="../assets/close.svg" alt="Close"></router-link>
    </div>
    <h1 class="text-center text-white font-bold text-2xl">Consent form</h1>
    <div class="my-2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div class="my-4">
      <label>
        I agree to the terms and upload the file.
        <input type="checkbox" checked name="term">
        <span class="checkmark"></span>
      </label>
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
  methods: {
    ...mapActions('app', ['setShowHeader', 'setShowFlatButton']),
    openFile() {
      this.$refs.file.click()
    },
    onOK() {
      this.$router.push('/')
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
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
    top: 4px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 3px;
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
    left: 7px;
    top: 4px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
