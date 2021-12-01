<template>
  <div id="app">
    <Nav />
    <vue-page-transition name="overlay-right-full">
      <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
#app {
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
  background: #111111 !important;
}
</style>
