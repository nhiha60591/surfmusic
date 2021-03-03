<template>
  <div class="account relative w-full">
    <div class="flex flex-row justify-between p-4 w-full">
      <h1 class="text-2xl text-white font-bold">Account</h1>
    </div>
    <div class="navigation px-4 mb-4">
      <ul class="flex text-white">
        <li class="mr-2">
          <router-link to="/account/basic"
                       class="font-bold border-2 border-transparent border-t-0 border-l-0 border-r-0 pb-2 px-4">
            Base Data
          </router-link>
        </li>
        <li class="mr-2">
          <router-link to="/account/profile"
            class="font-bold border-2 border-blue-primary border-t-0 border-l-0 border-r-0 pb-2 px-4">
            Profile
          </router-link>
        </li>
      </ul>
    </div>
    <div class="form-fields p-4">
      <TextField v-model="form.website" label="Website" class="mb-4"></TextField>
      <TextareaField v-model="form.name" label="Biography" class="mb-4"></TextareaField>
      <h4 class="mt-8 mb-2 text-white">Discography</h4>
      <div class="discography">
        <div class="item rounded mb-4" v-for="n in 2" :key="n">
          <div class="flex flex justify-between">
            <div class="left flex items-end">
              <img src="../../assets/discography-img.jpg" alt="Discography Item">
              <label class="ml-2 cursor-pointer flex">
                <svg id="create-white-18dp_2_" data-name="create-white-18dp (2)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path id="Path_144" data-name="Path 144" d="M0,0H24V24H0Z" fill="none"/>
                  <path id="Path_145" data-name="Path 145" d="M3,17.25V21H6.75L17.81,9.94,14.06,6.19ZM20.71,7.04a1,1,0,0,0,0-1.41L18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75,1.83-1.83Z" fill="#80deea"/>
                </svg>
                <input type="file" class="w-1 h-1 opacity-0">
              </label>
            </div>
            <div class="right">
              <div class="flex items-center">
                <button type="button" class="mr-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8">
                    <path id="Path_148" data-name="Path 148" d="M8,5V21l8-8Z" transform="translate(21 -8) rotate(90)" fill="#fff" opacity="0.6"/>
                  </svg>
                </button>
                <button type="button" class="mr-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8">
                    <path id="Path_149" data-name="Path 149" d="M8,5V21l8-8Z" transform="translate(-5 16) rotate(-90)" fill="#fff" opacity="0.6"/>
                  </svg>
                </button>
                <button class="focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="delete-white-18dp_1_" data-name="delete-white-18dp (1)" opacity="0.6">
                      <path id="Path_146" data-name="Path 146" d="M0,0H24V24H0Z" fill="none"/>
                      <path id="Path_147" data-name="Path 147" d="M6,19a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2V7H6ZM19,4H15.5l-1-1h-5l-1,1H5V6H19Z" fill="#fff"/>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="link w-full pt-2">
            <label class="text-white">
              Link
              <input type="text" class="flex w-full py-2 px-4 border border-gray-primary bg-transparent rounded mt-2">
            </label>
          </div>
        </div><!-- END .item -->
      </div>
      <div class="actions pt-12">
        <button
          class="border-2 focus:outline-none bg-blue-primary border-blue-primary rounded block text-center py-4 w-full uppercase text-black font-bold">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "@/components/form-fields/TextField";
import TextareaField from "@/components/form-fields/TextareaField";
import UserResource from '@/api/user';
const userResource = new UserResource();

export default {
  components: {TextField, TextareaField},
  data() {
    return {
      form: {}
    }
  },
  created() {
    this.getUserProfile()
  },
  methods: {
    async getUserProfile() {
      try {
        let { data } = await userResource.get(1)
        this.form = data
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  .item {
    background: #252525;
    padding: 1rem;
  }
</style>
