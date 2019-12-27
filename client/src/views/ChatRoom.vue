<template>
  <div class="container">
    <div class="messages-container">
      <div class="message-window-container">
        <MessagesWindow class="messages-window" v-bind:messages="messages" v-chat-scroll="{always: false, smooth: true}"/>
      </div>
      <MessageInput class="message-input" v-on:send-message="sendMessage" v-bind:user="user"/>
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
      user: {
        username: "testUsername",
        color: "#fff1f1"
      },
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
.messages-container {
  box-sizing: border-box;
  float: left;
  height: 100%;
  width: 75%;
	display: flex;
	flex-direction: column;
}

.messages-window {
  height: 100%;
  width: 100%;
}

.message-window-container {
	display: flex;
	flex-direction: column;
  flex: 1;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: solid gray 1px;
  padding: 2px 4px;
  overflow-y: hidden;
}

.message-input {
	display: flex;
	flex-direction: column;
  height: 44px;
}

.container {
  height: calc(100vh - 155px);
}
</style>
