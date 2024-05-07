<template>
    <v-btn variant="text">
        <v-badge color="red" dot>
            <v-icon color="#218283" icon="mdi-chat" size="xx-large"></v-icon>
        </v-badge>

        <v-menu activator="parent">
            <v-list>
                <v-list-item-title v-if="chats.length == 0">
                    No opened chats
                </v-list-item-title>
                <v-badge inline dot color="red">
                    <v-list-item v-for="chatUser in chats" @click="showChatWith(chatUser)">
                        Chat with {{ chatUser.name }}
                    </v-list-item>
                </v-badge>

            </v-list>
        </v-menu>
    </v-btn>
    <v-dialog v-model="showChat">
        <ChatView style="justify-self: center;" @closeChat="showChat = false" :other-user="chatOtherUser"></ChatView>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {DOMAIN_BACKEND} from '@/config'
import axios from 'axios';
import { useAuthStore } from '../stores/auth';
import ChatView from '@/views/ChatView.vue';


export default defineComponent({
    name:"ChatAlert",
    components : {
        ChatView
    },
    setup() {
        const showChat = ref(false);
        const chatOtherUser = ref();
        const chats = ref();
        const user = useAuthStore().user!.user;
        axios
            .get(`${DOMAIN_BACKEND}/chat/findOpenChats`,{
                params : {
                    is_business : true,
                    userEmail : user.email
                }
            })
            .then(response => {
                chats.value = response.data.chats;
            });
        const showChatWith = (chatUser : any) => {
            chatOtherUser.value = chatUser;
            showChat.value = true;
        }

        return {
            chats,
            showChatWith,
            showChat,
            chatOtherUser
        }
    }
});
</script>