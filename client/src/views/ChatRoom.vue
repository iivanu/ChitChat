<template>
  <div>
    <MessagesWindow class="messages-window" v-bind:messages="messages"  v-chat-scroll />
    <MessageInput class="message-input" v-on:send-message="sendMessage" v-bind:username="username"/>
    <UsersList class="users-list" v-bind:users="users" />
  </div>
</template>

<script>
import MessagesWindow from "../components/messages/MessagesWindow.vue";
import MessageInput from "../components/messages/MessageInput.vue";
import UsersList from "../components/users/UsersList.vue";

export default {
  name: "ChatRoom",
  components: {
    MessagesWindow,
    MessageInput,
    UsersList
  },
  data() {
    return {
      username: "username",
      messages: [],
      users: []
    };
  },

  methods: {
    sendMessage(newMessage) {
      this.messages.push(newMessage);
      // TODO: send to socket
    }
  },

  created() {}
};
</script>

<style scoped>
</style>
