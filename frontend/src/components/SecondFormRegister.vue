<template>
  <v-form @submit.prevent="onSubmit">
    <section class="sectionTypeUser">
      <v-card link @click="selectItem(firstOption)" :class="{ 'outlined': clientSelected , 'non-outlined':!clientSelected }">
        <v-card-title>
            <h1 class="mb-5 text-h5">Client</h1>
        </v-card-title>
        <v-img  :width="200" src="../assets/clientImageRegister.png"></v-img>
      </v-card>

      <v-card link @click="selectItem(secondOption)" :class="{ 'outlined': businessSelected , 'non-outlined':!businessSelected }">
          <v-card-title>
              <h1 class="mb-5 text-h5">Business</h1>
          </v-card-title>
          <v-img :width="200" src="../assets/companyImageRegister.png"></v-img>
      </v-card>
    </section>
    <p :class="{'warningMessage':warningMessage,'non-warningMessage':!warningMessage}">You must select an account type</p>
    <v-btn class="mt-4"  block type="submit">Register</v-btn>
  </v-form>
</template>

<script>
import { ref } from 'vue';

export default {
  emits:['submit'],
  setup(props, ctx) {
    const clientSelected = ref(false);
    const businessSelected = ref(false);
    const warningMessage = ref(false);
    const firstOption = "Client";
    const secondOption = "Business";

    const onSubmit = () => {
      if (clientSelected.value || businessSelected.value) {
        ctx.emit('submit',clientSelected);
      } else {
        warningMessage.value = true;
      }
    };

    const selectItem = (item) => {
      if (item === "Client") {
        clientSelected.value = !clientSelected.value;
        businessSelected.value = false;
      } else if (item === "Business") {
        businessSelected.value = !businessSelected.value;
        clientSelected.value = false;
      }
      warningMessage.value = false;
    };

    // Devolver las propiedades y funciones que quieres exponer en el template
    return { clientSelected, businessSelected, warningMessage, onSubmit, selectItem, firstOption, secondOption };
  }
}
</script>

<style>
v-form{
  display: flex;
  flex-direction: column;
}
.sectionTypeUser{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}
.outlined {
  border: 3px solid rgba(0, 0, 0, 1);
}
.non-outlined {
  border: 1px solid rgba(0, 0, 0, 0);
}
.non-warningMessage{
  display: none;
}

.warningMessage{
  display: block;
  color: red;
}
</style>