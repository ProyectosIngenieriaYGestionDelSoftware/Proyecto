<template>   
    <Carousel :autoplay="4000" :wrap-around="true" class="carousel_box">
        <Slide v-for="slide in slides" :key="slide.id">
            <img :src="require(`../assets/ads/${slide.image}`)" alt="Slide Image" class="carousel__image" />
        </Slide>
  
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'AdCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
        slides: [
        { id: 1, image: 'ad1.jpg' },
        { id: 2, image: 'ad2.jpg' },
        { id: 3, image: 'ad3.jpg' },
        { id: 4, image: 'ad4.jpg' },
      ]
    }
  }
});
</script>

<style scoped>
.carousel_container {
  text-align: center; /* Centra horizontalmente los elementos */
}

.carousel_box {
  width: 30%;
  height: 30%;
  display: inline-block; /* Mantiene el carousel como un bloque en línea */
  vertical-align: middle; /* Centra verticalmente el carousel */
}

.carousel__image {
  width: 100%;
  height: auto;
}
</style>