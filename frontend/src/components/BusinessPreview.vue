<template>
    <v-card class="preview_business-container" width="400" height="400">
      <v-img aspect-ratio="4/3" height="300" width="400" cover class="preview_business-img" :src="business.business_preview_image" :alt="business.business_name"></v-img>
      <!-- <v-img aspect-ratio="4/3" height="300" width="400" cover class="preview_business-img" src="@/assets/businesses/business1.jpeg" :alt="business.business_name"></v-img> -->
      <v-card-item>
        <v-card-title class="preview_business-name">{{ business.name }}</v-card-title>
        
        <v-card-text class="preview_business-address">{{ business.name }}<!--Tiene que ir el business.direction--></v-card-text>
      </v-card-item>

      <v-card-actions style="width: 100%; background-color: #45B4A8;">
        <v-btn class="card-button" append-icon="mdi-chat-processing-outline" width="50%" text="Chat" @click="goToChat"></v-btn>
        <v-btn class="card-button" append-icon="mdi-arrow-right" width="50%" height="100%" text="Book" @click="navigateToBusiness"></v-btn>
      </v-card-actions>
      
    </v-card>

    <v-dialog v-model="showChat">
      <ChatView style="justify-self: center;" @closeChat="showChat = false" :other-user="business"></ChatView>
    </v-dialog>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ChatView from '@/views/ChatView.vue';
  import { useAuthStore } from '@/stores/auth';
  import router from '../router/index';
  
  export default defineComponent({
    name: 'BusinessPreview',
    components: {
      ChatView
    },
    props: {
      business: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const showChat = ref(false);
      const user = useAuthStore().user?.user
      console.log(props.business);

      const navigateToBusiness=  (): void =>  {
        const url = `/business/${encodeURIComponent(props.business._id)}`;
        window.location.href = url;
      }

      const goToChat = () => {
        if(user === undefined) {
          router.push({name:'register'});
        }else{
          showChat.value = true;
        }
      }

      return {
        showChat,
        navigateToBusiness,
        goToChat
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

  .card-button{
    top: -5px; 
    font-family: 'Lilita One', sans-serif;
  }
  </style>
  