<template>
  <section id="authSection">
    <v-card id="authCard">
      <v-tabs
        v-model="tab"
        bg-color="primary"
        grow
      >
        <v-tab value="register">Register</v-tab>
        <v-tab value="login">LogIn</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="register">
              <Register></Register>
          </v-window-item>

          <v-window-item value="login">
            <Login></Login>
          </v-window-item>

        </v-window>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
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

<style>
#authCard{
  margin: 10px;
  width: auto;
}

#authSection{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>