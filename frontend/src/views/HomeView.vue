<template>
  <div>
    <h1>Click & Book</h1>
    <h2>Explore and reserve appointments with any business,<br>with just a few clicks.</h2>
    <h3>Why use Click & Book?</h3>
    <div class="benefits-container">
      <div class="benefit">
        <h3>For Clients</h3>
        <ul>
          <li>Variety of Options: Access to a wide range of businesses and services to book, from hair salons and spas to fitness classes and local services.</li>
          <li> Convenience: The ability to schedule appointments online from anywhere and at any time, eliminating the need for phone calls or physical visits to establishments.</li>
          <li>Ease of Use: An intuitive and user-friendly interface that allows for quick and simple navigation, search, and booking of services.</li>
          <li>Flexible Scheduling: The option to view available time slots and choose the appointment that best fits their needs and schedules.</li>
          <li>Reminders and Notifications: Receipt of automatic reminders and notifications about upcoming appointments, helping to avoid forgetfulness and delays.</li>
          <li>Reviews and Ratings: Access to reviews and ratings from other users to make informed decisions about available services and professionals.</li>
        </ul>
      </div>
      <div class="benefit">
        <h3>For Business</h3>
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
    <div class="carousel">
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      value:0,
      items:["1","2","3"],
    };
  },
});
</script>

<style scoped>
.benefits-container {
  display: flex;
}

.benefit {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
}

.benefit h3 {
  margin-top: 0;
}

.va-carousel__slide {
  font-size: 48px;
}
</style>
