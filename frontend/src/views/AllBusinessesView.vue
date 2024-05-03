<template>
    <div class="all_businesses-container">
      <h1 class="bussiness-services-title"> Businesses </h1>
      
      <div class="carousel-container">
        <AdCarousel />
      </div>

      <hr> </hr>
      
      <div class="businesses-container">
        <nav>
          <input class="nav-filter" type="text" placeholder="Search business..." v-model="searchTerm" @input="filterItems">
        </nav>

        <div v-if="filteredItems.length === 0" class="no-matches">
            <span class="warning-icon">&#9888;</span> No matches found.
        </div>
  
        <ul class="businesses-boxes">
          <li class="business-box" v-for="item in filteredItems" :key="item.business_name" @click="navigateToBusiness(item)">
            <BusinessPreview :business="item"></BusinessPreview>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from 'vue';
import AdCarousel from '../components/AdCarousel.vue';
import BusinessPreview from '@/components/BusinessPreview.vue';

interface Business {
  business_preview_image: any;
  business_name: string;
  business_address: string;
}

export default defineComponent({
  name: 'AllBusinessesView',
  components: {
    AdCarousel,
    BusinessPreview
  },
  data() {
    return {
      items: [
        {
          business_preview_image: require('@/assets/businesses/business1.jpeg'),
          business_name: "Brooklyn Barber Shop Paterna",
          business_address: "Avenida Vicente Mortes 62, Bajo A, 46980, Paterna",
        },
        {
          business_preview_image: require('@/assets/businesses/business2.jpeg'),
          business_name: "Beauty Palace",
          business_address: "Calle Torres, 12, 35002, Las Palmas de Gran Canaria",
        },
        {
          business_preview_image: require('@/assets/businesses/business3.jpeg'),
          business_name: "Divinity Barber Shop",
          business_address: "C.Republica Dominicana 33, Esq. Costa Rica, Local, 35010, Las Palmas de Gran Canaria",
        },
        {
          business_preview_image: require('@/assets/businesses/business4.jpeg'),
          business_name: "Organic Beauty",
          business_address: "Calle Cirilo Moreno, 22, 35007, Las Palmas de Gran Canaria",
        },
      ] as Business[], // Especificamos el tipo de datos como Business[]
      searchTerm: '',
      filteredItems: [] as Business[] // Inicializamos filteredItems con el mismo tipo de datos que items
    };
  },
  methods: {
    filterItems(): void {
      this.filteredItems = this.items.filter((item: Business) => // Especificamos el tipo de datos para 'item'
        item.business_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },

    navigateToBusiness(item: Business): void {
      const url = `/business/${encodeURIComponent(item.business_name)}`;
      window.location.href = url;
    }
  },
  created() {
    this.filterItems();
  }
});
</script>

  
<style scoped>
.all_businesses-container {
    padding-top: 1em;
    background-color: #f0f0f0;
}

.all_businesses-container h1 {
  font-family: 'Alfa Slab One', sans-serif;
  color:#45b4a8;
  text-shadow: 1px 1px 1px #2c3e50;
}

nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1em 6em;
}
.nav-filter {
    border-radius: 20px;
    border: 3px solid #2c3e50;
    transition: border-color 0.3s ease;
    text-indent: 1em;
    width: 20vw;
    height: 5vh;
}
.nav-filter:focus {
    outline: none;
    border-radius: 20px;
    border: 3px solid #45b4a8;
}

.no-matches {
    margin: 25vh;
    font-size: 3em;
    color: red; 
}
  
  
.businesses-boxes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 6em;
    grid-row-gap: 2em;
    justify-items: center;
    align-items: baseline;

    padding: 2em 6em;
    margin: 0;
}
.business-box {
    list-style: none;
    padding: 0;
    margin: 0;
}

.carousel-container {
    padding: 2em 0;
    border-color: #2c3e50;
}

.va-carousel__slide {
    font-size: 48px;
}

hr {
  display: flex;
  align-self: center;
  height: 3px;
  background-image: linear-gradient(to right, transparent, #45b4a8, transparent);
}
</style>
  