<template>
  <label class="capitalize">
    {{ label }}
    <input
      type="checkbox"
      v-bind="$attrs"
      v-bind:checked="isChecked"
      v-on:change="inputChecked" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      default() {
        return null;
      }
    },
    label: {
      default() {
        return null
      }
    },
  },
  computed: {
    isChecked() {
      if (this.checked instanceof Array) {
        return this.checked.includes(this.$attrs['value'])
      }
      if (this.checked instanceof String) {
        return this.checked === this.$attrs['value']
      }
      return false
    },
  },
  methods: {
    inputChecked(event) {
      let isChecked = event.target.checked
      if (this.checked instanceof Array) {
        let newValue = [...this.checked]
        if (isChecked) {
          newValue.push(this.$attrs['value'])
        } else {
          newValue.splice(newValue.indexOf(this.$attrs['value']), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', !!isChecked)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  label {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    word-break: break-word;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }
  .checkmark {
    position: absolute;
    top: 4px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border-radius: 3px;
    border: 2px solid #A0A0A0;
  }

  /* When the checkbox is checked, add a blue background */
  label input[type=checkbox]:checked ~ .checkmark {
    background-color: #03DAC5;
    border: 1px solid #03DAC5;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
  }

  /* Show the checkmark when checked */
  label input[type=checkbox]:checked ~ .checkmark:after {
    background-color: #03DAC5;
    display: block;
  }

  /* Style the checkmark/indicator */
  label .checkmark:after {
    display: none;
    left: 6px;
    top: 3px;
    width: 6px;
    height: 10px;
    border: solid #000;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
