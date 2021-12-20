<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row mt-5 pt-4 d-flex justify-content-center">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3 mt-5">
          <a href="#"
            ><i
              class="fas fa-backward fa-2x mb-4"
              v-if="active"
              @click="active = false"
            ></i
          ></a>
          <div v-if="!active" class="photo-row">
            <div class="photo-column">
              <a href="#" @click="choose('product', 15)">
                <div class="position-relative text-center my-2">
                  <img
                    src="../assets/img/photography/product/15.jpg"
                    alt="Product"
                  />
                  <div
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
              </a>

              <a href="#" @click="choose('gastronomy', 23)">
                <div class="position-relative text-center my-2">
                  <img src="../assets/img/photography/gastronomy/10.jpg" alt="Gastronomy" />
                  <div
                    class="
                      position-absolute
                      top-50
                      start-50
                      translate-middle
                      image-overlay
                    "
                  >
                    <h2>Comida</h2>
                  </div>
                </div>
              </a>

              <a href="#" @click="choose('portrait', 16)">
                <div class="position-relative text-center my-2">
                  <img
                    style="object-position: 0 -80px"
                    src="../assets/img/photography/portrait/10.jpg"
                    alt="Portrait"
                    class="fixmeplease"
                  />
                  <div
                    class="
                      position-absolute
                      top-50
                      start-50
                      translate-middle
                      image-overlay
                    "
                  >
                    <h2>Retrato</h2>
                  </div>
                </div>
              </a>

              

              <a href="#" @click="choose('architecture', 11)">
                <div class="position-relative text-center my-2">
                  <img
                    src="../assets/img/photography/architecture/1.jpg"
                    alt="Architecture"
                  />
                  <div
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
              </a>



              <a href="#" @click="choose('lifestyle', 15)">
                <div class="position-relative text-center my-2">
                  <img
                    src="../assets/img/photography/lifestyle/7.jpg"
                    alt="Lifestyle"
                  />
                  <div
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
                </div>
              </a>
            </div>
          </div>

          <Album :album="chosen" :qt="amount" v-if="active" />
        </div>
      </div>
    </div>
  </div>
</template>













<script>
import Album from "../components/Album.vue";

export default {
  name: "DigitalPhotography",
  components: {
    Album,
  },
  data: () => {
    return {
      active: false,
      chosen: "",
      amount: 0,
    };
  },
  methods: {
    choose: function (name, qt) {
      this.active = true;
      this.chosen = name;
      this.amount = qt;
    },
  },
};
</script>
















<style scoped>
a {
  color: #202020 !important;
  text-decoration: none;
}

.image-overlay {
  background-color: #202020;
  opacity: 0.0;
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

  .photo-column {
    flex: 50%;
    max-width: 50%;
  }

  .fixmeplease {
    object-position: 0 0 !important;
  }
}

@media screen and (max-width: 600px) {
  .photo-column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>