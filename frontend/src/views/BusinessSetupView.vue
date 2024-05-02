<template>



</template>


<script>
import { useAuthStore } from '@/stores/auth';


    export default {
        setup(){
            const user = useAuthStore().user;
            if (user.username){}
        }
    }
    

</script>

<style>



</style>