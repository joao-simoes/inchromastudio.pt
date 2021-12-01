<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row mt-5 pt-4">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3 mt-5">
          <div class="about-us">
            <h4>O QUE SOMOS?</h4>
            <p class="mt-3 pb-4">
              Um estúdio criativo focado na produção fotográfica e videográfica,
              produzindo conteúdo diversificado e dinâmico, para uso pessoal ou
              empresarial.
            </p>
            <h4 class="mt-5">SOMOS SÓ UM ESTÚDIO?</h4>
            <p class="mt-3 pb-5">
              Não, somos muito mais que isso, somos pessoas. Somos amantes de
              fotografia analógica, design e cinema, com uma generosa pitada de
              boa música.
            </p>
            <br />
            <hr class="m-5 w-50 mx-auto" />
            <br />
            <h4 class="mt-5 pb-4">THE CREW</h4>
            <div class="row mt-5">
              <div class="col-12 col-md-4 crew text-center">
                <div class="m-auto">
                  <img src="@/assets/img/crew/sarita.jpg" alt="Sarita Afonso" />
                </div>
                <h5 class="my-3">Sarita Afonso</h5>
                <i class="fab fa-facebook fa-2x mx-2"></i>
                <i class="fab fa-instagram fa-2x mx-2"></i>
              </div>
              <div class="col-12 col-md-4 crew text-center my-5 my-md-0">
                <div class="m-auto">
                  <img
                    src="../assets/img/crew/bernardo.jpg"
                    alt="Sarita Afonso"
                  />
                </div>
                <h5 class="my-3">Bernardo Alves</h5>
                <i class="fab fa-facebook fa-2x mx-2"></i>
                <i class="fab fa-instagram fa-2x mx-2"></i>
              </div>
              <div class="col-12 col-md-4 crew text-center">
                <div class="m-auto">
                  <img
                    src="../assets/img/crew/rodrigo.jpg"
                    alt="Sarita Afonso"
                  />
                </div>
                <h5 class="my-3">Rodrigo Gonçalves</h5>
                <i class="fab fa-facebook fa-2x mx-2"></i>
                <i class="fab fa-instagram fa-2x mx-2"></i>
              </div>
            </div>

            <div class="w-100 text-center mt-5 pt-5">
              <img
                src="../assets/img/logo/logoblack.png"
                alt="inChroma Studio"
                class="w-50 mt-5 py-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

@media only screen and (max-width: 1400px) {
  .col-10 {
    margin: 0 auto !important;
    margin-top: 8vh !important;
  }
}
</style>