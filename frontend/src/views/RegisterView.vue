<template>
  <v-card class="mx-auto card">
      
    <v-form ref="form" novalidate @submit.prevent="onSubmit">
      <h1 class="mb-5 text-h3">Sign Up</h1>
      <v-divider class="mb-5"</v-divider>
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        type="email"
        label="Email"
        append-inner-icon="mdi-email"
        required
      ></v-text-field>
      <v-text-field 
        v-model="password.value.value"
        type="password" 
        label="Create Password"
        :error-messages="password.errorMessage.value"
        append-inner-icon="mdi-lock"
        required
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword.value.value"
        type="password"
        label="Confirm password"
        :error-messages="confirmPassword.errorMessage.value" 
        append-inner-icon="mdi-lock"
        required
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>

  </v-card>
</template>

<script setup>
  import { useField, useForm } from 'vee-validate'
  import * as Yup from 'yup';
  

  const schema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().min(6).required(),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Passwords do not match')
  });

  const { handleSubmit } = useForm({
    validationSchema: schema
  });

  const email = useField('email')
  const password = useField('password')
  const confirmPassword = useField('confirmPassword')

  const onSubmit = handleSubmit(values=>{
      alert(JSON.stringify(values, null, 2))
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