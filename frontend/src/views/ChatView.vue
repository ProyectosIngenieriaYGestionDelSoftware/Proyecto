<template>
    <v-card :title="`Chat with ${business.name}`" min-width="80vw" style="height: 80vh">
        <template v-slot:append>
            <v-icon size="x-large" icon="mdi-close-circle-outline" @click="closeChat()"></v-icon>
        </template>
        <div class="chat">
            <div class="messages">

                <v-virtual-scroll ref="virtualScroller"  :items="messages"  height="60vh">
                    <template v-slot:default="message">
                        <v-row style="width: 95%; margin-top: 10px; margin-bottom: 10px;" no-gutters :align="'baseline'"
                            :justify="message.item.sender === user.email ? 'end' : 'start'">

                            <v-card max-width="50%" color="#218283"
                                :subtitle="`${message.item.timestamp.getHours()}:${message.item.timestamp.getMinutes()}`"
                                :text="message.item.message">
                                <template v-slot:append>
                                    <v-icon v-if="message.item.sender === user.email && message.item.readed" color="success"
                                        icon="mdi-eye-check"></v-icon>
                                </template>

                            </v-card>
                        </v-row>
                    </template>
                </v-virtual-scroll>


            </div>
            <v-responsive class="mx-auto text-box">
                <v-text-field v-model="textMessage" variant="solo-inverted" rounded append-inner-icon='mdi-send'
                    @click:append-inner="sendMessage()" v-on:keyup.enter="sendMessage()"></v-text-field>
            </v-responsive>
        </div>
    </v-card>



</template>

<script lang="ts">
import { ref, defineComponent, watch, onBeforeUnmount, onMounted, onBeforeMount } from 'vue';
import { Message } from '@/helper';
import { useSocketStore } from '@/stores/socket';
import { SocketMessage } from '../helper';
import {useAuthStore} from '@/stores/auth';
import axios from 'axios';

export default defineComponent({
    name: "Chat",
    props : ['business'],
    emits: ['closeChat'],
    setup(props, ctx ) {
        const socket = useSocketStore();
        const auth = useAuthStore();
        const user = ref(auth.user!.user);
        const other = ref("user2");
        const virtualScroller = ref();
        const textMessage = ref("");
        let chatNumber = 0;

        console.log(props);

        onBeforeMount(() => {
            socket.connect();
            const unwatch = watch(() => socket.isConnected,(value) => {
                if(value){
                    socket.handshake({
                        userEmail : user.value.email,
                        otherEmail : props.business.email
                    });
                    unwatch();
                }
            });
        });
        

        

        const closeChat = () => {
            ctx.emit("closeChat");
            
        }

        onBeforeUnmount(() => {
            socket.disconnect();
        });

        const messages = ref<Array<Message>>([
        ]);

        watch(() => socket.message, async (newMessage : unknown) => {
            const message = (newMessage as SocketMessage);
            console.log(message);
            if(message.action === 'received'){
                addMessage(message);
            } else if(message.action = 'connected'){
                chatNumber = message.chatNumber!
            }
        });

        const sendMessage = () => {
            
            if(textMessage.value !== ""){
                const message = {
                receiver: props.business.email,
                sender: user.value.email,
                message: textMessage.value,
                is_business: user.value.is_business,
                chatNumber: chatNumber
            }

            console.log(message);

            axios   
                .post('http://localhost:3000/api/chat/sendMessage',message)
                .then((response) => {
                    addMessage(response.data);
                    textMessage.value = "";
                })
                .catch((err) => {
                    console.log(err);
                });

            }
        }

        const goToLastMessage = async () => {
            console.log(virtualScroller.value)
            await virtualScroller.value.$nextTick();
            await virtualScroller.value.$forceUpdate();
            setTimeout(() => virtualScroller.value.scrollToIndex(messages.value.length -1), 10);
            setTimeout(() => virtualScroller.value.scrollToIndex(messages.value.length -1), 20);
        }

        const addMessage = async (message: any) => {
            messages.value.push({
                sender: message.sender,
                readed: message.readed!,
                message: message.message!,
                timestamp: new Date(message.timestamp!)
            });
            
            await goToLastMessage();
            
        }
        
        return {
            messages,
            user,
            other,
            closeChat,
            virtualScroller,
            sendMessage,
            textMessage
        }
    }
})

</script>

<style scoped>
.chat {
    display: grid;
    height: 100%;
    width: 100%;
    align-items: end;
    grid-template-rows: 80% auto;
    align-self: center;
    overflow: hidden;
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.8),
            rgba(0, 0, 0, 0.8)),
        url('../../public/logo.png');
    background-size: contain;
    background-position: center;
}

;


.messages {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;

}

.user-message {
    margin-left: auto;
}

.other-message {
    margin-right: auto;

}

.text-box {
    bottom: 0;
    width: 80%;

}
</style>