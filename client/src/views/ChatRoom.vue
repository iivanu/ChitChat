<template>
  <div class="container">
    <div class="messages-container">
      <MessagesWindow class="messages-window" v-bind:messages="messages" />
      <MessageInput class="message-input" v-on:send-message="sendMessage" v-bind:user="user" />
    </div>
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
      // Hardcoded test values
      user: {
        username: "testUsername",
        color: "#fff1f1"
      },
      room: {
        name: "world chat",
        id: "12345"
      },
      messages: [],
      users: []
    };
  },

  methods: {
    sendMessage(newMessage) {
      this.messages.push(newMessage);
      this.$socket.emit('sendMessage', newMessage, this.room.id)
    }
  },

  sockets: {
    connect() {
      this.$socket.emit('joined', this.room, this.user)
    },

    disconnect() {
      console.log('disconnected from server') // eslint-disable-line no-console
    },

    newMessage(message) {
      this.messages.push(message)
    },

    updateUserList(users) {
      this.users = users
    }
  }
};
</script>

<style scoped>
.messages-container {
  box-sizing: border-box;
  float: left;
  height: 100%;
  width: 75%;
  flex: 0.75;
  display: flex;
  flex-direction: column;
}

.messages-window {
  box-sizing: border-box;
  flex: 1;
  overflow-y: hidden;
  background-color: #f5f5f5;
  padding: 2px 4px;
  border-radius: 10px;
  border: solid gray 1px;
}

.message-input {
  display: flex;
  flex-direction: column;
  height: 44px;
}

.users-list {
  flex: 0.2;
  margin: 0 auto;

  border: 1px solid #2c3e50;
  padding: 2px 4px;
  overflow-y: hidden;
  padding: 2px 4px;
  border-radius: 10px;
}

.container {
  height: calc(100vh - 155px);
  display: flex;
  box-sizing: border-box;
}
</style>
