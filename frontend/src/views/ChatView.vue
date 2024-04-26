<template>
    <v-card title="Chat with Mercadona" max-width="70vw" >
        <div class="chat">
            <div class="messages">

                <v-virtual-scroll :items="messages" height="50vh" item-height="10vh" style="scrollbar-width: none; left: 20px;">
                    <template v-slot:default="message">
                        <v-row style="width: 95%; margin-top: 10px; margin-bottom: 10px;" no-gutters :align="'baseline'"
                            :justify="message.item.sender === user ? 'end' : 'start'">

                            <v-card max-width="50%" color="#218283"
                                :subtitle="`${message.item.timestamp.getHours()}:${message.item.timestamp.getMinutes()}`"
                                :text="message.item.message">
                                <template v-slot:append>
                                    <v-icon v-if="message.item.sender === user && message.item.readed" color="success"
                                        icon="mdi-eye-check"></v-icon>
                                </template>

                            </v-card>
                        </v-row>
                    </template>
                </v-virtual-scroll>


            </div>
            <v-responsive class="mx-auto text-box" min-width="70vw">
                <v-text-field variant="solo-inverted" rounded append-inner-icon='mdi-send'
                    @click:append-inner=""></v-text-field>
            </v-responsive>
        </div>
    </v-card>



</template>

<script lang="ts">
import {ref} from 'vue'

export default {
    name : "Chat",
    setup () {
        type Message = {
            sender : string,
            message : string,
            readed : boolean,
            timestamp : Date
        }
        const messages = ref<Array<Message>>([
            {sender : "Kenai", message : "Hola buenos dias",readed : true, timestamp : new Date()},
            {sender : "Other", message : "Hola, que quieres ahora", readed : true, timestamp : new Date()},
            {sender : "Other", message : "Estoy trabajando", readed : true, timestamp : new Date()},
            {sender : "Kenai", message : "Pues na...", readed : false, timestamp : new Date()},
            {sender : "Kenai", message : "Pues na...", readed : false, timestamp : new Date()},
            {sender : "Kenai", message : "Pues na...", readed : false, timestamp : new Date()}

        ]);
        const user = ref("Kenai")
        return {
            messages,
            user
        }
    }
}

</script>

<style scoped>
.chat{
    display: grid;
    height: 100%;
    align-items: end;
    grid-template-rows: 80% auto;
    align-self: center;
    overflow: hidden;
    border-radius: 5%;
    background-image: 
        linear-gradient(
        rgba(255, 255, 255, 0.8), 
        rgba(0, 0, 0, 0.8) 
        ),
        url('../../public/logo.png');
    background-size: contain;
    background-position: center;
};


.messages{
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    
}

.user-message{
    margin-left: auto;
}

.other-message{
    margin-right: auto;
    
}
.text-box{
    bottom: 0;
    
}
</style>