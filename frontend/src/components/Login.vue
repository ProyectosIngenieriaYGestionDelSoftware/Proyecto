<template>
  <div class="mx-auto login">
    <v-form ref="form" novalidate @submit.prevent="onSubmit">
      <!-- <h1 class="mb-5 text-h3">Log In</h1>
      <v-divider class="mb-5"></v-divider> -->
      <v-text-field
        class="mb-1"
        v-model="username.value.value"
        :error-messages="username.errorMessage.value"
        type="text"
        label="Username"
        append-inner-icon="mdi-account"
        required
      ></v-text-field>
      <v-text-field
        class="mb-1"
        v-model="password.value.value"
        :type="showPassword?'text':'password'"
        label="Password"
        :error-messages="password.errorMessage.value"
        :append-inner-icon="showPassword?'mdi-eye':'mdi-eye-off'"
        @click:append-inner="showHidePassword('password')"
        required
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Login</v-btn>
    </v-form>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'
import * as Yup from 'yup';

let showPassword = ref(false);

function showHidePassword() {
  showPassword.value = !showPassword.value;
}

const schema = Yup.object().shape({
  username: Yup.string().required('Username is a required field'),
  password: Yup.string().required('Password is a required field')
});

const { handleSubmit } = useForm({
  validationSchema: schema
});

const username = useField('username');
const password = useField('password');

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

</script>

<style>
.login {
  width: 350px;
  padding: 10px;
}
@media screen and (max-width: 400px){
  .login {
    min-width: 80%;
    max-width: 100%;
  }
}

</style>
