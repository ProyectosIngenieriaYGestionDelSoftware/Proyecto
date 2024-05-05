<template>
    <v-card class="preview_business-container" width="400" height="400">
      <v-img aspect-ratio="4/3" height="300" width="400" cover class="preview_business-img" :src="business.business_preview_image" :alt="business.business_name"></v-img>
      <v-card-item>
        <v-card-title class="preview_business-name">{{ business.business_name }}</v-card-title>
        <v-card-text class="preview_business-address">{{ business.business_address }}</v-card-text>
      </v-card-item>
      
      
    </v-card>
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
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #2c3e50;
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
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden ;
    text-overflow: ellipsis;
  }
  </style>
  