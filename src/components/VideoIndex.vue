<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row mt-5 pt-4 d-flex justify-content-center">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3 mt-5">
          <div class="photo-row">
            <div class="photo-column mx-auto">
              <router-link to="/video/product">
                <div class="position-relative text-center my-2">
                  <img
                    :src="product.hover ? product.gif : product.static"
                    alt="Product"
                  />
                  <div
                    @mouseover="product.hover = true"
                    @mouseleave="product.hover = false"
                    class="
                      position-absolute
                      top-50
                      start-50
                      translate-middle
                      image-overlay
                    "
                  >
                    <h2>Produto</h2>
                  </div>
                </div>
              </router-link>

              <router-link to="/video/gastronomy">
                <div class="position-relative text-center my-2">
                  <img
                    :src="gastronomy.hover ? gastronomy.gif : gastronomy.static"
                    alt="Gastronomy"
                  />
                  <div
                    @mouseover="gastronomy.hover = true"
                    @mouseleave="gastronomy.hover = false"
                    class="
                      position-absolute
                      top-50
                      start-50
                      translate-middle
                      image-overlay
                    "
                  >
                    <h2>Gastronomia</h2>
                  </div>
                </div>
              </router-link>

              <router-link to="/video/architecture">
                <div class="position-relative text-center my-2">
                  <img
                    :src="
                      architecture.hover
                        ? architecture.gif
                        : architecture.static
                    "
                    alt="Architecture"
                  />
                  <div
                    @mouseover="architecture.hover = true"
                    @mouseleave="architecture.hover = false"
                    class="
                      position-absolute
                      top-50
                      start-50
                      translate-middle
                      image-overlay
                    "
                  >
                    <h2>Arquitetura</h2>
                  </div>
                </div>
              </router-link>

              <router-link to="/video/lifestyle"
                ><div class="position-relative text-center my-2">
                  <img
                    :src="lifestyle.hover ? lifestyle.gif : lifestyle.static"
                    alt="Lifestyle"
                  />
                  <div
                    @mouseover="lifestyle.hover = true"
                    @mouseleave="lifestyle.hover = false"
                    class="
                      position-absolute
                      top-50
                      start-50
                      translate-middle
                      image-overlay
                    "
                  >
                    <h2>Lifestyle</h2>
                  </div>
                </div></router-link
              >

              <router-link to="/video/corporate"
                ><div class="position-relative text-center my-2">
                  <img
                    :src="corporate.hover ? corporate.gif : corporate.static"
                    alt="Corporate"
                  />
                  <div
                    @mouseover="corporate.hover = true"
                    @mouseleave="corporate.hover = false"
                    class="
                      position-absolute
                      top-50
                      start-50
                      translate-middle
                      image-overlay
                    "
                  >
                    <h2>Corporativo</h2>
                  </div>
                </div></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "VideoIndex",
  components: {
    Footer,
  },
  data() {
    return {
      product: {
        hover: false,
        static: require("../assets/video/product_static.png"),
        gif: require("../assets/video/product.gif"),
      },
      gastronomy: {
        hover: false,
        static: require("../assets/video/gastronomy_static.png"),
        gif: require("../assets/video/gastronomy.gif"),
      },
      architecture: {
        hover: false,
        static: require("../assets/video/architecture_static.png"),
        gif: require("../assets/video/architecture.gif"),
      },
      lifestyle: {
        hover: false,
        static: require("../assets/video/lifestyle_static.png"),
        gif: require("../assets/video/lifestyle.gif"),
      },
      corporate: {
        hover: false,
        static: require("../assets/video/corporate_static.png"),
        gif: require("../assets/video/corporate.gif"),
      },
    };
  },
};
</script>

<style scoped>
a {
  color: #202020 !important;
  text-decoration: none;
}

.image-overlay {
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: 0.2s ease-in-out;
}

.image-overlay h2 {
  color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.image-overlay:hover {
  opacity: 0.8;
  transition: 0.2s ease-in-out;
}

.photo-row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.photo-column {
  flex: 100%;
  max-width: 80%;
  padding: 0 4px;
}

.photo-column img {
  vertical-align: middle;
  width: 100%;
  height: 300px;
  object-fit: cover;
}

@media screen and (max-width: 800px) {
  h2 {
    font-size: 35px;
  }

  .photo-column img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}

@media screen and (max-width: 600px) {
  .photo-column {
    flex: 100%;
    max-width: 100%;
  }

  .photo-column img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
}
</style>