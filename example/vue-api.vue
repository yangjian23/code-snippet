<template>
  <div :class="{ active: true }">

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
    methods: {},

    filters: {
      filterA(value) {
        return value
      }
    },

    wacth: {
      b: {
        handler(val, oldVal) {
          console.log(val, oldVal)
        },
        deep: true
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>