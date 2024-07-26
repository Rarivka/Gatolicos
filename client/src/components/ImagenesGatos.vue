<template>
  <div class="flex flex-wrap gap-2 justify-center">
    <div v-for="gato in gatos" :key="gato.name" class="m-4">
      <div>{{ gato.name }}</div>
      <img 
        :src="gato.url" 
        :alt="gato.name" 
        @click="girarImagen(gato)" 
        class="w-96 h-96 border-4 border-emerald-500 rounded-lg transform transition-transform duration-300" 
        :class="{ 'rotate-360': gato.girado }" 
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagenesGatos',
  data() {
    return {
      gatos: [
        { name: "Gato 2", url: "./img/gato-2.jpg", girado: false },
        { name: "Gato 3", url: "./img/gato-3.jpg", girado: false },
        { name: "Gato 4", url: "./img/gato-4.jpg", girado: false },
        { name: "Gato 5", url: "./img/gato-5.jpg", girado: false },
        { name: "Gato 6", url: "./img/gato-6.jpg", girado: false },
        { name: "Gato 7", url: "./img/gato-7.jpg", girado: false },
        { name: "Gato 8", url: "./img/gato-8.jpg", girado: false },
        { name: "Gato 9", url: "./img/gato-9.jpg", girado: false }
      ]
    };
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:3018/gatos");
      const content = await response.json();
      this.gatos = content.map(gato => ({ ...gato, girado: false }));
      console.log('Success', content);
    } catch (error) {
      console.error('Failed', error);
    }
  },
  methods: {
    girarImagen(gato) {
      console.log('Imagen clickeada:', gato.name);
      gato.girado = !gato.girado;
    }
  }
};
</script>

<style scoped>
.rotate-360 {
  transform: rotate(360deg);
}
</style>

