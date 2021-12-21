<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row">
        <div class="col-10 col-xxl-8 offset-1 offset-xl-0 offset-xxl-3 text-center">
          <div class="row vh-100 align-items-center justify-content-center">
            <div class="col-12 col-md-6">
              <img
                class="print"
                src="../assets/img/shop/bernardo/print.jpg"
                alt="Mockup Bernardo"
              />
              <h6 class="text-start mt-3">Bernardo Alves, 2021</h6>
            </div>
            <div class="col-12 col-md-6">
              <img
                class="mockup"
                src="../assets/img/shop/bernardo/mockup.jpg"
                alt="Mockup Bernardo"
              />
            </div>
          </div>
          <div class="row d-flex align-items-center vh-100">
            <div class="col-12 col-md-6">
              <img
                class="print"
                src="../assets/img/shop/sarita/print.jpg"
                alt="Mockup Bernardo"
              />
              <h6 class="text-start mt-3">Sarita Afonso, 2021</h6>
            </div>
            <div class="col-12 col-md-6">
              <img
                class="mockup"
                src="../assets/img/shop/sarita/mockup.jpg"
                alt="Mockup Bernardo"
              />
            </div>
          </div>
          <div class="row d-flex align-items-center vh-100">
            <div class="col-12 col-md-6">
              <img
                class="print"
                src="../assets/img/shop/rodrigo/print.jpg"
                alt="Mockup Bernardo"
              />
              <h6 class="text-start mt-3">Rodrigo Gonçalves, 2021</h6>
            </div>
            <div class="col-12 col-md-6">
              <img
                class="mockup"
                src="../assets/img/shop/rodrigo/mockup.jpg"
                alt="Mockup Bernardo"
              />
            </div>
          </div>
          <table class="table w-50 mx-auto">
            <thead>
              <tr>
                <th>Comprimento</th>
                <th>Altura</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">30cm</th>
                    <th>20cm</th>
                    <th>25€</th>
                </tr>
                <tr>
                    <th scope="row">40cm</th>
                    <th>30cm</th>
                    <th>30€</th>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
};
</script>

<style scoped>
.print {
  width: 100%;
  min-width: 150px;
  max-width: 600px;
  height: auto;
}

.mockup {
  width: 100%;
  min-width: 100px;
  max-width: 350px;
  height: auto;
}
</style>