<template>
  <v-app>
    <v-main>
      <Header></Header>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import { useAuthStore } from './stores/auth';

export default defineComponent({
  name: 'App',

  components: {
    Footer,
    Header
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
</style>
