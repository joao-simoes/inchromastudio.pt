<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3">


          <div class="text-end text-lg-start">
            <router-link to="/photography/digital">
            <i class="fas fa-backward fa-2x mb-4" style="color: #202020"></i
          ></router-link>

          <h2>Produto</h2>
          </div>

          <div class="text-center">
            <div class="row my-5 py-2">
              <div class="col-12 col-lg-6">
                <img
                  src="../../assets/img/photography/product/2.jpg"
                  alt="Produto"
                />
              </div>
              <div class="col-12 col-lg-6">
                <img
                  src="../../assets/img/photography/product/9.jpg"
                  alt="Produto"
                />
              </div>
            </div>

            <div class="row my-5 py-2">
              <div class="col-12 text-center">
                <img
                  src="../../assets/img/photography/product/8.jpg"
                  alt="Produto"
                />
              </div>
            </div>

            <div class="row my-5 py-2">
              <div class="col-12 col-lg-6">
                <img
                  src="../../assets/img/photography/product/4.jpg"
                  alt="Produto"
                />
              </div>
              <div class="col-12 col-lg-6">
                <img
                  src="../../assets/img/photography/product/3.jpg"
                  alt="Produto"
                />
              </div>
            </div>

            <div class="row my-md-5 py-2">
              <div class="col-12 text-center">
                <img
                  src="../../assets/img/photography/product/7.jpg"
                  alt="Produto"
                />
              </div>
            </div>

            <div class="row my-md-5 py-2">
              <div class="col-12 text-center">
                <img
                  src="../../assets/img/photography/product/10.jpg"
                  alt="Produto"
                />
              </div>
            </div>

            <div class="row my-5 py-2">
              <div class="col-12 col-lg-6">
                <img
                  src="../../assets/img/photography/product/11.jpg"
                  alt="Produto"
                />
              </div>
              <div class="col-12 col-lg-6">
                <img
                  src="../../assets/img/photography/product/12.jpg"
                  alt="Produto"
                />
              </div>
            </div>

            <div class="row my-5 py-2 align-items-center">
              <div class="col-12 col-lg-5">
                <img
                  src="../../assets/img/photography/product/6.jpg"
                  alt="Produto"
                />
              </div>
              <div class="col-12 col-lg-7">
                <img
                  src="../../assets/img/photography/product/5.jpg"
                  alt="Produto"
                />
              </div>
            </div>

            <div class="row my-5 py-2">
              <div class="col-12 text-center">
                <img
                  src="../../assets/img/photography/product/1.jpg"
                  alt="Produto"
                />
              </div>
            </div>

            <div class="row my-5 py-2">
              <div class="col-12 col-lg-4">
                <img
                  src="../../assets/img/photography/product/13.jpg"
                  alt="Produto"
                />
              </div>
              <div class="col-12 col-lg-4">
                <img
                  src="../../assets/img/photography/product/14.jpg"
                  alt="Produto"
                />
              </div>
              <div class="col-12 col-lg-4">
                <img
                  src="../../assets/img/photography/product/15.jpg"
                  alt="Produto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
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