<template>
  <div class="s-select relative" :class="{'focus': isFocusing}" @click="clickFocus">
    <div class="s-select-control">
      <label>{{ label }}</label>
      <select v-model="value" ref="select">
        <option v-for="item in items" :key="item.value" :value="item.value">{{ item.label }}</option>
      </select>
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
    items: {
      type: Array,
      default() {
        return [
          {
            label: "Genre",
            value: 1
          }
        ]
      }
    }
  },
  data() {
    return {
      isFocusing: false,
      value: null
    }
  },
  watch: {
    value() {
      if (this.value) {
        this.isFocusing = true
      }
    }
  },
  methods: {
    clickFocus() {
      this.$refs.select.click()
    }
  },
}
</script>
<style lang="scss">
  .s-select {
    .s-select-control {
      background-color: #212121;
      border-bottom: 1px solid transparent;
      border-radius: 5px 5px 0 0;
      overflow: hidden;
      background-image: url("../../assets/dropdown-icon.svg");
      background-repeat: no-repeat;
      background-position: 98% 49%;
      display: block;
      width: 100%;
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
      select {
        color: rgba(255, 255, 255, 0.6);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        background-color: transparent;
        display: block;
        width: 100%;
        margin-top: 1.5rem;
        padding: 0.125rem 1rem;
        padding-bottom: 0.5rem;
        outline: none;
        box-shadow: none;
        overflow: hidden;
        option {
          color: rgba(255, 255, 255, 0.6);
          width: 100%;
        }
      }
    }
    &.focus {
      label {
        font-size: 12px;
        top: 5px;
      }
      .s-select-control {
        border-bottom: 1px solid #A6A6A6;
      }
    }
  }
</style>
