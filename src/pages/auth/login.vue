<template>
  <div class="auth-page flex items-center h-screen items-center">
    <div class="flex w-full flex-col">
      <Logo />
      <form @submit.prevent="onLogin" method="post" class="w-full lg:w-1/3 mx-auto px-4" autocomplete="off">
        <h2 class="text-2xl font-bold text-white mb-2 mt-6 text-center">Login</h2>
        <div class="form-item mt-2 pt-4">
          <input
            type="text"
            v-model="form.email"
            class="bg-transparent border text-white border-gray-primary focus:border-blue-primary w-full px-4 py-4 rounded"
            placeholder="Account" />
        </div>
        <div class="form-item mt-4">
          <input
            type="password"
            v-model="form.password"
            class="bg-transparent border  text-white border-gray-primary focus:border-blue-primary w-full px-4 py-4 rounded"
            placeholder="Password" />
        </div>
        <div class="form-actions flex justify-center pt-4">
          <button type="submit" class="px-8 py-4 uppercase bg-blue-primary rounded mt-4 text-black font-bold" @click.prevent="onLogin">Login</button>
        </div>
        <div class="form-actions flex justify-center pt-4">
          <router-link to="/forgot-password" class="uppercase font-bold text-blue-primary">Forget Password</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from '../../components/Logo'
import {mapActions} from 'vuex'

export default {
  components: { Logo },
  data() {
    return {
      form: {}
    }
  },
  methods: {
    ...mapActions('user', ['setToken', 'setRole']),
    async onLogin() {
      try {
        await this.setToken('eyJhbGciOiJSUzI1NiIsImtpZCI6IjYxMDgzMDRiYWRmNDc1MWIyMWUwNDQwNTQyMDZhNDFkOGZmMWNiYTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXVsbGlvbi0tLWhvc3QiLCJhdWQiOiJtdWxsaW9uLS0taG9zdCIsImF1dGhfdGltZSI6MTYxMzU1MTE0NCwidXNlcl9pZCI6IkxaZ3EwMWtTQ09UWXNHZFJVVHFUcHJDS3o2ajEiLCJzdWIiOiJMWmdxMDFrU0NPVFlzR2RSVVRxVHByQ0t6NmoxIiwiaWF0IjoxNjEzNTUxMTQ0LCJleHAiOjE2MTM1NTQ3NDQsImVtYWlsIjoibmhpaGE2MDU5MUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibmhpaGE2MDU5MUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XJG0mMhGMOUTNacaRE9U3hs4VNbrQPCXIPAI-y12iieHI6B8fi_8NGcLCiiutNpRA9MbpHPHWXITJfxypOQjo-ix5ROQPM_VM2RaDtuyhoBWgoGsu9GmYNNtcxFQa6ujSidov1omlQL80G8_TcfIfxGrw3aba4H402AsaX7Xb3aICm9N7E3VKh40PbHmWslAANDtys9ooylDBeGdbH286w4dCM0yGC4trqhSi6rJtIUMsLtD2mTI9N9nZT_Bm6yO50Pw3wcfMobgwWsKRicizTdgqS6j7TAIdcfrMVKMf4115NDEnM4cNX9JRFdpo0mSjug540GRv8AcaMJCUtgdyw')
        if (this.form.email === 'artist@gmail.com' || this.form.email === 'producer@gmail.com') {
          await this.setRole('artist')
        }
        if (this.form.email === 'director@gmail.com') {
          await this.setRole('director')
        }
        await this.$router.push('/')
      } catch (e) {
        // TODO
      }
    }
  }
}
</script>

<style>

</style>
