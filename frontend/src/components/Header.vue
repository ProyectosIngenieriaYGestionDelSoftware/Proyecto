<template>
  <header class="header">
    <div class="brand" @click="goToHome">
      <img v-bind:src="require('../assets/logo.png')" alt="Business Logo">
      <h3>Click & Book</h3>
    </div>
    <div class="sections">
      <nav>
        <router-link to="/all">Find & Book Your Appointment</router-link>
      </nav>
    </div>
    <div class="auth">
      <button @click="login">Log In / Sign Up</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent( {
  name: 'Header',
  props: {
  },
  data() {
  },
  methods: {
    goToHome() {
      this.$router.push({ path: '/' });
    },
    login() {
      alert('Log in...');
    }
  }
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 1em;
  background-color: #f0f0f0;
}

.brand {
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 3em;
  }

  h3{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
}

.sections {
  nav {
    padding: 0px;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
}

.auth button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
