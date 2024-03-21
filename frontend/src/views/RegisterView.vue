<template>
  <v-card class="mx-auto px-6 py-8" max-width="400">
      
    <v-form ref="form">
      <h1>Sign Up</h1>
      <v-text-field
        v-model="email"
        :rules="[v => !!v || 'Email is required']"
        type="email"
        label="Email"
        append-inner-icon="mdi-email"
        required
      ></v-text-field>
      <v-text-field 
        v-model="password"
        type="password" 
        label="Create Password"
        :rules="[v => !!v || 'Password is required']" 
        append-inner-icon="mdi-lock"
        required
      ></v-text-field>
      <v-text-field
        v-model="confirmPassword"
        type="password"
        label="Confirm password"
        :rules="[v => !!v || 'Confirmed password is required']" 
        append-inner-icon="mdi-lock"
        required
      ></v-text-field>
      <v-btn class="mt-2" @click="validate" block>Submit</v-btn>
    </v-form>

  </v-card>
</template>

<script>
export default {
  data: () => ({
    email:'',
    password:'',
    conformPassword:''
  }),

  methods: {
    async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) alert('Form is valid')
      }
  }
}
</script>