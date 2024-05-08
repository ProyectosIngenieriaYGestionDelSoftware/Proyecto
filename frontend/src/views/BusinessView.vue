<template>
  <div class="business-services">
    <nav>
      <!-- <input class="nav-filter" type="text" placeholder="Search service..." v-model="searchTerm" @input="filterItems"> -->
    </nav>

    <h1 class="bussiness-services-title"></h1>

    <v-stepper v-if="currentUser" :next-text="stepper==3?'Book':'Next'" :onUpdate:modelValue="onUpdate" :items="['Select service', 'Select date','Select hour','Confirmation']" v-model="stepper" style="width: 80%;">
      <template v-slot:item.1>
        <div class="business-services-container">
            <div class="business-service-box" v-if="business" v-for="item in business.services"
              :key="item.business_service_title" @click="nextStep(item)">
              <BusinessService :business="item" :currentUser="currentUser"></BusinessService>
          </div>
        </div>
      </template>

      <template v-slot:item.2>
        <v-stepper-window style="justify-content: center; display: flex">
          <v-date-picker color="primary" v-model="date"></v-date-picker>
        </v-stepper-window>
        
      </template>

      <template v-slot:item.3>
        <v-stepper-window style="justify-content: center; display: flex">
          <v-time-picker color="primary" format="24hr" v-model="time"></v-time-picker>
        </v-stepper-window>
        <!-- <v-btn @click="book">Book</v-btn> -->
      </template>

      <template v-slot:item.4>
        <v-stepper-window style="justify-content: center; display: flex">
          <h1>Reservation completed for service {{ selectedService.name }}</h1>
        </v-stepper-window>
        <v-spacer></v-spacer>
        <v-btn to="/" style="margin: 10px;">Go Back</v-btn>
      </template>

    </v-stepper>

    <div v-if="!currentUser" class="business-services-container">
      <ul class="business-service">
        <li class="business-service-box" v-if="business" v-for="item in business.services"
          :key="item.business_service_title" @click="nextStep(item)">
          <BusinessService :business="item" :currentUser="currentUser"></BusinessService>
        </li>
      </ul>
    </div>



    <p v-if="business&&business.services.length===0">
      There isn't any service registered.
    </p>


  </div>
</template>
  
<script lang="ts">
  import { useAuthStore } from '@/stores/auth';
  import { defineComponent, ref } from 'vue';
  import BusinessService from '../components/BusinessService.vue';
  import { useRoute } from 'vue-router'
import router from '@/router';

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

      let stepper = ref(1);

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

      let selectedService= ref();
      let date = ref();
      let time = ref();

      const nextStep = (service:any) => {
        selectedService.value = service;
        
        stepper.value=2;
      }

      const onUpdate = () => {
        if(stepper.value==3){
          book();
        }
      }

      const book = () => {
        const fecha = new Date(date.value);
        const hora = time.value;

        console.log(date,hora)

        const partesHora = hora.split(':');
        const horaActualizada = new Date(fecha);
        horaActualizada.setHours(partesHora[0]);
        horaActualizada.setMinutes(partesHora[1]);
        
        
        useAuthStore().newReservation(currentUser.value.id,route.params.id as string,selectedService.value,horaActualizada).then(res => {
          if(res==201) {
            stepper.value=4;
          }
        })
      }


      
      return { business, currentUser, stepper, nextStep, book, date , time, selectedService, onUpdate}
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
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    row-gap: 2em;
    column-gap: 2em;
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

  .booking-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.booking-form {
  background-size: contain;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1em;
  align-self: center;
}

.booking-title {
  font-family: 'Alfa Slab One', sans-serif;
  color:#45b4a8;
  text-shadow: 1px 1px 1px #2c3e50;
}

.booking-inputs {
  display: flex;
  flex-direction: column;
  justify-content: start flex;
  
  font-family: 'Playtipi';
  font-size: large;
}

.booking-inputs * {
  margin-bottom: 2em;
}

.booking-calendar {
  color: #2c3e50;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}

.booking-calendar::selection {
  background-color: #45b4a8;
  color: #fff;
}

.custom-select {
  color: #2c3e50;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}

.custom-select option {
  color: #2c3e50;
  background-color: #f0f0f0;
}

button {
  padding: 10px 20px;
  background-color: #45b4a8;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;  
  width: auto;
}

button:hover {
  background-color: #145354;
}

</style>