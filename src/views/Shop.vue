<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3">
          <div class="row d-flex align-items-center vh-100 m-auto">
            <div class="col-12 col-md-7">
              <img
                class="mockup"
                src="../assets/img/shop/bernardo/mockup.jpg"
                alt="Mockup Bernardo"
              />
            </div>
            <div class="col-12 col-md-5">
              <img
                class="print"
                src="../assets/img/shop/bernardo/print.jpg"
                alt="Mockup Bernardo"
              />
              <h6 class="text-end mt-3">Bernardo Alves, 2021</h6>
            </div>
          </div>
          <div class="row d-flex align-items-center vh-100">
            <div class="col-12 col-md-7">
              <img
                class="mockup"
                src="../assets/img/shop/sarita/mockup.jpg"
                alt="Mockup Bernardo"
              />
            </div>
            <div class="col-12 col-md-5">
              <img
                class="print"
                src="../assets/img/shop/sarita/print.jpg"
                alt="Mockup Bernardo"
              />
              <h6 class="text-end mt-3">Sarita Afonso, 2021</h6>
            </div>
          </div>
          <div class="row d-flex align-items-center vh-100">
            <div class="col-12 col-md-7">
              <img
                class="mockup"
                src="../assets/img/shop/rodrigo/mockup.jpg"
                alt="Mockup Bernardo"
              />
            </div>
            <div class="col-12 col-md-5">
              <img
                class="print"
                src="../assets/img/shop/rodrigo/print.jpg"
                alt="Mockup Bernardo"
              />
              <h6 class="text-end mt-3">Rodrigo Gonçalves, 2021</h6>
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

<style lang="scss" scoped>
.mockup,
.print {
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  height: auto;
}
</style>