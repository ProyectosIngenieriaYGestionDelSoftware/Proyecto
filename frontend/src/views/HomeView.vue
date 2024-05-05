<template>
  <div class="home-container">
    <div class="brand-container">
      <img v-bind:src="require('../assets/cab_logo.png')" alt="Business Logo" id="brand-logo">
      <h1 id="brand-name">Click & Book</h1>
      <h2 id="brand-slogan">Explore and reserve appointments with any business,<br>in just a few clicks!</h2>
    </div>
    <hr></hr>
    <div class="benefits-container">
      <h2 id="benefits-title">Why use Click & Book?</h2>
      <div class="benefits-boxes">
        <div class="benefits-box">
          <h3 id="benefits-clients">For CLIENTS</h3>
          <ul class="benefits-list">
            <li><strong>👤 Variety of Options:</strong><br> Access to a wide range of businesses and services to book, from hair salons and spas to fitness classes and local services.</li>
            <li><strong>🕒 Convenience:</strong><br> The ability to schedule appointments online from anywhere and at any time, eliminating the need for phone calls or physical visits to establishments.</li>
            <li><strong>🖱️ Ease of Use:</strong><br> An intuitive and user-friendly interface that allows for quick and simple navigation, search, and booking of services.</li>
            <li><strong>🗓️ Flexible Scheduling:</strong><br> The option to view available time slots and choose the appointment that best fits their needs and schedules.</li>
            <li><strong>🔔 Reminders and Notifications:</strong><br> Receipt of automatic reminders and notifications about upcoming appointments, helping to avoid forgetfulness and delays.</li>
            <li><strong>⭐ Reviews and Ratings:</strong><br> Access to reviews and ratings from other users to make informed decisions about available services and professionals.</li>
          </ul>
        </div>
        <div class="benefits-box">
          <h3 id="benefits-business">For BUSINESSES</h3>
          <ul class="benefits-list">
            <li><strong>📈 Increased Visibility:</strong><br> A platform that allows them to reach a wider audience of potential customers, including those who prefer to book online.</li>
            <li><strong>📅 Simplified Appointment Management:</strong><br> A centralized booking system that makes scheduling and managing appointments easier, reducing administrative burden and the risk of errors.</li>
            <li><strong>💼 Growth Opportunities:</strong><br> The opportunity to attract new customers and expand their existing customer base by being present on a popular and easily accessible booking platform.</li>
            <li><strong>🌟 Improved Customer Experience:</strong><br> The ability to provide a seamless and convenient booking experience, contributing to customer satisfaction and fostering long-term loyalty.</li>
            <li><strong>📣 Additional Marketing:</strong><br> An opportunity to promote their services and special offers through the platform, helping to increase visibility and attract new customers.</li>
            <li><strong>💬 Feedback Management:</strong><br> The ability to respond to customer reviews and feedback to manage online reputation and continuously improve service quality.</li>
          </ul>
        </div>
      </div>
    </div>
    <hr></hr>  
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
  background-color: #f0f0f0;
  /*background-color: RGB(9, 20, 27);*/
  
}

