<template>
  <div class="booking-view">
    <h2>Booking</h2>
    
    <input class="booking-calendar" type="date" v-model="selectedDate">

    <select v-model="selectedTime">
      <option v-for="time in times" :key="time" :value="time">{{ time }} placeholder</option>
    </select>

    <select v-model="selectedPerson">
      <option v-for="person in people" :key="person.id" :value="person.name">{{ person.name }}</option>
    </select>

    <button @click="bookAppointment">Book</button>
  </div>
</template>

<script>
export default {
  name: 'BookingView',
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
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
