<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3">
          <div class="text-end text-lg-start mt-5">
            <router-link to="/photography/digital">
              <i class="fas fa-backward fa-2x mb-4" style="color: #202020"></i
            ></router-link>

            <h2>Retrato</h2>
          </div>


          <div class="row my-5 py-2 align-items-center">
            <div class="col-12 col-lg-5">
              <img v-img:group
                src="../../assets/img/photography/portrait/3.jpg"
                alt="Retrato"
              />
            </div>
            <div class="col-12 col-lg-7 align-self-end">
              <img v-img:group
                src="../../assets/img/photography/portrait/4.jpg"
                alt="Retrato"
              />
            </div>
          </div>

          <div class="row my-5 py-2 align-items-center">
            <div class="col-12 col-lg-4">
              <img v-img:group
                src="../../assets/img/photography/portrait/5.jpg"
                alt="Retrato"
              />
            </div>
            <div class="col-12 col-lg-4">
              <img v-img:group
                src="../../assets/img/photography/portrait/7.jpg"
                alt="Retrato"
              />
            </div>
            <div class="col-12 col-lg-4">
              <img v-img:group
                src="../../assets/img/photography/portrait/6.jpg"
                alt="Retrato"
              />
            </div>
          </div>

          <div class="row my-5 py-2 align-items-center">
            <div class="col-12 col-lg-6">
              <img v-img:group
                src="../../assets/img/photography/portrait/9.jpg"
                alt="Retrato"
              />
            </div>
            <div class="col-12 col-lg-6">
              <img v-img:group
                src="../../assets/img/photography/portrait/10.jpg"
                alt="Retrato"
              />
            </div>
          </div>

          <div class="row my-5 py-2">
            <div class="col-12 text-center">
              <img v-img:group
                src="../../assets/img/photography/portrait/8.jpg"
                alt="Retrato"
              />
            </div>
          </div>

          <div class="row my-5 py-2 align-items-center">
            <div class="col-12 col-lg-7">
              <img v-img:group
                src="../../assets/img/photography/portrait/12.jpg"
                alt="Retrato"
              />
            </div>
            <div class="col-12 col-lg-5">
              <img v-img:group
                src="../../assets/img/photography/portrait/11.jpg"
                alt="Retrato"
              />
            </div>
          </div>


          <div class="row my-5 py-2 align-items-center">
            <div class="col-12 col-lg-4">
              <img v-img:group
                src="../../assets/img/photography/portrait/14.jpg"
                alt="Retrato"
              />
            </div>
            <div class="col-12 col-lg-4">
              <img v-img:group
                src="../../assets/img/photography/portrait/15.jpg"
                alt="Retrato"
              />
            </div>
            <div class="col-12 col-lg-4">
              <img v-img:group
                src="../../assets/img/photography/portrait/16.jpg"
                alt="Retrato"
              />
            </div>
          </div>




          <div class="row my-5 py-2 align-items-center text-center">
            <div class="col-12 col-lg-12">
              <img v-img:group
                src="../../assets/img/photography/portrait/13.jpg"
                alt="Retrato"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";

export default {
  name: "Portrait",
  components: {
    Footer,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 600px;
  min-width: 200px;
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

  img {
    margin: 15px 0 !important;
  }
}
</style>