.brand-container {
  padding: 4em 0 2em 0;
  background-size: cover;
  /*background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2880' height='1120' preserveAspectRatio='none' viewBox='0 0 2880 1120'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1080%26quot%3b)' fill='none'%3e%3crect width='2880' height='1120' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1081%26quot%3b)'%3e%3c/rect%3e%3cpath d='M2880 0L2610.32 0L2880 176.92z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M2610.32 0L2880 176.92L2880 302.11L1603.94 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1603.94 0L2880 302.11L2880 610.39L1359.8200000000002 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M1359.8200000000002 0L2880 610.39L2880 783.65L462.69000000000017 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 1120L192.97 1120L0 750.6700000000001z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 750.6700000000001L192.97 1120L194.97 1120L0 417.7800000000001z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 417.78L194.97 1120L551.45 1120L0 240.06999999999996z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 240.06999999999994L551.45 1120L2162.4 1120L0 222.79999999999993z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1080'%3e%3crect width='2880' height='1120' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1081'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(20%2c 83%2c 84%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  */
  /*background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1176%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M -682.2372084913303%2c137 C -538.24%2c206.8 -250.24%2c494.6 37.76279150866971%2c486 C 325.76%2c477.4 469.76%2c105.8 757.7627915086697%2c94 C 1045.76%2c82.2 1341.32%2c414 1477.7627915086698%2c427 C 1614.21%2c440 1447.55%2c212.6 1440%2c159' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1362.2393695114547%2c134 C -1218.24%2c165.4 -930.24%2c310.8 -642.2393695114546%2c291 C -354.24%2c271.2 -210.24%2c-15 77.76063048854542%2c35 C 365.76%2c85 525.31%2c540.4 797.7606304885454%2c541 C 1070.21%2c541.6 1311.55%2c138.6 1440%2c38' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -344.10781081015057%2c508 C -200.11%2c418.4 87.89%2c86.4 375.89218918984943%2c60 C 663.89%2c33.6 807.89%2c356 1095.8921891898494%2c376 C 1383.89%2c396 1747.07%2c157.2 1815.8921891898494%2c160 C 1884.71%2c162.8 1515.18%2c344 1440%2c390' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -988.2752010061929%2c312 C -844.28%2c295 -556.28%2c225 -268.27520100619296%2c227 C 19.72%2c229 163.72%2c353.4 451.72479899380704%2c322 C 739.72%2c290.6 974.07%2c61.8 1171.724798993807%2c70 C 1369.38%2c78.2 1386.34%2c304.4 1440%2c363' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -768.7261865729772%2c350 C -624.73%2c299.6 -336.73%2c92.6 -48.72618657297718%2c98 C 239.27%2c103.4 383.27%2c362 671.2738134270228%2c377 C 959.27%2c392 1237.53%2c190.6 1391.2738134270228%2c173 C 1545.02%2c155.4 1430.25%2c265.8 1440%2c289' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1127.2958696191188%2c381 C -983.3%2c358.2 -695.3%2c285.2 -407.2958696191187%2c267 C -119.3%2c248.8 24.7%2c332.6 312.7041303808813%2c290 C 600.7%2c247.4 807.24%2c13.8 1032.7041303808812%2c54 C 1258.16%2c94.2 1358.54%2c403.6 1440%2c491' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -780.5007302305636%2c359 C -636.5%2c295.8 -348.5%2c37.6 -60.50073023056356%2c43 C 227.5%2c48.4 371.5%2c353.2 659.4992697694364%2c386 C 947.5%2c418.8 1223.4%2c174 1379.4992697694365%2c207 C 1535.6%2c240 1427.9%2c482.2 1440%2c551' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -689.1936020537681%2c455 C -545.19%2c391.8 -257.19%2c142.4 30.806397946231865%2c139 C 318.81%2c135.6 462.81%2c419 750.8063979462319%2c438 C 1038.81%2c457 1332.97%2c263 1470.8063979462318%2c234 C 1608.65%2c205 1446.16%2c281.2 1440%2c293' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -922.9476303577997%2c329 C -778.95%2c267.8 -490.95%2c-15.2 -202.94763035779968%2c23 C 85.05%2c61.2 229.05%2c521.2 517.0523696422003%2c520 C 805.05%2c518.8 1052.46%2c42.8 1237.0523696422003%2c17 C 1421.64%2c-8.8 1399.41%2c316.2 1440%2c391' stroke='rgba(51%2c 121%2c 194%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1176'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  */
  /*background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1180%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(240%2c 240%2c 240%2c 1)'%3e%3c/rect%3e%3cpath d='M -702.116566549402%2c47 C -558.12%2c125.6 -270.12%2c399.8 17.883433450598023%2c440 C 305.88%2c480.2 449.88%2c251 737.883433450598%2c248 C 1025.88%2c245 1317.46%2c426.4 1457.883433450598%2c425 C 1598.31%2c423.6 1443.58%2c277.8 1440%2c241' stroke='rgba(44%2c 62%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -488.2982653122997%2c39 C -344.3%2c139 -56.3%2c541 231.70173468770028%2c539 C 519.7%2c537 663.7%2c72.8 951.7017346877003%2c29 C 1239.7%2c-14.8 1574.04%2c307.8 1671.7017346877003%2c320 C 1769.36%2c332.2 1486.34%2c136 1440%2c90' stroke='rgba(44%2c 62%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1187.3639997277376%2c93 C -1043.36%2c181.8 -755.36%2c547.2 -467.36399972773756%2c537 C -179.36%2c526.8 -35.36%2c48.8 252.63600027226244%2c42 C 540.64%2c35.2 735.16%2c483.2 972.6360002722624%2c503 C 1210.11%2c522.8 1346.53%2c213.4 1440%2c141' stroke='rgba(44%2c 62%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -272.0192597518549%2c424 C -128.02%2c363 159.98%2c114.6 447.9807402481451%2c119 C 735.98%2c123.4 879.98%2c415.6 1167.9807402481451%2c446 C 1455.98%2c476.4 1833.58%2c279 1887.9807402481451%2c271 C 1942.38%2c263 1529.6%2c379 1440%2c406' stroke='rgba(44%2c 62%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -558.7101415917186%2c550 C -414.71%2c495.4 -126.71%2c278.2 161.2898584082814%2c277 C 449.29%2c275.8 593.29%2c568.2 881.2898584082814%2c544 C 1169.29%2c519.8 1489.55%2c161 1601.2898584082814%2c156 C 1713.03%2c151 1472.26%2c446.4 1440%2c519' stroke='rgba(44%2c 62%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -1227.8353657417956%2c259 C -1083.84%2c316.6 -795.84%2c572.2 -507.8353657417955%2c547 C -219.84%2c521.8 -75.84%2c179.8 212.1646342582045%2c133 C 500.16%2c86.2 686.6%2c338 932.1646342582045%2c313 C 1177.73%2c288 1338.43%2c69 1440%2c8' stroke='rgba(44%2c 62%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -395.91331144386976%2c536 C -251.91%2c480.2 36.09%2c285.2 324.08668855613024%2c257 C 612.09%2c228.8 756.09%2c406 1044.0866885561302%2c395 C 1332.09%2c384 1684.9%2c185.2 1764.0866885561302%2c202 C 1843.27%2c218.8 1504.82%2c423.6 1440%2c479' stroke='rgba(44%2c 62%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -721.7573628659152%2c243 C -577.76%2c300 -289.76%2c544.2 -1.7573628659151552%2c528 C 286.24%2c511.8 430.24%2c211 718.2426371340848%2c162 C 1006.24%2c113 1293.89%2c294 1438.2426371340848%2c283 C 1582.59%2c272 1439.65%2c142.2 1440%2c107' stroke='rgba(44%2c 62%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -134.3050634479016%2c304 C 9.69%2c253.6 297.69%2c9 585.6949365520984%2c52 C 873.69%2c95 1017.69%2c519.8 1305.6949365520984%2c519 C 1593.69%2c518.2 1998.83%2c94.4 2025.6949365520984%2c48 C 2052.56%2c1.6 1557.14%2c239.2 1440%2c287' stroke='rgba(44%2c 62%2c 80%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1180'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  */
  /*background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2800' height='1120' preserveAspectRatio='none' viewBox='0 0 2800 1120'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1030%26quot%3b)' fill='none'%3e%3crect width='2800' height='1120' x='0' y='0' fill='rgba(13%2c 31%2c 41%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c1156.615C222.706%2c1173.874%2c474.734%2c1143.268%2c634.228%2c986.878C790.286%2c833.857%2c737.478%2c575.469%2c804.756%2c367.52C862.077%2c190.349%2c1000.477%2c42.429%2c1000.034%2c-143.783C999.56%2c-343.072%2c914.269%2c-530.322%2c802.23%2c-695.136C679.893%2c-875.099%2c541.651%2c-1072.642%2c331.14%2c-1127.758C121.708%2c-1182.592%2c-83.778%2c-1052.637%2c-287.919%2c-980.561C-480.791%2c-912.463%2c-683.476%2c-862.09%2c-828.847%2c-718.2C-980.569%2c-568.025%2c-1088.248%2c-372.126%2c-1116.408%2c-160.515C-1144.42%2c49.982%2c-1081.416%2c260.674%2c-984.237%2c449.486C-890.15%2c632.289%2c-741.021%2c773.281%2c-574.051%2c893.241C-399.54%2c1018.619%2c-214.239%2c1140.012%2c0%2c1156.615' fill='%230a1921'%3e%3c/path%3e%3cpath d='M2800 2138.3959999999997C3005.743 2137.541 3212.869 2140.061 3398.4030000000002 2051.134 3599.191 1954.895 3781.087 1812.183 3888.042 1616.892 3999.1189999999997 1414.074 4057.0209999999997 1171.888 4003.094 947.021 3950.864 729.233 3735.974 604.513 3602.181 424.90599999999995 3454.747 226.98800000000006 3408.101-77.03500000000008 3176.579-162.51 2945.674-247.75800000000004 2693.226-102.80500000000006 2473.555 8.230000000000018 2281.852 105.12900000000002 2127.374 254.41600000000005 2003.943 430.212 1889.7559999999999 592.843 1827.5 779.476 1794.463 975.4259999999999 1760.738 1175.456 1740.518 1381.401 1811.539 1571.415 1885.4099999999999 1769.0529999999999 2015.371 1951.1390000000001 2198.392 2056.12 2377.592 2158.909 2593.415 2139.254 2800 2138.3959999999997' fill='%23102531'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1030'%3e%3crect width='2800' height='1120' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  */
  /*background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2800' height='1120' preserveAspectRatio='none' viewBox='0 0 2800 1120'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1152%26quot%3b)' fill='none'%3e%3crect width='2800' height='1120' x='0' y='0' fill='rgba(240%2c 240%2c 240%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c1156.615C222.706%2c1173.874%2c474.734%2c1143.268%2c634.228%2c986.878C790.286%2c833.857%2c737.478%2c575.469%2c804.756%2c367.52C862.077%2c190.349%2c1000.477%2c42.429%2c1000.034%2c-143.783C999.56%2c-343.072%2c914.269%2c-530.322%2c802.23%2c-695.136C679.893%2c-875.099%2c541.651%2c-1072.642%2c331.14%2c-1127.758C121.708%2c-1182.592%2c-83.778%2c-1052.637%2c-287.919%2c-980.561C-480.791%2c-912.463%2c-683.476%2c-862.09%2c-828.847%2c-718.2C-980.569%2c-568.025%2c-1088.248%2c-372.126%2c-1116.408%2c-160.515C-1144.42%2c49.982%2c-1081.416%2c260.674%2c-984.237%2c449.486C-890.15%2c632.289%2c-741.021%2c773.281%2c-574.051%2c893.241C-399.54%2c1018.619%2c-214.239%2c1140.012%2c0%2c1156.615' fill='%23e4e4e4'%3e%3c/path%3e%3cpath d='M2800 2138.3959999999997C3005.743 2137.541 3212.869 2140.061 3398.4030000000002 2051.134 3599.191 1954.895 3781.087 1812.183 3888.042 1616.892 3999.1189999999997 1414.074 4057.0209999999997 1171.888 4003.094 947.021 3950.864 729.233 3735.974 604.513 3602.181 424.90599999999995 3454.747 226.98800000000006 3408.101-77.03500000000008 3176.579-162.51 2945.674-247.75800000000004 2693.226-102.80500000000006 2473.555 8.230000000000018 2281.852 105.12900000000002 2127.374 254.41600000000005 2003.943 430.212 1889.7559999999999 592.843 1827.5 779.476 1794.463 975.4259999999999 1760.738 1175.456 1740.518 1381.401 1811.539 1571.415 1885.4099999999999 1769.0529999999999 2015.371 1951.1390000000001 2198.392 2056.12 2377.592 2158.909 2593.415 2139.254 2800 2138.3959999999997' fill='%23fcfcfc'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1152'%3e%3crect width='2800' height='1120' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  */
  /* Este queda mejor:
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2800' height='1120' preserveAspectRatio='none' viewBox='0 0 2800 1120'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1206%26quot%3b)' fill='none'%3e%3crect width='2800' height='1120' x='0' y='0' fill='rgba(13%2c 31%2c 41%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c794.221C147.605%2c764.649%2c287.302%2c724.908%2c418.957%2c651.91C558.611%2c574.476%2c704.392%2c496.284%2c785.46%2c358.707C870.7%2c214.049%2c913.157%2c37.904%2c877.435%2c-126.156C842.614%2c-286.078%2c686.033%2c-379.57%2c595.083%2c-515.642C487.258%2c-676.96%2c477.099%2c-936.813%2c293.545%2c-999.721C111.728%2c-1062.034%2c-64.601%2c-889.142%2c-234.933%2c-800.107C-374.473%2c-727.167%2c-503.768%2c-644.82%2c-609.177%2c-527.855C-716.304%2c-408.984%2c-799.021%2c-274.551%2c-846.329%2c-121.684C-900.163%2c52.271%2c-954.257%2c237.147%2c-899.684%2c410.872C-842.413%2c593.187%2c-718.593%2c769.685%2c-542.788%2c844.594C-372.168%2c917.294%2c-181.849%2c830.654%2c0%2c794.221' fill='%2309161d'%3e%3c/path%3e%3cpath d='M2800 2014.225C2983.778 2049.4030000000002 3180.362 2055.609 3348.457 1973.4160000000002 3525.48 1886.857 3651.971 1725.2269999999999 3745.616 1551.849 3843.871 1369.936 3962.241 1157.953 3894.395 962.65 3826.3050000000003 766.645 3557.178 737.892 3411.52 590.115 3279.599 456.275 3259.176 218.11699999999996 3086.787 143.29499999999996 2912.563 67.67599999999993 2705.293 129.986 2532.37 208.53599999999994 2372.564 281.12699999999995 2266.283 425.66700000000003 2159.127 564.681 2057.635 696.346 1958.2240000000002 831.219 1926.5839999999998 994.422 1893.992 1162.539 1894.863 1345.76 1978.761 1495.047 2060.303 1640.141 2231.016 1697.5140000000001 2371.698 1786.451 2511.202 1874.644 2637.9 1983.1970000000001 2800 2014.225' fill='%23112835'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1206'%3e%3crect width='2800' height='1120' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  */
}

