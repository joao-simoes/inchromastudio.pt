<template>
  <div class="container-fluid pb-5">
    <div class="row mt-5 pt-4">
      <div
        class="col-10 offset-0 me-xxl-0 col-xl-4 offset-xl-2 offset-xxl-3 mt-5"
      >
        <div class="info">
          <h2 class="work-together">VAMOS<br />TRABALHAR<br />JUNTOS?</h2>
          <p class="mt-5 pt-5">
            <i class="fas fa-map-marker-alt"></i> Rua D. João de Castro, N34 - Loja 28<br />2330-138, Entroncamento
          </p>
          <p class="my-5">
            <i class="fas fa-envelope"></i> geral@inchromastudio.pt
          </p>
          <p><i class="fas fa-phone-alt"></i> +351 918 934 915</p>
        </div>
      </div>
      <div class="col-10 offset-0 mx-auto col-xl-3 offset-xl-1 mt-5 pt-5">
        <form action="/newrequest" method="POST">
          <h3 class="mb-2">Formulário</h3>
          <div class="my-3">
            <input
              type="text"
              name="form-name"
              placeholder="Nome"
              class="form-control rounded-pill"
            />
          </div>
          <div class="my-3">
            <input
              type="email"
              name="form-email"
              placeholder="oteu@mail.pt"
              class="form-control rounded-pill"
            />
          </div>
          <div class="my-3">
            <textarea
              type="text"
              name="form-desc"
              placeholder="Descrição"
              class="form-control rounded-3"
              rows="15"
            ></textarea>
          </div>
          <button
            id="form-submit"
            type="submit"
            class="btn"
            style="background-color: #202020; color: white"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
     <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Contacts",
  components: {
    Footer,
  },
};
</script>

<style scoped>

  @media screen and (max-width: 800px) { 
    .work-together {
      font-size: 45px !important;
    }
  }


</style>