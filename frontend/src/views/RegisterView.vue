<template>
  <v-card class="mx-auto card">
    <v-card-title>
      <h1 class="mb-5 text-h3">Sign Up</h1>
    </v-card-title>
    <v-divider class="mb-5"></v-divider>
    <v-card-text>
      <v-form ref="form" novalidate @submit.prevent="onFirstSubmit" :class="showFirstForm?'d-block':'d-none'">
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
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          type="email"
          label="Email"
          append-inner-icon="mdi-email"
          required
        ></v-text-field>
        <v-text-field 
          class="mb-1"
          v-model="password.value.value"
          :type="showPassword?'text':'password'"
          label="Create Password"
          :error-messages="password.errorMessage.value"
          :append-inner-icon="showPassword?'mdi-eye':'mdi-eye-off'"
          @click:append-inner="showHidePassword('password')"
          required
        ></v-text-field>
        <v-text-field
          class="mb-1"
          v-model="confirmPassword.value.value"
          :type="showConfirmPassword?'text':'password'"
          label="Confirm password"
          :error-messages="confirmPassword.errorMessage.value" 
          :append-inner-icon="showConfirmPassword?'mdi-eye':'mdi-eye-off'"
          @click:append-inner="showHidePassword('confirmPassword')"
          required
        ></v-text-field>
        <v-btn class="mt-2" type="submit" block>Next</v-btn>
      </v-form>
      
      <second-form-register :class="showSecondForm?'d-block':'d-none'"></second-form-register>
    </v-card-text>
  </v-card>
</template>

<script setup>

  import SecondFormRegister from "../components/SecondFormRegister.vue"

  import { useField, useForm } from 'vee-validate'
  import { ref } from 'vue'
  import * as Yup from 'yup';


  let showPassword = ref(false);
  let showConfirmPassword = ref(false);

  let showFirstForm = ref(true);
  let showSecondForm = ref(true);


  function showHidePassword(type){
    if(type==="password"){
      showPassword.value = !showPassword.value;
    }else{
      showConfirmPassword.value = !showConfirmPassword.value;
    }
  }

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is a required field').email('Must be a valid email'),
    username: Yup.string().required('Username is a required field'),
    password: Yup.string().min(6,'Must be at least 6 characters long').required('Password is a required field'),
    confirmPassword: Yup.string().required('Confirm password is a required field').oneOf([Yup.ref('password')], 'Passwords do not match')
  });

  const { handleSubmit } = useForm({
    validationSchema: schema
  });

  const email = useField('email')
  const username = useField('username')
  const password = useField('password')
  const confirmPassword = useField('confirmPassword')

  const onFirstSubmit = handleSubmit(values=>{
      alert(JSON.stringify(values, null, 2))
      showFirstForm.value = false;
      showSecondForm.value = true;
  })


</script>

<style>
.card{
  position:absolute;
  min-height: 250px;
  max-width: 450px;
  width: 80%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding:24px;
  box-sizing: border-box;
}
</style>