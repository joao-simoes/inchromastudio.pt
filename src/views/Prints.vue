<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row">
        <div class="col-10 col-xxl-8 offset-1 offset-xl-0 offset-xxl-3 text-center">
          <div class="row align-items-center item">
            <p class="print-title"><b class="me-4">"Deep Conversations Between Cables"</b> 2017</p>
            <div class="col-12 col-md-6">
              <img
                v-img:group1
                class="print"
                src="../assets/img/shop/bernardo/print.jpg"
                alt="Deep Conversations Between Cables"
              />
            </div>
            <div class="col-12 col-md-6">
              <img
                v-img:group1
                class="mockup"
                src="../assets/img/shop/bernardo/mockup.jpg"
                alt="Deep Conversations Between Cables"
              />
              
            </div>
          </div>
          <div class="row d-flex align-items-center item">
            <p class="print-title"><b class="me-4">"Focus"</b> 2018</p>
            <div class="col-12 col-md-6">
              <img
                v-img:group2
                class="print"
                src="../assets/img/shop/sarita/print.jpg"
                alt="Focus"
              />
            </div>
            <div class="col-12 col-md-6">
              <img
                v-img:group2
                class="mockup"
                src="../assets/img/shop/sarita/mockup.jpg"
                alt="Focus"
              />
            </div>
          </div>
          <div class="row d-flex align-items-center item">
            <p class="print-title"><b class="me-4">"Positive"</b> 2018</p>
            <div class="col-12 col-md-6">
              <img
                v-img:group3
                class="print"
                src="../assets/img/shop/rodrigo/print.jpg"
                alt="Positive"
              />
            </div>
            <div class="col-12 col-md-6">
              <h4></h4>
              <img
                v-img:group3
                class="mockup"
                src="../assets/img/shop/rodrigo/mockup.jpg"
                alt="Positive"
              />
            </div>
          </div>
          <div>
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
                    <th rowspan="2"><br>Para mais informações<br><p style="font-size: 12px;">geral@inchromastudio.pt</p></th>
                </tr>
                <tr>
                    <th scope="row">40cm</th>
                    <th>30cm</th>
                </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Prints",
  components: {
    Footer,
  },
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
  width: 80%;
  min-width: 100px;
  max-width: 350px;
  height: auto;
}

.item {
  margin: 100px 0 150px 0;
}

.print-title {
  font-size: 16px;
  text-align: left;
}
</style>