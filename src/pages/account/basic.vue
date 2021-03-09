<template>
  <div class="account relative w-full">
    <div class="flex flex-row justify-between p-4 w-full">
      <h1 class="text-2xl text-white font-bold">Account</h1>
    </div>
    <div class="navigation px-4 mb-4">
      <ul class="flex text-white">
        <li class="mr-2"><router-link to="/account/basic" class="font-bold border-2 border-blue-primary border-t-0 border-l-0 border-r-0 pb-2 px-4">Base Data</router-link></li>
        <li class="mr-2"><router-link to="/account/profile" class="font-bold border-2 border-transparent border-t-0 border-l-0 border-r-0 pb-2 px-4">Profile</router-link></li>
      </ul>
    </div>
    <div class="form-fields p-4">
      <div class="avatar pb-8 flex w-full justify-center items-center">
        <img src="../../assets/avatar.svg" class="rounded-full overflow-hidden" alt="">
      </div>
      <TextField v-model="form.email" label="Email" class="mb-4"></TextField>
      <TextField v-model="form.name" label="Name" class="mb-4"></TextField>
      <SelectField v-model="form.type" label="Account Type" class="mb-4" :items="items"></SelectField>
      <SelectField v-model="form.language" label="Language" class="mb-4"></SelectField>
      <TextField v-model="form.password" type="password" label="Password" class="mb-4"></TextField>
      <SelectField v-model="form.plan" label="Language" class="mb-4"></SelectField>
      <div class="actions pt-12">
        <button class="border-2 focus:outline-none bg-blue-primary border-blue-primary rounded block text-center py-4 w-full uppercase text-black font-bold">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "@/components/form-fields/TextField";
import SelectField from "@/components/form-fields/SelectField";
import {mapActions} from "vuex";

export default {
  components: { TextField, SelectField },
  data() {
    return {
      form: {}
    }
  },
  computed: {
    items() {
      return [
        {
          label: "Staff",
          value: 1
        },
        {
          label: "Producer",
          value: 2
        },
        {
          label: "Manager",
          value: 3
        },
        {
          label: "Member",
          value: 4
        },
      ]
    }
  },
  methods: {
    ...mapActions('app', ['setShowFlatButton']),
  },
  created() {
    this.setShowFlatButton(false)
  },
  mounted() {
    this.setShowFlatButton(false)
  },
  beforeDestroy() {
    this.setShowFlatButton(true)
  },
}
</script>

<style lang="scss" scoped>

</style>
