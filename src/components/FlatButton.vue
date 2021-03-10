<template>
  <div class="flat-btn fixed" :class="flatButtonClass">
    <router-link :to="flatButtonUrl" class="p-4 rounded-full block">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <path d="M14,8H8v6H6V8H0V6H6V0H8V6h6Z" fill="rgba(0,0,0,0.87)"/>
      </svg>
    </router-link>
  </div>
</template>

<style scoped>
.flat-btn a {
  background: #80DEEA;
}
</style>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters('app', ['flatButtonClass', 'flatButtonUrl']),
  },
  methods: {
    ...mapActions('app', ['setFlatButtonClass'])
  },
  mounted() {
    this.setFlatButtonClass('bottom-4 right-4')
  }
}
</script>
