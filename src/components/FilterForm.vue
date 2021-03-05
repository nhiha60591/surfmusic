<template>
  <div class="p-4 text-white relative" v-if="show">
    <div class="absolute top-6 right-4">
      <button @click="onClose"><img src="../assets/close.svg" alt="Close"></button>
    </div>
    <div class="add-music-form pt-10 pb-4">
      <h1 class="text-center text-white font-bold text-2xl mb-4">Order</h1>
      <SelectField label="Playlist" :items="orderItems"></SelectField>
    </div>
    <div class="add-music-form pt-2 pb-4">
      <h1 class="text-center text-white font-bold text-2xl mb-4">Filter</h1>
      <TextField label="Keyword" v-model="form.keyword"></TextField>
      <SelectField label="Genre" :items="genreItems" class="mt-4"></SelectField>
      <SelectField label="Star" :items="genreItems" class="mt-4"></SelectField>
      <SelectField label="Label" :items="genreItems" class="mt-4"></SelectField>
      <SelectField label="Label" :items="genreItems" class="mt-4"></SelectField>
    </div>

    <div class="mt-6 flex">
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
import TextField from './form-fields/TextField'
import SelectField from './form-fields/SelectField'
import {mapActions} from 'vuex'

export default {
  components: { TextField, SelectField },
  props: {
    show: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      form: {
        keyword: 'Keyword enterred'
      }
    }
  },
  watch: {
    show() {
      if (this.show) {
        this.setShowHeader(false)
        this.setShowFlatButton(false)
      } else {
        this.setShowHeader(true)
        this.setShowFlatButton(true)
      }
    },
  },
  computed: {
    orderItems() {
      return [
        {
          value: 1,
          label: 'Playlist'
        }
      ]
    },
    genreItems() {
      return [
        {
          value: 1,
          label: 'Inst'
        }
      ]
    },
  },
  methods: {
    ...mapActions('app', ['setShowHeader', 'setShowFlatButton']),
    onOK() {
      this.$emit('close')
    },
    onCancel() {
      this.$emit('close')
    },
    onClose() {
      this.$emit('close')
    }
  },
  mounted() {
    if (this.show) {
      this.setShowHeader(false)
      this.setShowFlatButton(false)
    }
  },
  beforeDestroy() {
    this.setShowHeader(true)
    this.setShowFlatButton(true)
  }
}
</script>

<style lang="scss">
  input.search {
    background-image: url('../assets/icons/search-icon@2x.png');
    background-position-x: 5%;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: 20px;
    padding-left: 60px;
  }
</style>
