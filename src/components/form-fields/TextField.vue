<template>
  <div class="s-input relative" :class="{'focus': isFocusing}">
    <div class="s-input-control" @click="clickFocus">
      <label>{{ label }}</label>
      <input :type="inputType" ref="input" v-on:input="$emit('input', $event.target.value)" @input="onFocus" @blur="onBlur" v-model="input" @focus="onFocus">
      <button v-if="type === 'password' || hideable" class="password-btn" @click="changeShowPassword"><img src="../../assets/icons/eye.png"></button>
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
    }
  },
  data() {
    return {
      isFocusing: false,
      input: null,
      isShowPassword: false,
      hideable: false
    }
  },
  watch: {
    input() {
      if (this.input && this.input.length) {
        this.isFocusing = true
      }
    },
  },
  computed: {
    inputType() {
      if (this.type === 'password' && !this.isShowPassword) return 'password'
      if (this.hideable && !this.isShowPassword) return 'password'
      return 'text'
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
    changeShowPassword() {
      this.isShowPassword = !this.isShowPassword
      this.hideable = true
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
        padding: 0.125rem 1rem 0.5rem;
        color: #FFF;
      }
      .password-btn {
        position: absolute;
        right: 1.5%;
        top: calc(50% - 7.5px);
        z-index: 10;
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
