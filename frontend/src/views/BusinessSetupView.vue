<template>

    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </v-overlay>

   <AddService :dialogIsActive="dialogIsActive" @close-dialog="closeDialog" @service-added="serviceAdded" />

    <section class="ma-8">
        <v-table>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column.key">
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="!loading" v-for="service in services">
                    <td>{{service.name}}</td>
                    <td>{{service.description}}</td>
                    <td>{{service.duration}}</td>
                </tr>
                <tr v-if="services.length===0">
                    <p class="mt-4">You haven't added any services.</p>
                </tr>
            </tbody>
        </v-table>

        <div class="buttons">
            <v-btn @click="openAddServiceDialog" color="green" class="mr-4" >Add service</v-btn>
            <v-btn color="red">Remove all services</v-btn>
        </div>
    </section>




</template>


<script>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import router from '../router';
import AddService from '@/components/AddService.vue';


    export default {
        components: {AddService},

        setup(){

            const user = useAuthStore().user;
            let services = [];
            let loading = true;
            const dialogIsActive = ref(false);

            if (user===null || !user.user.is_business){
                router.push("/");
            }else{
                services = user.user.services;
                loading = false;
            }

            function openAddServiceDialog() {
                dialogIsActive.value = true;
            }

            function closeDialog() {
                dialogIsActive.value = false;
            }

            function serviceAdded(name,description,duration){
                console.log(name,description,duration)
            }


            return {
                services,
                loading,
                columns: [
                    { key: 'name', label: 'Service Name' },
                    { key: 'description', label: 'Description' },
                    { key: 'duration', label: 'Duration (minutes)' }
                ],
                dialogIsActive,
                openAddServiceDialog,
                closeDialog,
                serviceAdded
            };
        }
 
    }
    
</script>

<style>

.buttons {
    width:100%;
    display: flex;
    justify-content: flex-end;
}

</style>