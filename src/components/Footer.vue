<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3 mt-5">
        <footer
          class="position-relative bottom-0 start-0 w-100 text-center mt-5"
        >
          <p>
            All Rights Reserved ©
            <a href="https://www.joao-simoes.pt" target="_blank"
              ><b>João Simões</b></a
            >, {{ year }}
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
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

<style lang="scss" scoped>
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
</style>