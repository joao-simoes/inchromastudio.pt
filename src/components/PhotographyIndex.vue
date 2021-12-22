<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row mt-5 pt-4 d-flex justify-content-center">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3 mt-5">
          <div class="photo-row">
            <div class="photo-column mx-auto">
              <router-link to="/photography/digital/product"
                >
                <div class="position-relative text-center my-2">
                  <img
                    style="object-position: 0 -160px"
                    src="../assets/img/photography/product/5.jpg"
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
              </router-link>

              <router-link to="/photography/digital/gastronomy"
                >
                <div class="position-relative text-center my-2">
                  <img
                    style="object-position: 0 -80px"
                    src="../assets/img/photography/gastronomy/11.jpg"
                    alt="Gastronomy"
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
                    <h2>Gastronomia</h2>
                  </div>
                </div>
              </router-link>

              <router-link to="/photography/digital/portrait"
                >
                <div class="position-relative text-center my-2">
                  <img
                    style="object-position: 0 -80px"
                    src="../assets/img/photography/portrait/2.jpg"
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
              </router-link>

              <router-link to="/photography/digital/architecture"
                >
                <div class="position-relative text-center my-2">
                  <img
                    src="../assets/img/photography/architecture/5.jpg"
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
              </router-link>

              <router-link to="/photography/digital/lifestyle"
                ><div class="position-relative text-center my-2">
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
                </div></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotographyIndex",
};
</script>

<style scoped>
a {
  color: #202020 !important;
  text-decoration: none;
}

.image-overlay {
  background-color: #202020;
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