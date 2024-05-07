<template>
    <div class="all_businesses-container">
      <h1 class="bussiness-services-title"> Businesses </h1>
      
      <div class="carousel-container">
        <AdCarousel />
      </div>

      <hr> </hr>
      
      <div class="businesses-container">

        <p v-if="businesses.length===0">
          "There isn't any business registered."
        </p>


        <nav>
          <!-- <input class="nav-filter" type="text" placeholder="Search business..." v-model="searchTerm" @input="filterItems"> -->
        </nav>

        <!-- <div v-if="filteredItems.length === 0" class="no-matches">
            <span class="warning-icon">&#9888;</span> No matches found.
        </div> -->
  
        <section class="businesses-boxes">
          <div class="business-box" v-for="business in businesses" :key="business">
            <BusinessPreview :business="business"></BusinessPreview>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import AdCarousel from '../components/AdCarousel.vue';
import BusinessPreview from '@/components/BusinessPreview.vue';
import { User } from '@/helper';

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

  setup(){
    
    const businesses = ref([]); 
    
    useAuthStore().getAllBusiness().then(res => {
      if(res){
        businesses.value = res;
        console.log(businesses.value);
        
      }else{
        console.log("No hay empresas");
      }
    });


    return { businesses }
  },

  data() {
    return {
      searchTerm: '',
      filteredItems: [] as Business[] // Inicializamos filteredItems con el mismo tipo de datos que items
    };
  },
  methods: {
    filterItems(): void {
      this.filteredItems = this.businesses.filter((item: Business) => // Especificamos el tipo de datos para 'item'
        item.business_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },

    navigateToBusiness(item: User): void {
      const url = `/business/${encodeURIComponent(item._id)}`;
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
    display: flex;
    flex-wrap: wrap;
    column-gap: 5em;
    row-gap: 2em;
    justify-content: center;
    width: 100%;
    padding: 2em 6em;
    margin: 0;
}

.businesses-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  