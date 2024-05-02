<template>
    <div class="business-service">
        <h3 class="business-service-title"> {{ business.business_service_title }} </h3>
        <p class="business-service-description"> {{ business.business_service_description }} </p>
        <p class="business-service-price"> {{ business.business_service_price }} </p>
        <button class="btn btn-primary">Book now</button>
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
    color: #45b4a8;
    font-weight: bold;
  }

</style>
  