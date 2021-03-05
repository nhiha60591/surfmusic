<template>
  <div class="s-input relative" :class="{'focus': isFocusing}">
    <div class="s-input-control" @click="clickFocus">
      <label>{{ label }}</label>
      <textarea ref="input" @input="onFocus" v-on:input="$emit('input', $event.target.value)" @blur="onBlur" v-model="input" @focus="onFocus"></textarea>
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
    },
    type: {
      type: String,
      default() {
        return "text";
      }
    },
    value: {
      default() {
        return null
      }
    }
  },
  data() {
    return {
      isFocusing: false,
      input: null,
    }
  },
  watch: {
    input() {
      if (this.value && this.value.length) {
        this.isFocusing = true
        this.input = this.value
      }
      if (this.input && this.input.length) {
        this.isFocusing = true
      }
    },
  },
  created() {
    if (this.value && this.value.length) {
      this.isFocusing = true
      this.input = this.value
    }
  },
  methods: {
    onFocus() {
      this.isFocusing = true
    },
    onBlur() {
      if (this.input && this.input.length) {
        this.isFocusing = true
      } else {
        this.isFocusing = false
      }
    },
    clickFocus() {
      this.$refs.input.focus()
    },
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
      textarea {
        display: block;
        width: 100%;
        background: transparent;
        margin-top: 1.5rem;
        padding: 0.125rem 1rem 0.5rem;
        color: #FFF;
        outline: none;
      }
      .password-btn {
        position: absolute;
        right: 10px;
        top: calc(50% - 7.5px);
        z-index: 9999;
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
