<template>
    <div class="profile-view">
        <h1 class="profile-title">Profile</h1>
        
        <div class="profile-container">
            <div class="profile-box">
                <img class="profile-img" :src="image" :alt="name"></img>
            </div>
    
            <form class="profile-info">
                <div class="profile-data">
                    <label for="is_business">Is it a Business?: </label>
                    <input type="checkbox" id="is_business" v-model="is_business" :disabled="!isEditable" class="custom-checkbox">
                </div>
                <div class="profile-data">
                    <label for="name">Name: </label>
                    <input type="text" id="name" v-model="name" :disabled="!isEditable">
                </div>
                <div class="profile-data">
                    <label for="email">E-mail: </label>
                    <input type="text" id="email" v-model="email" disabled>
                </div>
                <div class="profile-data">
                    <label for="phone">Phone Number: </label>
                    <input type="text" id="phone" v-model="phone_number" :disabled="!isEditable">
                </div>
                <div class="profile-data">
                    <label for="type">Type: </label>
                    <select id="type" v-model="type" :disabled="!isEditable">
                        <option v-for="(option, index) in typeOptions" :value="option.id" :key="index">{{ option.name }}</option>
                    </select>
                </div>
                <div class="profile-data">
                    <label for="location">Location: </label>
                    <input type="text" id="location" v-model="location" :disabled="!isEditable">
                </div>
                <div class="profile-buttons">
                    <button type="button" id="profile-edit-button" @click="editProfile">{{ isEditable ? 'Save' : 'Edit' }}</button>
                    <button id="profile-services-button" @click="seeServices">SEE SERVICES</button>
                </div>  
            </form>
        </div>      
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileView',
    data() {
        return {
            image: require('@/assets/businesses/business2.jpeg'),
            is_business: true,
            name: "Awesome Business Name",
            email: "dummy@gmail.com",
            phone_number: "123-123-123",
            type: '1',
            location: "Fake Street, 123",

            isEditable: false,
            typeOptions: [
            { id: '1', name: 'Tipo 1' },
            { id: '2', name: 'Tipo 2' },
            { id: '2', name: 'Tipo 3' },
            ]
        };
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
  }
  
  .profile-data label {
    font-family: 'Lilita One';
    font-size: large;
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
  