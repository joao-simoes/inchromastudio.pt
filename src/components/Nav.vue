<template>
  <div id="menuTab" class="tab-container">
    <div class="menu">
      <a id="open" href="#"><i class="fas fa-bars fa-2x"></i></a>
      <a id="close" href="#" style="opacity: 0"
        ><i class="fas fa-times fa-2x"></i
      ></a>
    </div>

    <a href="#">
      <div class="title tab">
        <router-link to="/">
          <h1>inChroma</h1>
          <h2>Studio</h2>
        </router-link>
      </div>
    </a>

    <div class="links">
      <ul>
        <a href="#" class="hvr-underline-from-left">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <li
                  id="photography"
                  class="tab accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  FOTOGRAFIA
                </li>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body ms-4 p-0">
                  <li id="digitalPhotography" class="tab tab2">
                    <router-link to="/photography/digital">DIGITAL</router-link>
                  </li>
                  <li id="analogPhotography" class="tab tab2">
                    <router-link to="/photography/analog"
                      >ANALÓGICA</router-link
                    >
                  </li>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" class="hvr-underline-from-left">
          <li id="video" class="tab">
            <router-link to="/video">VÍDEO</router-link>
          </li>
        </a>
        <a href="#" class="hvr-underline-from-left">
          <li id="shop" class="tab">
            <router-link to="/shop">LOJA</router-link>
          </li>
        </a>
        <a href="#" class="hvr-underline-from-left">
          <li id="about" class="tab">
            <router-link to="/about">SOBRE</router-link>
          </li>
        </a>
        <a href="#" class="hvr-underline-from-left">
          <li id="contacts" class="tab">
            <router-link to="/contacts">CONTACTOS</router-link>
          </li>
        </a>
      </ul>
    </div>

    <div class="socialMedia">
      <ul class="mt-5">
        <li>
          <a href="https://www.facebook.com/inchromastudio" target="_blank"
            ><i class="fab fa-facebook-f fa-2x hvr-grow mx-2"></i
          ></a>
          <a href="https://www.instagram.com/inchroma.studio/" target="_blank"
            ><i class="fab fa-instagram mx-3 fa-2x hvr-grow mx-2"></i
          ></a>
          <a href="#" target="_blank"
            ><i class="fab fa-behance fa-2x hvr-grow mx-2"></i
          ></a>
          <a href="https://www.behance.net/theinchromastudio" target="_blank"
            ><i class="fab fa-linkedin fa-2x hvr-grow mx-2"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data: () => {
    return {
      menuOpen: false,
    };
  },
  mounted() {
    const menuButton = Array.from(document.querySelectorAll(".menu"))[0];
    const menuTabs = Array.from(document.querySelectorAll(".tab"));

    menuButton.addEventListener("click", () => {
      this.menu(this.menuOpen);
      this.menuOpen = !this.menuOpen;
    });

    menuTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        if (tab.id != "photography") {
          this.menu(true);
          this.menuOpen = false;
        }
      });
    });
  },
  methods: {
    //ANIMATE HAMBURGUER MENU BUTTON
    menu: (menuOpen) => {
      const open = document.getElementById("open");
      const close = document.getElementById("close");
      const menuTab = document.getElementById("menuTab");

      const menuTabs = Array.from(document.querySelectorAll(".tab"));
      menuTabs.forEach((tab) => {
        tab.classList.remove("active-tab");
      });

      //FIXME: NAV BAR ACTIVE PAGE

      if (menuOpen) {
        menuTab.style.left = "-100vw";

        open.style.opacity = "1";
        open.style.transform = "rotate(-180deg)";
        close.style.opacity = "0";
        close.style.transform = "rotate(-180deg)";
      } else {
        menuTab.style.left = "0";

        open.style.opacity = "0";
        open.style.transform = "rotate(180deg)";
        close.style.opacity = "1";
        close.style.transform = "rotate(180deg)";
      }

      menuOpen = !menuOpen;
    },
  },
};
</script>

<style scoped>
/* font-family: 'Poppins', sans-serif; */

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
a {
  text-decoration: none;
  color: #202020;
}

.tab-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  max-width: 350px;
  min-width: 290px;
  height: 100vh;
  z-index: 100;
  background-color: white;
}

.title {
  position: relative;
  margin: 0 auto;
  margin-top: 40%;
  color: #202020;
}

.title h1 {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 0.5;
}

.title h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin-left: 52%;
  font-size: 30px;
}

.links {
  margin-top: 10vh;
  border-right: 2px solid #c2c2c2;
}

.links ul {
  list-style-type: none;
}

.links ul a li {
  position: relative;
  display: block;
  margin-left: 15%;
  padding: 1.2vh;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
}

.links ul a li {
  text-decoration: none;
  color: #202020;
  transition: ease-in-out 0.2s;
}

.links ul a li:hover,
.active-tab {
  font-weight: 700 !important;
  transition: ease-in-out 0.2s;
  font-size: 25px !important;
}

.socialMedia {
  position: absolute;
  left: 0;
  bottom: 5%;
}

.socialMedia a {
  color: #202020;
}

.socialMedia ul {
  list-style-type: none;
}

.tab2 {
  font-weight: 100 !important;
  font-size: 18px !important;
}

.menu {
  position: fixed;
  top: 3vh;
  left: 3vh;
  opacity: 0;
  transition: ease-in-out 0.25s;
  transform: scale(0);
}

.menu a {
  color: #202020 !important;
}

@media only screen and (min-width: 1400px) {
  .tab-container {
    left: 0 !important;
    transition: ease-in-out 0.25s;
  }
}

@media only screen and (max-width: 1400px) {
  .tab-container {
    left: -100%;
    transition: ease-in-out 0.5s;
  }
  .menu {
    opacity: 1;
    transition: ease-in-out 0.25s;
    transform: scale(1);
  }
}
/* Underline From Left */

.hvr-underline-from-left {
  display: block;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}

.hvr-underline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 18%;
  right: 100%;
  bottom: 0;
  background: #202020;
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-underline-from-left:hover:before {
  right: 20%;
}
/* Grow */

.hvr-grow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
  z-index: 2000;
}
</style>
