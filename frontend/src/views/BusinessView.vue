<template>
    <div class="business-services">
      <nav>
        <!-- <input class="nav-filter" type="text" placeholder="Search service..." v-model="searchTerm" @input="filterItems"> -->
      </nav>
        
      <h1 class="bussiness-services-title"> Services </h1>

      <p  v-if="business&&business.services.length===0">
        There isn't any service registered.
      </p>
        
        <div v-if="filteredItems.length === 0" class="no-matches">
            <span class="warning-icon">&#9888;</span> No matches found.
        </div>
        <div class="business-services-container">
            <ul class="business-service">
                <li class="business-service-box" v-if="business" v-for="item in business.services" :key="item.business_service_title">
                    <BusinessService :business="item" :currentUser="currentUser"></BusinessService>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script lang="ts">
  import { useAuthStore } from '@/stores/auth';
  import { defineComponent, ref } from 'vue';
  import BusinessService from '../components/BusinessService.vue';
  import { useRoute } from 'vue-router'

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

    setup(){

      const route = useRoute();
      const business = ref(); 

      const currentUser = ref();
      currentUser.value = useAuthStore().user;
    
      useAuthStore().getBusiness(route.params.id as string).then(res => {
        if(res){
          business.value = res;
          console.log(business.value);
          
        }else{
          console.log("No hay empresas");
        }
      });


      return { business, currentUser }
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .business-services h1 {
    font-family: 'Alfa Slab One', sans-serif;
    color:#45b4a8;
    text-shadow: 1px 1px 1px #2c3e50;
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

nav {
  align-self: flex-end;
  padding: 1em 1em 0 0;
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

  @media screen and (max-width: 768px){
    .business-first-layer {
      width: 80%;
    }
  }

</style>