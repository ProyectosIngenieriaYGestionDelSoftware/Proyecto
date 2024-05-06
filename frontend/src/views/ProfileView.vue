<template>
  <div class="profile-view">
    <h1 class="profile-title">Profile</h1>

    <v-card class="profile-container">
      <div class="profile-box">
        <img class="profile-img" :src="image" :alt="name"></img>
      </div>

      <v-form class="profile-info">
        <div class="profile-data">
          <p>
            Is it a Business?: 
            <v-icon icon="mdi-check-bold" v-if="user.is_business" color="success"></v-icon>
            <v-icon icon="mdi-close-thick" v-if="!user.is_business" color="error"></v-icon> 
          </p>
        </div>
        <div class="profile-data">
          <label for="name">Name: </label>
          <v-text-field variant="solo" v-model="user.name"></v-text-field>
        </div>
        <div class="profile-data">
          <label for="email">E-mail: </label>
          <v-text-field disabled variant="solo" v-model="user.email"></v-text-field>
        </div>
        <div class="profile-data" >
          <label for="phone">Phone Number: </label>
          <v-text-field variant="solo" v-model="user.phone_number"></v-text-field>
        </div>
        <div class="profile-data" v-if="user.is_business">
          <label for="type">Type of business: </label>
          <v-select variant="solo"></v-select>
        </div>
        <div class="profile-data" v-if="user.is_business">
          <label for="location">Location: </label>
          <v-text-field variant="solo" v-model="user.direction"></v-text-field>
        </div>
        <div class="profile-buttons">
          <v-btn type="button" id="profile-edit-button" @click="editProfile">{{ isEditable ? 'Save' : 'Edit'
            }}</v-btn>
          <v-btn id="profile-services-button" v-if="user.is_business" @click="seeServices">SEE SERVICES</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>
  
<script>

  import { useAuthStore } from '@/stores/auth';

  export default {
    name: 'ProfileView',
    data() {
      return {
        image: require('@/assets/businesses/business2.jpeg'),

      };

    },
    setup(){
      const user = useAuthStore().user.user;
      console.log(user)
      return { user }
    },
    methods: {
      seeServices() {
        // Obtener el nombre del lugar almacenandola en esta variable
        const name = 'Beauty Palace'; // Este valor puede ser dinámico, dependiendo de tu implementación
        // Codificar el nombre del lugar para asegurarse de que sea válido en una URL
        const encodedName = encodeURIComponent(name);
        // Redirigir a la página de servicios con el nombre del lugar en la URL
        this.$router.push(`/business/${encodedName}`);
      },
      editProfile() {
        this.isEditable = !this.isEditable;
        this.$forceUpdate();
  // Realizar acciones adicionales al cambiar entre modo de edición y no edición
  // Por ejemplo, enviar una solicitud de actualización al backend
        }
      }
    };
</script>
  
  <style scoped>
  .profile-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 1em;
  }
  
  .profile-title {
    font-family: 'Alfa Slab One', sans-serif;
    color:#45b4a8;
    text-shadow: 1px 1px 1px #2c3e50;
  }
  
  .profile-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    background-size: contain;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1em;
    align-self: center;
  }

  .profile-info {
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
  }

  .profile-data {
    margin-bottom: 1em;
    text-align: justify;
    width: 100%;
  }
  
  .profile-data label, .profile-data p {
    font-family: 'Lilita One';
    font-size: large;
    margin-left: 0;
    color: #2c3e50;
  }

  .profile-data input, #type {
    font-family: 'Playtipi';
    font-size: large;
    margin-left: 0.2em;
    color: #2c3e50;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
  }

  .custom-checkbox {
    width: 20px;
    height: 20px;
  }


  .profile-buttons {
    display: flex;
    flex-direction: column;
  }
  
  button {
    padding: 5px 10px;
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

  #profile-edit-button {
    margin-bottom: 1em;
    background-color: #2c3e50;
  }

  #profile-edit-button:hover {
    background-color: #0f1922;
  }
  </style>
  