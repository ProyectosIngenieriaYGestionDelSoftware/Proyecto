<template>
  <v-app>
    <v-main>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | 
        <router-link to="/auth">Register</router-link>
      </nav>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',

  components: {
    Footer,
  },

  data () {
    return {
      //
    }
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
