<template>
    <h1 class="title" style="margin-top: 10px;">Reservations</h1>
    <v-select
        v-model="type"
        :items="types"
        class="ma-2"
        label="View Mode"
        variant="outlined"
        dense
        hide-details
      ></v-select>
    <v-calendar :view-mode="type" color="primary" v-model="selectedDates" :events="reservations"></v-calendar>
</template>


<script>
import Calendar from '@/components/Calendar.vue';
import { useAuthStore } from '@/stores/auth';
import { Reservation } from '@/helper';
import { ref } from 'vue';

export default {

    setup() {
        const reservations = ref([]);

        const selectedDates = ref([]);

        const authStore = useAuthStore();
        const type = ref("month");
        const types = ['month', 'week', 'day'];


        const loadReservations = () => {
            useAuthStore().getReservations(useAuthStore().user.id)
                .then(res => {
                    console.log(useAuthStore().user)
                    reservations.value = res.map(event => ({
                        title:event.service.name,
                        name:event.service.name,
                        color:"primary",
                        details: event.service.description,
                        start: new Date(event.date),
                        end: new Date(new Date(event.date).getTime() + event.service.duration * 60000)
                    }))
                    console.log(reservations.value)
                });
        };


        loadReservations();

        return {
            reservations,
            selectedDates,
            loadReservations,
            type,
            types
        };
    },
}

</script>

<style>
  .title {
    font-family: 'Alfa Slab One', sans-serif;
    color:#45b4a8;
    text-shadow: 1px 1px 1px #2c3e50;
  }
</style>