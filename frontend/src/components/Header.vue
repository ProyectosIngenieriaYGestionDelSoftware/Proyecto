<template>
  <header class="header">
    <div class="brand" @click="goToHome">
      <img v-bind:src="require('../assets/cab_logo.png')" alt="Business Logo">
      <h3>Click & Book</h3>
    </div>
    <div class="sections">
      <nav>
        <!-- <router-link to="/all">Find & Book Your Appointment</router-link> -->
        <!-- <router-link  to="/about">About</router-link> -->
      </nav>
    </div>
    <div class="auth">
      <router-link  id="authenticate" v-if="user===null" to="/auth">Log In / Sign Up</router-link>
      <router-link @click="logOut()" v-if="user!==null" to="/auth">Logout</router-link>
    </div>
  </header>
</template>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
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
  nav {
    padding: 0px;
  }
  
  nav a {
    font-weight: bold;
    color: #45b4a8;
  }

  nav router-link :hover{
    font-weight: bold;
    color: #45b4a8,;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
}

#authenticate {
  padding: 10px 20px;
  background-color: #218283;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>


<script lang='ts'>
import { useAuthStore } from '@/stores/auth';
import { defineComponent, computed } from 'vue'
import router from '../router'


export default defineComponent({
    setup(props, ctx) {
        const authStore = useAuthStore();
        
        //let user = authStore.user;
        
        const user = computed(() => authStore.user);


        const unsuscribe = authStore.$subscribe((mutation)=>{})


        const logOut = () => {
          authStore.user = useAuthStore().logout(user.value.token);
        }

        const goToHome = () => {
          router.push({ path: '/' });
        }
    
    return { user , logOut, goToHome };
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
