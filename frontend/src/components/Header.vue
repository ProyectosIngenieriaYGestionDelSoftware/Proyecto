<template>
  <header class="header">
    <div class="brand" @click="goToHome">
      <img v-bind:src="require('../assets/cab_logo.png')" alt="Business Logo">
      <h3 style="cursor: pointer">Click & Book</h3>
    </div>
    <div class="sections">
      <chat-alert v-if="user?.user.is_business"></chat-alert>
      <nav>
        <router-link v-if="!user?.user.is_business" to="/all-businesses">Find Businesses</router-link>
        <router-link v-if="user?.user.is_business" to="/business/edit">Edit Services</router-link>
        <router-link v-if="user?.user.is_business" to="/business/reservations">View Reservations</router-link>
        <router-link v-if="user" to="/profile">Edit Profile</router-link>
      </nav>
    </div>
    <div class="auth">
      <router-link v-if="user===null" to="/auth">
        <v-btn id="authenticate" class="buttonsAuth">Log In / Sign Up</v-btn>
      </router-link>
      <router-link @click="logOut()" v-if="user" to="/auth">
        <v-btn class="buttonsAuth">Logout</v-btn>
      </router-link>
    </div>
  </header>
</template>

<script lang='ts'>
import { useAuthStore } from '@/stores/auth';
import { defineComponent, computed } from 'vue'
import ChatAlert from './ChatAlert.vue';
import router from '../router'


export default defineComponent({
    components : {
      ChatAlert
    },
    setup(props, ctx) {
        const authStore = useAuthStore();
        
        //console.log(authStore.user);
        
        const user = computed(() => authStore.user);
        


        const unsuscribe = authStore.$subscribe((mutation)=>{})


        const logOut = () => {
          if(user!==null) useAuthStore().logout(user.value!.token);
        }

        const goToHome = () => {
          router.push({ path: '/' });
        }
    
    return { user , logOut, goToHome };
  },
})
</script>


<style scoped>
.header {
  /*display: flex;
  justify-content: space-between;*/
  display: grid;
  grid-template-columns: 6fr 2fr 1fr;
  align-items: center;
  padding: 0.2em 1em;
  background-color: #0d1f29;
}

.brand {
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 3em;
  }

  h3{
    padding-left: 0.5em;
    font-family: 'Boldhead';
    color:#45b4a8;
  }
}

.sections {
  display: flex;
  align-items: center;
  nav {
    padding: 0px;
    display: flex;
  }
  
  nav a {
    font-family: 'Lilita One';
    font-size: large;
    padding: 30px;
    color: #45b4a8;
    text-decoration: none; 
   
  }

  nav a:hover{
    color: #145354,;
    text-decoration: underline; 
  }
  
  nav a.router-link-exact-active {
    color: #ffffff;
    text-decoration: underline; 
  }

}

.buttonsAuth {
  font-family: 'Lilita One';
  background-color: #218283;
  padding: 5px 10px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none; 
}

/*.auth a {
  color: #ffffff;
  text-decoration: none; 
}

.auth:hover {
  background-color: #145354;
}*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>