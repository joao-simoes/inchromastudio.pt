<template>
  <div>
    <div class="container-fluid pb-5">
      <div class="row mt-5 pt-4">
        <div class="col-10 col-xxl-8 offset-0 offset-xl-0 offset-xxl-3 mt-5">
          <div class="about-us">
            <p class="text-center pb-4">
              <b>inChroma</b><br />
              "in" - dentro <br />
              "Chroma" - cromático/cor
            </p>

            <p class="pb-2">
              Somos um estúdio criativo focado na produção de conteúdo
              audiovisual, diversificado e dinâmico, para uso pessoal ou
              empresarial. Este conteúdo pode ser fotográfico, digital ou
              analógico, videográfico ou gestão de redes sociais.
            </p>

            <p class="pb-5">
              Como o nome indica, todo o nosso trabalho é desenvolvido com
              detalhe, perfeccionismo e ambição de chegarmos à melhor cor,
              contraste e ideia que o cliente desejar. Somos só um estúdio? Não,
              somos muito mais que isso, somos pessoas. Somos amantes de
              fotografia analógica, design e cinema, com uma generosa pitada de
              boa música.
            </p>

            <p class="text-center">Os inChroma estão prontos para o receber, venha conhecer a sua cor connosco.</p>



            <br>
            <hr class="mt-5 w-50 mx-auto" />
            <h5 class="text-start pt-5 pb-4 w-75 m-auto">
              “I found I could say things with color and shapes that I couldn’t say any other way—things I had no words for.”<br><div class="pt-3 text-end">Georgia O’Keeffe</div>
            </h5>
            <hr class="mb-5 w-50 mx-auto" />
            <br />


            <div class="row my-5 py-5">
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
                    style="object-position: 0px 30px"
                  />
                </div>
                <h5 class="my-3">Rodrigo Gonçalves</h5>
                <i class="fab fa-facebook fa-2x mx-2"></i>
                <i class="fab fa-instagram fa-2x mx-2"></i>
              </div>
            </div>

            <div class="w-100 text-center mt-5">
              <img
                src="../assets/img/logo/logoblack.png"
                alt="inChroma Studio"
                class="w-50 mt-5 pt-5 logo"
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