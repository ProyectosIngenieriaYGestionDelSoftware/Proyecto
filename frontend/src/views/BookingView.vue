<template>

  <Calendar/>

  <div class="booking-view">
    <form class="booking-form">
      <h1 class="booking-title">Booking</h1>
      
      <div class="booking-inputs">
        <input class="booking-calendar" type="date" v-model="selectedDate">

        <select class="custom-select" v-model="selectedTime">
          <option value="" disabled selected>Select time</option>
          <option v-for="time in times" :key="time" :value="time">{{ time }}</option>
        </select>

        <select class="custom-select" v-model="selectedPerson">
          <option value="" disabled selected>Select Staff</option>
          <option v-for="person in people" :key="person.id" :value="person.name">{{ person.name }}</option>
        </select>
      </div>  

      <button @click="bookAppointment">Book</button>
    </form>
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue';
export default {
  name: 'BookingView',
  components:{
    Calendar
  },
  data() {
    return {
      selectedDate: '', // Fecha seleccionada
      selectedTime: '', // Hora seleccionada
      selectedPerson: '', // Nombre de persona seleccionado
      people: [ // Nombres de personas (datos de ejemplo)
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        // Agrega más nombres según sea necesario
      ],
      times: [ // Horas disponibles (datos de ejemplo)
        '09:00',
        '10:00',
        '11:00',
        // Agrega más horas según sea necesario
      ]
    };
  },
  methods: {
    bookAppointment() {
      // Lógica para reservar cita con la fecha, hora y nombre seleccionados
      console.log(`Appointment booked for ${this.selectedDate} at ${this.selectedTime} with ${this.selectedPerson}`);
    }
  }
};
</script>

<style scoped>
.booking-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.booking-form {
  background-size: contain;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1em;
  align-self: center;
}

.booking-title {
  font-family: 'Alfa Slab One', sans-serif;
  color:#45b4a8;
  text-shadow: 1px 1px 1px #2c3e50;
}

.booking-inputs {
  display: flex;
  flex-direction: column;
  justify-content: start flex;
  
  font-family: 'Playtipi';
  font-size: large;
}

.booking-inputs * {
  margin-bottom: 2em;
}

.booking-calendar {
  color: #2c3e50;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}

.booking-calendar::selection {
  background-color: #45b4a8;
  color: #fff;
}

.custom-select {
  color: #2c3e50;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}

.custom-select option {
  color: #2c3e50;
  background-color: #f0f0f0;
}

button {
  padding: 10px 20px;
  background-color: #45b4a8;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;  
  width: auto;
}

button:hover {
  background-color: #145354;
}
</style>
