<template>
    <nav>
        <router-link @click="changeView()" to="/">Home</router-link> |
        <router-link @click="changeView()" to="/about">About</router-link> | 
        <router-link @click="changeView()" v-if="user===null" to="/auth">Authenticate</router-link>
    </nav>
</template>

<script lang='ts'>
import { useAuthStore } from '@/stores/auth';
import { defineComponent } from 'vue'


export default defineComponent({
    setup(props, ctx) {
        let { user } = useAuthStore();     
        useAuthStore().logout(user);

        const changeView = () => {
            user = useAuthStore().user;   
        };
    
    return { user, changeView };
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