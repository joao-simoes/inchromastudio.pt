<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3">
          <div class="text-end text-lg-start mt-5">
            <router-link to="/video">
              <i class="fas fa-backward fa-2x mb-4" style="color: #202020"></i
            ></router-link>

            <h2>Corporativo</h2>
          </div>

          <div class="text-center">
            <div class="row my-5 py-2">
              <div class="col-12">
                <iframe
                  class="normal"
                  src="https://www.youtube.com/embed/Iav6q0y63VI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";

export default {
  name: "Corporate",
  components: {
    Footer,
  },
};
</script>

<style scoped>
.reels {
  width: 100%;
  aspect-ratio: 9/16;
}

.normal {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
}

.row {
  margin-top: 10% !important;
}

@media screen and (max-width: 991px) {
  h2 {
    font-size: 10vw;
  }

  .row,
  .col {
    margin: 0 !important;
    padding: 0 !important;
  }

  iframe {
    margin: 15px 0 !important;
  }
}
</style>