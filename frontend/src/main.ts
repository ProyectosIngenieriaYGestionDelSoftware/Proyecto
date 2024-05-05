import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'
import VueNativeSocket from 'vue-native-websocket-vue3'
import { useSocketStore } from './stores/socket'

loadFonts()

const pinia = createPinia()



const app = createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify);
app.mount('#app')

app.use(VueNativeSocket,'ws://localhost:3000',{
  store : useSocketStore(),
  format: 'json',
  connectManually: true
});


export default app;