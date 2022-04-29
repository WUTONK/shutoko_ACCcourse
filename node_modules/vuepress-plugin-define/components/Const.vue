<template>
  <span
    class="const const__container"
    :class="{
      'const--not-defined': notDefined,
    }"
    :title="title"
    >{{ valueText }}</span
  >
</template>

<script>
export default {
  name: 'Const',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    isProd() {
      return globalIsProd
    },
    userDefinedEnvConstants() {
      return globalUserDefinedEnvConstants
    },
    value() {
      return this.userDefinedEnvConstants[this.name]
    },
    notDefined() {
      return this.value === undefined
    },
    valueText() {
      if (this.notDefined) {
        console.warn(this.errMessage)
      }

      if (!this.isProd && this.notDefined) {
        return this.name
      }

      return this.value
    },
    errMessage() {
      return `[plugin:define] value of ${this.name} is not defined in env.`
    },
    title() {
      if (!this.isProd && this.notDefined) {
        return this.errMessage
      }

      return ''
    },
  },
}
</script>

<style lang="stylus">
.const
  &--not-defined
    cursor help
</style>
