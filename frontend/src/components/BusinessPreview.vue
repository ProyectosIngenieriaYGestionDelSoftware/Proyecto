<template>
    <div class="preview_business-container">
      <img class="preview_business-img" :src="business.business_preview_image" :alt="business.business_name">
      <p class="preview_business-name">{{ business.business_name }}</p>
      <p class="preview_business-address">{{ business.business_address }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BusinessPreview',
    props: {
      business: {
        type: Object,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  .preview_business-container {
    width: 100%;
    height:auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    border-radius: 20px;
    border: 1px solid #2c3e50;
  }
  
  .preview_business-img {
    width: 100%;
    height: auto !;
    object-fit: cover;
  }

  .preview_business-name {
    color: #45b4a8;
    font-family: 'Lilita One', sans-serif;
    font-size: 1.5em;
    margin-bottom: 0em;
    padding: 0 0.2em;
  }

  .preview_business-address {
    color: #2c3e50;
    height: 100%;
    padding: 0 0.2em;
  }
  </style>
  