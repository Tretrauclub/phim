<template>
  <!-- <div @mousedown="eventClick()"> -->
  <div>
    <div class="container-fluid bg-component">
      <div class="container p-0 bg-component">
        <CommonHeader />
      </div>
    </div>
    <Nuxt />
    <div class="container">
      <CommonFooter />
    </div>
    <div
      v-show="sink"
      class="_sink"
      @click="$store.dispatch('sink', false)"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    countClick() {
      return this.$store.state.countClick
    },
    sink() {
      return this.$store.state.sink
    },
  },
  mounted() {},
  methods: {
    // eventClick() {
    //   return this.$store.dispatch('countClick')
    // },
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
._sink {
  height: calc(100vh - 96px);
  width: 100vw;
  position: fixed;
  overflow-y: scroll;
  top: 96px;
  left: 0;
  // background: #444;
  background: #000000c4;
  z-index: 1;
  &_layout {
    padding-top: 60px;
  }
}
</style>
