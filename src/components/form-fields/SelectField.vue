<template>
  <div class="s-select relative" :class="{'focus': isFocusing}">
    <div class="s-select-control" @click="clickFocus">
      <label>{{ label }}</label>
      <div class="selected" v-if="value">{{ value.label }}</div>
      <div v-else class="not-selected"></div>
    </div>
    <div class="absolute t-0 l-0 w-full dropdown-box z-50 text-white bg-gray-primary py-2" v-if="openDropdownBox === true">
      <button
        v-for="item in items"
        :key="item.value"
        class="px-4 py-2 font-bold hover:bg-gray-900 flex w-full"
        @click.prevent="chooseValue(item)">{{ item.label }}</button>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

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
      value: null,
      openDropdownBox: false,
    }
  },
  computed: {
    isFocusing() {
      return this.openDropdownBox || this.value
    }
  },
  methods: {
    clickFocus() {
      this.openDropdownBox = true
    },
    chooseValue(item) {
      this.value = item
      this.openDropdownBox = false
    }
  },
  directives: {
    ClickOutside
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
      .dropdown-box {
        z-index: 50;
      }
      .selected {
        color: rgba(255, 255, 255, 0.6);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        position: relative;
        background-color: transparent;
        display: block;
        width: 100%;
        margin-top: 1.5rem;
        padding: 0.125rem 1rem 0.5rem;
        outline: none;
        box-shadow: none;
        overflow: hidden;
      }
      .not-selected {
        height: 55px;
        width: 100%;
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
