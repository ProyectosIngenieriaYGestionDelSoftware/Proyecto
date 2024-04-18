<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="register">Register</v-tab>
      <v-tab value="login">LogIn</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="register">
          <register></register>
        </v-window-item>

        <v-window-item value="login">
          <login></login>
        </v-window-item>

      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
  import Register from "../components/Register.vue";
  import Login from "../components/Login.vue";
  export default {
    components:{
      Register,
      Login
    },
    data: () => ({
      tab: null,
    }),
  }
</script>