<template>
  <label
    class="yu-radio-button"
    :class="[
      size ? 'yu-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled }
    ]"
  >
    <input
      class="yu-radio-button__orig-radio"
      :value="label"
      type="radio"
      v-model="value"
      :name="name"
      :disabled="isDisabled">
    <span class="yu-radio-button__inner" :style="value === label ? activeStyle : null">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'YuRadioButton',

  props: {
    label: {},
    disabled: Boolean,
    name: String
  },
  computed: {
    value: {
      get () {
        return this._radioGroup.value
      },
      set (value) {
        this._radioGroup.$emit('input', value)
      }
    },
    _radioGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name !== 'YuRadioGroup') {
          parent = parent.$parent
        } else {
          return parent
        }
      }
      return false
    },
    activeStyle () {
      return {
        backgroundColor: this._radioGroup.fill || '',
        borderColor: this._radioGroup.fill || '',
        color: this._radioGroup.textColor || ''
      }
    },
    size () {
      return this._radioGroup.size
    },
    isDisabled () {
      return this.disabled || this._radioGroup.disabled
    }
  }
}
</script>
