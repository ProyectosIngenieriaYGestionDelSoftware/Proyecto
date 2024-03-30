<template>
  <v-form @submit.prevent="onSubmit">

    <section class="sectionTypeUser">

      <v-card link @click="selectItem(firstOption)" :class="{ 'outlined': clientSelected }">
        <v-card-title>
            <h1 class="mb-5 text-h5">Client</h1>
        </v-card-title>
        <v-img  :width="150" src="../assets/clientImageRegister.png"></v-img>
        
      </v-card>

      <v-card link @click="selectItem(secondOption)" :class="{ 'outlined': businessSelected }">
          <v-card-title>
              <h1 class="mb-5 text-h5">Bussiness</h1>
          </v-card-title>
          <v-img :width="150" src="../assets/companyImageRegister.png"></v-img>
      </v-card>

    </section>

    <v-btn class="mt-2"  block type="submit">Register</v-btn>
  </v-form>

</template>

<script>
export default {
  props: {
    title: String,
    likes: Number
  },
  methods:{
    onSubmit(){
      if(this.businessSelected||this.clientSelected) console.log("asdf");
    },
    selectItem(item){
      if(item==this.firstOption) {
        if(this.businessSelected) this.businessSelected = false;
        this.clientSelected = !this.clientSelected
      }else{
        if(this.clientSelected) this.clientSelected = false;
        this.businessSelected =  !this.businessSelected;
      }
    }
  },
  data(){
    return {
      clientSelected:false,
      businessSelected:false,
      firstOption:"Client",
      secondOption:"Business"
    }
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
  border: 1px solid rgba(0, 0, 0, 1);
}
</style>