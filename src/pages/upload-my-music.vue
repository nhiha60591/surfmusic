<template>
  <div class="upload-my-music p-4 text-white relative">
    <div class="absolute top-6 right-4">
      <router-link to="/"><img src="../assets/close.svg" alt="Close"></router-link>
    </div>
    <h1 class="text-center mt-10 text-white font-bold text-2xl">Upload My Music</h1>
    <div class="flex w-full justify-center mt-8">
      <img src="../assets/icons/audiotrack-white.svg" class="p-5 bg-gray-600 block rounded-full" width="100" alt="Audio Track" />
    </div>
    <div class="drag-to-upload md:border-dashed md:border-2 md:border-blue-primary md:px-4 md:py-4 mt-14 text-center text-blue-primary" @drop.prevent="addFile" @dragover.prevent>
      <p class="hidden md:block md:py-4">Drag files heres</p>
      <p class="hidden md:block md:py-4">or</p>
      <button class="focus:outline-none block w-full md:inline-block md:w-auto text-center rounded-sm border-2 font-bold border-blue-primary text-blue-primary uppercase py-4 mb-4 px-16" @click.prevent="openFile">Browse Files</button>
    </div>
    <input type="file" name="file" ref="file" multiple @change="fileChanged" id="file" style="opacity: 0; width: 1px; height: 1px; visibility: visible">
    <div class="file-items">
      <div class="file-item w-full" v-for="(file, index) in files" :key="`file-${index}`">
        <div class="flex justify-between">
          <div class="title flex items-center items-center mb-4 font-bold">
            <span class="flex w-8 h-8 rounded-full bg-gray-primary justify-center items-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g opacity="0.87"><path d="M0,0H24V24H0Z" fill="none"/><path d="M12,3v9.28A4.39,4.39,0,0,0,10.5,12a4.5,4.5,0,1,0,4.45,5H15V6h4V3Z" fill="#fff"/></g></svg>
            </span>
            {{ file.name }}
          </div>
          <div class="actions">
            <button @click.prevent="removeFile(index)">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                <path id="Path_154" data-name="Path 154" d="M26,7.115,23.885,5,15.5,13.385,7.115,5,5,7.115,13.385,15.5,5,23.885,7.115,26,15.5,17.615,23.885,26,26,23.885,17.615,15.5Z" transform="translate(-5 -5)" fill="#fff"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="mb-4">
          <TextField label="Music Name" v-model="form.names[index]"></TextField>
        </div>
      </div>
    </div>
    <div class="my-3" v-if="!files || files.length < 1">
      <TextField label="Music Name"></TextField>
    </div>
    <div class="my-3">
      <SelectField label="Type" :items="[{value: 1, label: 'Tempo'}]"></SelectField>
    </div>
    <div class="my-3">
      <h4 class="font-bold my-4">Genre</h4>
      <div class="genre-box flex flex-wrap">
        <CheckField v-for="genre in genres" :key="`genre-${genre}`" class="w-1/2" :label="genre" :value="genre" v-model="form.genre"></CheckField>
      </div>
    </div>
    <div class="my-3">
      <h4 class="font-bold my-4">Instulmental</h4>
      <label class="ml-6 mr-8 uppercase">
        Yes
        <input type="radio" checked name="instulmental">
        <span class="checkmark"></span>
      </label>
      <label class="uppercase">
        No
        <input type="radio" name="instulmental">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="my-3">
      <TextField label="Co-Producer"></TextField>
    </div>
    <div class="my-3">
      <TextField label="Manager"></TextField>
    </div>
    <div class="my-3">
      <h4 class="font-bold my-4">Co-writing Program</h4>
      <label class="ml-6 mr-8 uppercase">
        Yes
        <input type="radio" checked name="coWriting">
        <span class="checkmark"></span>
      </label>
      <label class="uppercase">
        No
        <input type="radio" name="coWriting">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="my-3">
      <TextField label="Publisher"></TextField>
    </div>
    <div class="my-3">
      <TextareaField label="Comment"></TextareaField>
    </div>
    <div class="my-3">
      <h4 class="font-bold my-4">Currency</h4>
      <label class="ml-6 mr-8 uppercase">
        JPY
        <input type="radio" checked name="currency">
        <span class="checkmark"></span>
      </label>
      <label class="uppercase">
        USD
        <input type="radio" name="currency">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="my-3">
      <TextField label="Royalty price"></TextField>
    </div>
    <div class="my-3">
      <TextField label="Sellout price"></TextField>
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
import CheckField from "@/components/form-fields/CheckField";
import TextField from '@/components/form-fields/TextField'
import SelectField from '@/components/form-fields/SelectField'
import TextareaField from '@/components/form-fields/TextareaField'

export default {
  components: {CheckField, TextField, SelectField, TextareaField},
  data() {
    return {
      files: [],
      genres: ['Pops', 'Ballad', 'Eurobeat', 'Dance', 'Bossa nova', 'Hip hop', 'New wave', 'GenreXXXXXXXXXXX', 'GenreYY', 'GenreZZ', 'GenreAA'],
      form: {
        genre: ['Pops', 'Eurobeat'],
        names: [],
      }
    }
  },
  methods: {
    ...mapActions('app', ['setShowHeader', 'setShowFlatButton']),
    addFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      ([...droppedFiles]).forEach(f => {
        this.files.push(f);
        this.form.names.push(f.name)
      });
    },
    openFile() {
      this.$refs.file.click()
    },
    removeFile(index){
      this.files.splice(index, 1)
      this.form.names.splice(index, 1)
    },
    fileChanged(event) {
      let changedFiles = event.target.files;
      if (!changedFiles) return;
      ([...changedFiles]).forEach(f => {
        this.files.push(f);
        this.form.names.push(f.name)
      });
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
  .title {
    color: #707070;
  }
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
