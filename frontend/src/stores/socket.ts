import { defineStore } from "pinia";
import app from "@/main";


export type SocketStore = {
   
    isConnected: boolean;
    
    message: string;
   
    reconnectError: boolean;
   
    heartBeatInterval: number;
    
    heartBeatTimer: number;
  };

export const useSocketStore = () => {
  return defineStore({
    id: "socket",
    state: (): SocketStore => ({
      isConnected: false,
      
      message: "",
     
      reconnectError: false,
      
      heartBeatInterval: 50000,
      
      heartBeatTimer: 0
    }),
    actions: {
      SOCKET_ONOPEN(event: any) {
        console.log("successful websocket connection");
        app.config.globalProperties.$socket = event.currentTarget;
        this.isConnected = true;
        
        this.heartBeatTimer = window.setInterval(() => {
          const message = "";
          this.isConnected &&
            app.config.globalProperties.$socket.sendObj({
              code: 200,
              msg: message
            });
        }, this.heartBeatInterval);
      },
      
      SOCKET_ONCLOSE(event: any) {
        this.isConnected = false;
        
        window.clearInterval(this.heartBeatTimer);
        this.heartBeatTimer = 0;
        console.log("Closed on: " + new Date());
        console.log(event);
      },
      SOCKET_ONERROR(event: any) {
        console.error(event);
      },
      SOCKET_ONMESSAGE(message: any) {
        this.message = message;
      },
      SOCKET_RECONNECT(count: any) {
        console.info("Reconnect", count);
      },
      SOCKET_RECONNECT_ERROR() {
        this.reconnectError = true;
      },

      async connect(){
        const conection =await app.config.globalProperties.$connect();
        console.log(conection);
      },

      handshake(handshake : {userEmail : string, otherEmail : string}){
        app.config.globalProperties.$socket.sendObj(handshake);
      },
      disconnect(){
        app.config.globalProperties.$disconnect();
      }
    }
  })();
};