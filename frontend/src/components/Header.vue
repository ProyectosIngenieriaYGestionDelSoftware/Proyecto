<template>
    <nav>
        <router-link  to="/">Home</router-link> |
        <router-link  to="/about">About</router-link> | 
        <router-link  v-if="user===null" to="/auth">Authenticate</router-link>
        <router-link @click="logOut()" v-if="user!==null" to="/auth">Logout</router-link>
    </nav>
</template>

<script lang='ts'>
import { useAuthStore } from '@/stores/auth';
import { defineComponent, computed } from 'vue'


export default defineComponent({
    setup(props, ctx) {
        const authStore = useAuthStore();
        
        //let user = authStore.user;
        
        const user = computed(() => authStore.user);


        const unsuscribe = authStore.$subscribe((mutation)=>{})


        const logOut = () => {
          authStore.user = useAuthStore().logout(user.value.token);
        }
    
    return { user , logOut };
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