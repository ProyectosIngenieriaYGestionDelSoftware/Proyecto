<template>
  <v-form @submit.prevent="onSubmit" ref="form">
    <section class="sectionTypeUser">
      <v-card class="card" link @click="selectItem(firstOption)" :variant="clientSelected?'outlined':'elevated'">
        <v-card-title>
            <p class="mb-5 subtitle-2">Client</p>
        </v-card-title>
        <v-img :width="125" src="../assets/clientImageRegister.png"></v-img>
      </v-card>

      <v-card class="card" link @click="selectItem(secondOption)" :variant="businessSelected?'outlined':'elevated'">
          <v-card-title>
              <p class="mb-5 subtitle-2">Business</p>
          </v-card-title>
          <v-img :width="125" src="../assets/companyImageRegister.png"></v-img>
      </v-card>
    </section>
    <v-select v-if="businessSelected"
      :rules="rulesSelectBusiness" 
      v-model="selectedTypeBusiness"
      label="Business class"
      :items="Object.values(typeBusiness)"
    ></v-select>
    <p :class="{'warningMessage':warningMessage,'non-warningMessage':!warningMessage}">You must select an account type</p>
    <v-btn class="mt-4"  block type="submit">Register</v-btn>
  </v-form>
</template>

<script>
import { ref } from 'vue';
import { typeBusiness } from '../helper';



export default {
  emits:['submit'],
  data: () => ({
    rulesSelectBusiness:[
      value=> !!value || 'You must select a business type'
    ]
  }),
  setup(props, ctx) {
    const clientSelected = ref(false);
    const businessSelected = ref(false);
    const warningMessage = ref(false);
    const firstOption = "Client";
    const secondOption = "Business";
    const selectedTypeBusiness = ref('');

    const onSubmit = () => {

      

      if (clientSelected.value || businessSelected.value) {

        if(businessSelected.value && !selectedTypeBusiness.value){
          //warningMessage.value = true;
          return;
        }

        ctx.emit('submit',clientSelected,selectedTypeBusiness.value);
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
    return { clientSelected, businessSelected, warningMessage, onSubmit, selectItem, firstOption, secondOption, typeBusiness, selectedTypeBusiness };
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
  justify-content: space-between;
  margin-bottom: 15px;
}


@media screen and (max-width: 400px){
  .sectionTypeUser{
    flex-direction: row;
  }
  .card{
      margin: 10px;
  }

}

.non-warningMessage{
  display: none;
}

.warningMessage{
  display: block;
  color: red;
}


</style>