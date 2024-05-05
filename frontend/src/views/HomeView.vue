<template>
  <div class="home-container">
    <div class="brand-container">
      <img v-bind:src="require('../assets/cab_logo.png')" alt="Business Logo" id="brand-logo">
      <h1 id="brand-name">Click & Book</h1>
      <h2 id="brand-slogan">Explore and reserve appointments with any business,<br>in just a few clicks!</h2>
    </div>
    <div class="benefits-container">
      <h2 id="benefits-title">Why use Click & Book?</h2>
      <div class="benefits-boxes">
        <div class="benefits-box">
          <h3 id="benefits-clients">For Clients</h3>
          <ul>
            <li>Variety of Options: Access to a wide range of businesses and services to book, from hair salons and spas to fitness classes and local services.</li>
            <li> Convenience: The ability to schedule appointments online from anywhere and at any time, eliminating the need for phone calls or physical visits to establishments.</li>
            <li>Ease of Use: An intuitive and user-friendly interface that allows for quick and simple navigation, search, and booking of services.</li>
            <li>Flexible Scheduling: The option to view available time slots and choose the appointment that best fits their needs and schedules.</li>
            <li>Reminders and Notifications: Receipt of automatic reminders and notifications about upcoming appointments, helping to avoid forgetfulness and delays.</li>
            <li>Reviews and Ratings: Access to reviews and ratings from other users to make informed decisions about available services and professionals.</li>
          </ul>
        </div>
        <div class="benefits-box">
          <h3 id="benefits-business">For Business</h3>
          <ul>
            <li>Increased Visibility: A platform that allows them to reach a wider audience of potential customers, including those who prefer to book online.</li>
            <li>Simplified Appointment Management: A centralized booking system that makes scheduling and managing appointments easier, reducing administrative burden and the risk of errors.</li>
            <li>Growth Opportunities: The opportunity to attract new customers and expand their existing customer base by being present on a popular and easily accessible booking platform.</li>
            <li>Improved Customer Experience: The ability to provide a seamless and convenient booking experience, contributing to customer satisfaction and fostering long-term loyalty</li>
            <li>Additional Marketing: An opportunity to promote their services and special offers through the platform, helping to increase visibility and attract new customers.</li>
            <li>Feedback Management: The ability to respond to customer reviews and feedback to manage online reputation and continuously improve service quality.</li>
          </ul>
        </div>
      </div>
    </div>  
    <div class="carousel-container">
      <AdCarousel/>
    </div>
  </div>

  <v-dialog v-model="showChat">
    <ChatView style="justify-self: center;" @closeChat="showChat=!showChat" :otherEmail="'user1@aaa.com'"></ChatView>
  </v-dialog>

  <button @click="showChat = !showChat"> Show Chat</button>
  
</template>

<script lang="ts">
import { ref } from 'vue';
import AdCarousel from '../components/AdCarousel.vue';
import ChatView from '@/views/ChatView.vue';

export default {
  name: 'HomeView',
  components: {
    AdCarousel,
    ChatView
  },
  setup(){
    const showChat = ref(false);

    return {
      showChat
    }
  }
  
};
</script>

<style scoped>
.home-container {
  padding-top: 4em;
  background-color: #f0f0f0;
}

.brand-container {
}

#brand-logo {
  height: 10em;
}

#brand-name{
  font-family: 'Boldhead';
  color: #45b4a8;
}

#brand-slogan {
  color: #218283;
}

.benefits-container {
  padding: 6em 1em;
}

.benefits-boxes {
  display: flex;
}

.benefits-box {
  flex: 1;
  padding: 20px;
  border: 1px solid #2c3e50;
  margin: 10px;
  text-align: left;

  background-color: #218283;
}

.benefits-box h3 {
  margin-top: 0;
  margin-bottom: 1em;
  color: white;
}

.benefits-box li {
  color: white;
}

.carousel-container {
  padding-bottom: 6em;
  border-color: #2c3e50;
}

#benefits-title {
  color:#2c3e50;
}

.va-carousel__slide {
  font-size: 48px;
}
</style>