<template>
  <div class="s-input relative" :class="{'focus': isFocusing}" @click="clickFocus">
    <div class="s-input-control">
      <label>{{ label }}</label>
      <input type="text" ref="input" @input="onFocus" @blur="onBlur" v-model="input" @focus="onFocus">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default() {
        return 'Label'
      }
    }
  },
  data() {
    return {
      isFocusing: false,
      input: null
    }
  },
  watch: {
    input() {
      if (this.input && this.input.length) {
        this.isFocusing = true
      }
    }
  },
  methods: {
    onFocus() {
      this.isFocusing = true
      console.log('On Focus')
    },
    onBlur() {
      console.log('On Blur')
      if (this.input && this.input.length) {
        this.isFocusing = true
      } else {
        this.isFocusing = false
      }
    },
    clickFocus() {
      this.$refs.input.focus()
    }
  },
}
</script>
<style lang="scss">
  .s-input {
    .s-input-control {
      background-color: #212121;
      border-bottom: 1px solid transparent;
      border-radius: 5px 5px 0 0;
      overflow: hidden;
      label {
        display: block;
        width: 100%;
        position: absolute;
        left: 1rem;
        top: 1rem;
        right: auto;
        color: #757575;
        transition: all 0.5s;
      }
      input {
        display: block;
        width: 100%;
        background: transparent;
        margin-top: 1.5rem;
        padding: 0.125rem 1rem;
        padding-bottom: 0.5rem;
      }
    }
    &.focus {
      label {
        font-size: 12px;
        top: 5px;
      }
      .s-input-control {
        border-bottom: 1px solid #A6A6A6;
      }
    }
  }
</style>
