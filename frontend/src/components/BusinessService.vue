<template>
    <div class="business-service">
        <h3 class="business-service-title"> {{ business.business_service_title }} </h3>
        <p class="business-service-description"> {{ business.business_service_description }} </p>
        <p class="business-service-price"> {{ business.business_service_price }} </p>
        <button class="btn btn-primary" @click="navigateToBooking">Book now</button>
    </div>
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
  }

  .business-service-title {
    font-family: 'Lilita One', sans-serif;
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .business-service-description {
    font-family: 'Platype', sans-serif;
    color: #666;
    margin-bottom: 10px;
  }

  .business-service-price {
    font-size: 20px;
    color: #2c3e50;
    font-weight: bold;
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
  