#brand-logo {
  height: 10em;
}

#brand-name{
  font-family: 'Boldhead';
  color: #45b4a8;
}

#brand-slogan {
  font-family: "Alfa Slab One";
  color: #218283;
}

.benefits-container {
  padding: 2em 1em;
  background-size: cover;
  
}

.benefits-boxes {
  display: flex;
}

.benefits-box {
  flex: 1;
  padding: 20px;
  border: 2px solid #2c3e50;
  border-radius: 10px;
  margin: 10px;
  background-color: #218183;

  display: flex;
  flex-direction: column;
  text-align: left;
}

.benefits-box h3 {
  margin-top: 0;
  margin-bottom: 1em;
  color: white;
  font-family: 'Platypi';
  align-self: center;
  justify-self: center;
}

.benefits-list {
  text-decoration: none;
  text-decoration-color: white;
}

.benefits-box li {
  font-family: 'Platypi';
  color: rgb(0, 0, 0);
}

.benefits-box li strong {
  font-size: 1.5em;
  color: white;
}

.carousel-container {
  padding: 2em;
  border-color: #2c3e50;
  background-size: cover;
  /*background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2800' height='1120' preserveAspectRatio='none' viewBox='0 0 2800 1120'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1206%26quot%3b)' fill='none'%3e%3crect width='2800' height='1120' x='0' y='0' fill='rgba(13%2c 31%2c 41%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c794.221C147.605%2c764.649%2c287.302%2c724.908%2c418.957%2c651.91C558.611%2c574.476%2c704.392%2c496.284%2c785.46%2c358.707C870.7%2c214.049%2c913.157%2c37.904%2c877.435%2c-126.156C842.614%2c-286.078%2c686.033%2c-379.57%2c595.083%2c-515.642C487.258%2c-676.96%2c477.099%2c-936.813%2c293.545%2c-999.721C111.728%2c-1062.034%2c-64.601%2c-889.142%2c-234.933%2c-800.107C-374.473%2c-727.167%2c-503.768%2c-644.82%2c-609.177%2c-527.855C-716.304%2c-408.984%2c-799.021%2c-274.551%2c-846.329%2c-121.684C-900.163%2c52.271%2c-954.257%2c237.147%2c-899.684%2c410.872C-842.413%2c593.187%2c-718.593%2c769.685%2c-542.788%2c844.594C-372.168%2c917.294%2c-181.849%2c830.654%2c0%2c794.221' fill='%2309161d'%3e%3c/path%3e%3cpath d='M2800 2014.225C2983.778 2049.4030000000002 3180.362 2055.609 3348.457 1973.4160000000002 3525.48 1886.857 3651.971 1725.2269999999999 3745.616 1551.849 3843.871 1369.936 3962.241 1157.953 3894.395 962.65 3826.3050000000003 766.645 3557.178 737.892 3411.52 590.115 3279.599 456.275 3259.176 218.11699999999996 3086.787 143.29499999999996 2912.563 67.67599999999993 2705.293 129.986 2532.37 208.53599999999994 2372.564 281.12699999999995 2266.283 425.66700000000003 2159.127 564.681 2057.635 696.346 1958.2240000000002 831.219 1926.5839999999998 994.422 1893.992 1162.539 1894.863 1345.76 1978.761 1495.047 2060.303 1640.141 2231.016 1697.5140000000001 2371.698 1786.451 2511.202 1874.644 2637.9 1983.1970000000001 2800 2014.225' fill='%23112835'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1206'%3e%3crect width='2800' height='1120' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  */
}

#benefits-title {
  font-family: "Alfa Slab One";
  color:#2c3e50;
}

.va-carousel__slide {
  font-size: 48px;
}

hr {
  display: flex;
  align-self: center;
  height: 3px;
  background-image: linear-gradient(to right, transparent, #45b4a8, transparent);
  margin: 0;
}
</style>