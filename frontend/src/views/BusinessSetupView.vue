<template>

    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular indeterminate color="white"></v-progress-circular>
    </v-overlay>

    <v-table>
        <thead>
            <tr>
                <th>
                    Service Name
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="!loading" v-for="service in services">
                <td>{{service.name}}</td>
                <td>{{}}</td>
            </tr>
        </tbody>
    </v-table>


</template>


<script>
import { useAuthStore } from '@/stores/auth';
import router from '../router';

    export default {
        setup(){
            const user = useAuthStore().user.user;
            let services = [];
            let loading = true;
            //console.log(user);
            if (user===null || !user.is_business){
                router.push("/");
            }else{
                services = user.services;
                loading = false;
            }
            return {
                services,
                loading
            };
        }

        
    }
    
</script>

<style>



</style>