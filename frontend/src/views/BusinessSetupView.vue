<template>

    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </v-overlay>

    <v-dialog persistent v-model="dialogConfirmDelete" max-width="400" width="auto">
        <v-card 
            prepend-icon="mdi-update"
            :text="textConfirmDelete"
            title="Delete confirmation"
        >
            <template v-slot:actions class="align-end">
                <v-btn
                    text="Cancel"
                    @click="dialogConfirmDelete = false"
                ></v-btn>
                <v-btn
                    color="red"
                    text="Confirm"
                    @click="serviceToDelete.length > 1 ? removeAllServices() : removeService(serviceToDelete.value)"
                ></v-btn>

            </template>
        </v-card>
    </v-dialog>

   <AddService :dialogIsActive="dialogAddService" @close-dialog="closeDialog" @service-added="serviceAdded"/>

    <section class="">

        <v-table>
            <thead>
                <tr>
                    <th class="text-center" v-for="column in columns" :key="column.key">
                        {{ column.label }}
                    </th>
                    <th class="text-center">
                        Remove service
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center" v-if="!loading" v-for="service in services">
                    <td>{{service.name}}</td>
                    <td>{{service.description}}</td>
                    <td>{{service.duration}}</td>
                    <td>{{service.price}}</td>
                    <td>
                        <v-btn icon="mdi-close" color="red" size="x-small" @click="warnRemove(service,false)"></v-btn>
                    </td>
                </tr>
                <tr v-if="services.length===0">
                    <p class="mt-4">You haven't added any services.</p>
                </tr>
            </tbody>
        </v-table>


    </section>


    <div class="buttons">
            <v-btn @click="openAddServiceDialog" color="green" class="mr-4" >Add service</v-btn>
            <v-btn @click="warnRemove(null,true)" color="red">Remove all services</v-btn>
    </div>

</template>


<script>
import { useAuthStore } from '@/stores/auth';
import { ref, shallowRef } from 'vue';
import router from '../router';
import AddService from '@/components/AddService.vue';


    export default {
        components: {AddService},

        setup(){
            const dialogConfirmDelete = ref(false);
            const textConfirmDelete = ref("");
            const serviceToDelete = ref();

            


            const user = useAuthStore().user;
            let services = [];
            let loading = true;

            const dialogAddService = ref(false);

            if (user===null || !user.user.is_business){
                router.push("/");
            }else{
                services = user.user.services;
                loading = false;
            }

            function openAddServiceDialog() {
                dialogAddService.value = true;
            }

            function closeDialog() {
                dialogAddService.value = false;
            }

            async function serviceAdded(name,description,duration,price){
                let service = {
                    name:name,
                    description:description,
                    duration:duration,
                    price:price
                }
                services = user.user.services;
                services.push(service);
                const req = await useAuthStore().updateServices(services).then(res => {
                    closeDialog();
                });
            }


            function warnRemove(service,allServices){

                if(allServices){
                    serviceToDelete.value = services;
                    textConfirmDelete.value = "Are you sure to delete all services?"
                }else{
                    serviceToDelete.value = service;
                    textConfirmDelete.value = "Are you sure to delete service '"+service.name+"'?"
                }

                dialogConfirmDelete.value = true;
            }


            async function removeService(service){
                services = user.user.services;
                services.pop(service);
                const req = await useAuthStore().updateServices(services).then(res => {
                    console.log(res);
                    dialogConfirmDelete.value = false;
                });
            }

            async function removeAllServices(){
                services = [];
                const req = await useAuthStore().updateServices(services).then(res => {
                    console.log(services);
                    dialogConfirmDelete.value = false;
                });
            }


            return {
                services,
                serviceToDelete,
                textConfirmDelete,
                loading,
                columns: [
                    { key: 'name', label: 'Service Name' },
                    { key: 'description', label: 'Description' },
                    { key: 'duration', label: 'Duration (minutes)' },
                    { key: 'price', label: 'Price (euros)' }
                ],
                dialogAddService,
                dialogConfirmDelete,
                openAddServiceDialog,
                closeDialog,
                serviceAdded,
                removeService,
                removeAllServices,
                warnRemove
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

main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:32px;
}

</style>