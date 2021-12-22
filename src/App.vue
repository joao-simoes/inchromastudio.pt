<template>
  <div id="app">
    <Nav />
    <vue-page-transition name="overlay-right-full">
      <router-view></router-view>
    </vue-page-transition>
    <footer class="position-relative bottom-0 start-0 w-100 text-center mt-5">
      <p>
        All Rights Reserved ©
        <a href="https://www.joao-simoes.pt" target="_blank"
          ><b>João Simões</b></a
        >, {{ year }}
      </p>
    </footer>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      year: 0,
    };
  },
  mounted() {
    const today = new Date();
    this.year = today.getFullYear();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app {
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: "Montserrat", sans-serif;
}

html,
body {
  scroll-behavior: smooth;
}

h2 {
  font-weight: 800;
  font-size: 64px;
  color: #202020;
}

h3 {
  font-weight: 600;
  font-size: 26px;
  color: #202020;
}

h4 {
  font-weight: 700;
  font-size: 42px;
  color: #202020;
}

h5 {
  font-weight: 700;
  color: #202020;
}

p {
  font-weight: 400;
  font-size: 20px;
  color: #202020;
}

footer p {
  font-size: 15px;
  font-weight: 200;
}

footer a {
  text-decoration: underline;
  color: #202020;
  transition: 0.25s ease-in-out;
}

footer a:hover {
  color: #707070;
  transition: 0.25s ease-in-out;
}

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
  background: #111111 !important;
}
</style>
