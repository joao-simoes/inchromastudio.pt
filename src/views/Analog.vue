<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row mt-5 pt-4">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3 mt-5">
          <div class="about-us">
            <div class="pb-4">
              <h4 class="mb-4 text-center"><b>LABORATÓRIO ANALÓGICO</b></h4>
              <p class="text-center">
                Um laboratório de revelação e digitalização pronto para trazer à
                vida as suas películas ou fotografias e extender as suas
                memórias. Não só pretendemos extender as suas memórias como
                pertendemos melhorá-las.
              </p>
            </div>
            
            <h3 class="mt-5 text-center">| REVELAÇÃO |</h3>
            <p class="pt-3 text-center">
              <b>Película 35mm e Médio Formato</b>
              <br>
              Preto e Branco
            </p>

            <h3 class="mt-5 text-center">| DIGITALIZAÇÃO |</h3>
            <p class="pt-3 text-center">
              <b>Película 35mm e Médio Formato</b>
              <br>
              Preto e Branco <br>
              Diapositivo <br>
              Cor <br>
            </p>

            <h5 class="text-center pt-5 pb-4">
              - Provas Impressas -
            </h5>
            <p class="text-center pt-5 pb-4">
              Para mais informações - geral@inchromastudio.pt
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
.crew div {
  position: relative;
  max-width: 270px;
  max-height: 270px;
  width: 100%;
  height: auto;
  min-width: 100px;
  min-height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.crew div img {
  width: 100%;
  height: auto;
  margin-top: -80px;
}

.logo {
  max-width: 450px;
  min-width: 200px;
  margin: 0 auto;
}

@media only screen and (max-width: 768px) {
  .crew i {
    font-size: 1.2rem !important;
  }

  .crew h5 {
    font-size: 1rem !important;
  }

  .about-us h4 {
    font-size: 2rem !important;
  }
}

.crew i {
  font-size: 1.6rem !important;
}

.crew h5 {
  font-size: 1.2rem !important;
}

.about-us h4 {
  font-size: 2.2rem !important;
}

.about-us p {
  font-size: 1.1rem !important;
  text-align: justify;
}

@media only screen and (max-width: 800px) {
  .logo {
    width: 50% !important;
  }
}

@media only screen and (max-width: 1400px) {
  .col-10 {
    margin: 0 auto !important;
    margin-top: 8vh !important;
  }
}
</style>