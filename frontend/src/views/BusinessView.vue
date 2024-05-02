<template>
    <div class="business-services">
      <div class="business-first-layer">
        <h1> Services </h1>
        <nav>
          <input class="nav-filter" type="text" placeholder="Search service..." v-model="searchTerm" @input="filterItems">
        </nav>
      </div>
        <div v-if="filteredItems.length === 0" class="no-matches">
            <span class="warning-icon">&#9888;</span> No matches found.
        </div>
        <div class="business-services-container">
            <ul class="business-service">
                <li class="business-service-box" v-for="item in filteredItems" :key="item.business_service_title">
                    <BusinessService :business="item"></BusinessService>
                </li>
            </ul>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
import BusinessService from '../components/BusinessService.vue';

  interface BusinessInfo {
    business_service_title: string;
    business_service_description: string;
    business_service_price: string;
  }

  export default defineComponent({
    name: 'BusinessView',
    components: {
      BusinessService
    },
    data() {
      return {
        items: [
            {
              business_service_title: "Haircut",
              business_service_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              business_service_price: "14.00€",
            },
            {
              business_service_title: "Pedicure",
              business_service_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              business_service_price: "14.00€",
            },
            {
              business_service_title: "Shave",
              business_service_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              business_service_price: "14.00€",
            },
            {
              business_service_title: "Nail Polish",
              business_service_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              business_service_price: "14.00€",
            },
        ] as BusinessInfo[],
        searchTerm: '',
        filteredItems: [] as BusinessInfo[]
      };
    },
    methods: {
      filterItems(): void {
        this.filteredItems = this.items.filter((item: BusinessInfo) => 
          item.business_service_title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      },
    },
    created() {
      this.filterItems();
    }
  });
  </script>
  
  <style scoped>
  .business-services {
    margin-top: 20px;
  }

  .business-first-layer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: 50%;
    margin: 0 auto;
  }

  .business-services h1 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  .business-services-container {
    display: flex;
    justify-content: center;
  }

  .business-service {
    margin-bottom: 20px;
    list-style: none;
    padding: 20px;
    border-radius: 5px;
  }

  .business-service-box {
    margin-bottom: 10px;
    
  }

  .business-service-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .business-service-description {
    font-size: 16px;
    color: #666;
    margin-bottom: 10px;
  }

  .business-service-price {
    font-size: 20px;
    color: #ff5722;
    /* or any other color you prefer */
  }

  @media screen and (max-width: 768px){
    .business-first-layer {
      width: 80%;
    }
  }

</style>