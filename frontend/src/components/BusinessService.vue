<template>
    <v-card class="business-service">
        <v-card-title class="business-service-title"> {{ business.name }} </v-card-title>
        <v-card-text class="business-service-description"> {{ business.description }}  </v-card-text>
        <v-card-text class="business-service-price"> {{ business.price }} € </v-card-text>
        <!-- <v-btn :disabled="currentUser==null" class="btn btn-primary" @click="navigateToBooking">Book now</v-btn> -->
        <v-card-text class="business-service-description" v-if="currentUser==null">You need to be registered to make a booking.</v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BusinessService',
    props: {
      business: {
        type: Object,
        required: true
      },
      currentUser:{
        type:Object,
        required:false
      },

    },

    methods: {
      navigateToBooking() {
        const url = `/business/booking/${encodeURIComponent(this.business.business_service_title)}`;
        window.location.href = url;
      }
    }
  });
  </script>
  
  <style scoped>
  .business-service {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    width: 300px;
    height: 200px;
  }

  .business-service-title {
    font-family: 'Lilita One', sans-serif;
    color: #2c3e50;
  }

  .business-service-description {
    font-family: 'Platype', sans-serif;
    color: #666;
    margin:0;
    
  }

  .business-service-price {
    font-size: 20px;
    color: #2c3e50;
    font-weight: bold;
    margin: 0;
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
  