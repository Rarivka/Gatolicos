<template >
<Header />
  <div class="container mx-auto p-4 space-y-4" id="app">
     
  <h1 class="text-emerald-300 font-bold text-7xl" > Gatólicos </h1>
  <ImagenesGatos />
  </div>
</template>
<script>
import Header  from './components/Header.vue';
import ImagenesGatos from './components/ImagenesGatos.vue';


export default {
name:'app', 
components:{ImagenesGatos,Header}
  
}
</script>
<style scoped>
.pawprints {
    background-image: url("@/assets/pawprints.jpg"); 
    background-repeat: repeat;
    background-size: cover;
  }
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #681212;
  margin-top: 60px;
}
</style>
