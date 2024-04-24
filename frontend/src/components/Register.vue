<template>
  <div class="mx-auto register">
    <div id="buttonSection">
      <v-btn icon @click="goBackForm" v-if="showSecondForm" class="backButton" size="small">
        <v-icon>
          {{ showSecondForm ? 'mdi-arrow-left' : '' }}
        </v-icon>
      </v-btn>
    </div>

    <!-- <v-card-title>
      <h1 class="mb-5 text-h4">Sign Up</h1>
    </v-card-title>
    <v-divider class="mb-5"></v-divider> -->
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
          v-model="phoneNumber.value.value"
          :error-messages="phoneNumber.errorMessage.value"
          type="tel"
          label="Phone number"
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
      
      <second-form-register :class="showSecondForm?'d-block':'d-none'" @submit="(value)=>onSecondSubmit(value.value)"></second-form-register>
      <v-alert
        v-if="showErrorAlert"
        text="Error during the register, try again with another email"
        color="error"
        icon="$error"
      ></v-alert>
    </v-card-text>
  </div>
</template>

<script setup>

  import SecondFormRegister from "../components/SecondFormRegister.vue"

  import { useField, useForm } from 'vee-validate'
  import router from '../router'
  import { ref } from 'vue'
  import * as Yup from 'yup';
  import { useAuthStore } from '../stores/auth'


  let showPassword = ref(false);
  let showConfirmPassword = ref(false);
  let showErrorAlert = ref(false);

  let showFirstForm = ref(true);
  let showSecondForm = ref(false);

  const currentUser = useAuthStore().user;
  if(currentUser!=null) router.push("/");

  function showHidePassword(type){
    if(type==="password"){
      showPassword.value = !showPassword.value;
    }else{
      showConfirmPassword.value = !showConfirmPassword.value;
    }
  }

  function goBackForm(){
    showSecondForm.value = false;
    showFirstForm.value = true;
    showErrorAlert.value = false;
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const schema = Yup.object().shape({
    email: Yup.string().required('Email is a required field').email('Must be a valid email'),
    username: Yup.string().required('Username is a required field'),
    phoneNumber: Yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
    password: Yup.string().min(6,'Must be at least 6 characters long').required('Password is a required field'),
    confirmPassword: Yup.string().required('Confirm password is a required field').oneOf([Yup.ref('password')], 'Passwords do not match')
  });

  const { handleSubmit } = useForm({
    validationSchema: schema
  });

  const email = useField('email')
  const username = useField('username')
  const phoneNumber = useField('phoneNumber')
  const password = useField('password')
  const confirmPassword = useField('confirmPassword')



  const onFirstSubmit = handleSubmit(values=>{
      //console.log(values)
      showFirstForm.value = false;
      showSecondForm.value = true;
  })

  async function onSecondSubmit(is_business,typeBusiness){
    const registerCode = await useAuthStore().register(
      username.value.value,
      password.value.value,
      email.value.value,
      phoneNumber.value.value,
      is_business,
      typeBusiness
    );

    if(registerCode==200){
      router.push("/");
    }else{
      showErrorAlert.value = true;
    }
  } 

</script>

<style>

.register{
  display: flex;
  flex-direction: column;
  width: 350px;
  
  padding:10px;
  box-sizing: border-box;
}

#buttonSection{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
}

@media screen and (max-width: 400px){
  .register {
    min-width: 80%;
    max-width: 100%;
  }
}
</style>