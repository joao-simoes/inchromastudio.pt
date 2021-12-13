<template>
  <div>
      <h2>{{album}}</h2>
    <div class="photo-row">
      <div class="photo-column">
          <img v-for="j in Math.ceil(qt / 3)" :key="j" :src="require(`../assets/img/photography/${album}/thumb/${j}.jpg`)" />   
      </div>
      <div class="photo-column">
          <div v-for="j in Math.ceil(qt / 3)*2" :key="j">
            <img v-if="j >  Math.ceil(qt / 3)" :src="require(`../assets/img/photography/${album}/thumb/${j}.jpg`)" />  
          </div> 
      </div>
      <div class="photo-column">
          <div v-for="j in qt" :key="j">
            <img v-if="j >  Math.ceil(qt / 3)*2" :src="require(`../assets/img/photography/${album}/thumb/${j}.jpg`)" />  
          </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: {
    album: String,
    qt: Number,
    j: Number
  },
};
</script>

<style scoped>
.photo-row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.photo-column {
  flex: 100%;
  max-width: 33%;
  padding: 0 4px;
}

.photo-column img {
  margin-top: 8px;
  vertical-align: middle;
  object-fit: cover;
  width: 100%;
}

@media screen and (max-width: 800px) {
  .photo-column {
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .photo-column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>