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
import io from "socket.io-client"

export default {
  name: "ChatRoom",
  components: {
    MessagesWindow,
    MessageInput,
    UsersList
  },

  data() {
    return {
      socket: {},
      // Hardcoded test values
      user: this.$store.state.user,
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
      this.socket.emit("sendMessage", newMessage, this.room.id);
    }
  },

  created() {
    console.log("CREATED") // eslint-disable-line no-console
    this.socket = io('http://172.21.19.126:3000/') //Change this to your local IP
  },

  mounted() {
    this.socket.on('connect', () => {
      console.log("JOINED") // eslint-disable-line no-console
      this.socket.emit("joined", this.room, this.user)
    })

    this.socket.on('disconnect', () => {
      console.log("disconnected from server") // eslint-disable-line no-console
    })

    this.socket.on('newMessage', (message) => {
      this.messages.push(message)
    })

    this.socket.on('updateUserList', (users) => {
      this.users = users
    })
  },

  destroyed() {
    this.socket.emit('forceDisconnect')
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
