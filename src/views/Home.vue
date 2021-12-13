<template>
  <div>
    <div class="bg">
      <img
        src="../assets/img/bg.jpeg"
        alt=""
      />
    </div>
    <div class="position-absolute top-50 end-0 translate-middle-y me-5">
      <div style="text-align: right; margin-right: 10vw;">
        <h1 class="pcr my-4 hvr-sweep-to-right">PRODUCE.</h1>
        <h1 class="pcr my-4 hvr-sweep-to-right">CREATE.</h1>
        <h1 class="pcr my-4 hvr-sweep-to-right">REPEAT.</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      const h = Array.from(document.querySelectorAll(".pcr"));
      let i = 0;
      var interval = setInterval(() => {
        h[i].style.opacity = "100%";
        i++;

        if (i == 3) clearInterval(interval);
      }, 600);
    }, 700);
  },
};
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 10%;
  width: 90%;
  height: 100%;
  z-index: 0;
  transition: 0.2s ease-in-out;
}

img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 40%;
}

.pcr {
  opacity: 0%;
  text-shadow: 3px 3px 3px rgba(150, 150, 150, 1);
  font-weight: 800;
  font-size: 150px;
  color: #ffffff;
  transition: ease-in-out 0.2s;
}

@media only screen and (max-width: 991px) {
  .pcr {
    font-size: 10vw !important;
  }
}

@media only screen and (max-width: 1400px) {
  .bg {
    width: 100%;
    left: 0;
    transition: 0.2s ease-in-out;
  }
}
/* Sweep To Right */

.hvr-sweep-to-right {
  display: block;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.hvr-sweep-to-right:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #202020;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-sweep-to-right:hover,
.hvr-sweep-to-right:focus,
.hvr-sweep-to-right:active {
  color: white;
}

.hvr-sweep-to-right:hover:before,
.hvr-sweep-to-right:focus:before,
.hvr-sweep-to-right:active:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>