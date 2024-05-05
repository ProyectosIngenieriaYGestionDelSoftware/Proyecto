<template>  
  <v-app>
    <Header></Header>
    <v-main>
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

  setup(props, ctx) {
    useAuthStore().initUser()
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

::-webkit-scrollbar {
  width: 0.8em;
  background-color: #0d1f29;;
}
 
::-webkit-scrollbar-thumb {
  background-color: #145354;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #45b4a8;
  border-radius: 5px;
}
::-webkit-scrollbar-button {
  background-color: #2c3e50;
}
</style>
