<template>
  <div class="flex items-center h-screen items-center">
    <div class="flex w-full flex-col">
      <Logo />
      <form action="" method="post" class="w-full lg:w-1/3 mx-auto px-4">
        <h2 class="text-2xl font-bold text-white mb-2 mt-6 text-center">Forgot Password</h2>
        <div class="form-item mt-2 pt-4">
          <input
            type="mail"
            class="bg-transparent  text-white border border-gray-primary focus:border-blue-primary w-full px-4 py-4 rounded"
            placeholder="Mail" />
        </div>
        <div class="form-actions flex justify-center pt-4">
          <button type="submit" class="px-8 py-4 uppercase bg-blue-primary rounded mt-4 text-black font-bold">Send Mail</button>
        </div>
        <div class="form-actions flex justify-center pt-4">
          <router-link to="/login" class="uppercase font-bold text-blue-primary">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  components: { Logo },
}
</script>
