<template>
  <div class="container">
    <div class="messages-container">
      <MessagesWindow class="messages-window" v-bind:messages="messages"/>
      <MessageInput class="message-input" v-on:send-message="sendMessage" v-bind:user="user"/>
    </div>
      <UsersList class="users-list" v-bind:users="users"/>
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
      messages: [{username: "Lignja", content: "alo ekipa", timestamp: "10:32", type: 1, color: "#fffff1"}, {username: "Vucica", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", timestamp: "10:33", type: 1, color: "#fff1f1"}, {username: "Mirko", content: "Ullamcorper morbi tincidunt ornare massa. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Integer enim neque volutpat ac tincidunt vitae. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Sed viverra ipsum nunc aliquet bibendum. Id venenatis a condimentum vitae sapien. Velit dignissim sodales ut eu sem integer vitae justo eget. Tortor posuere ac ut consequat semper viverra nam libero.", timestamp: "10:34", type: 0, color: "#f1f1ff"}, {username: "gacina matino matan", content: "mi smo braca svi", timestamp: "10:35", type: 1, color: "#f1fff1"}],
      users: [{username:"Kate"}, {username:"Mirko"}, {username:"Gacelele"}, {username:"Matino"}, {username:"Zubi"}, {username:"Lignja"},{username:"Kate"}, {username:"Mirko"}, {username:"Gacelele"}, {username:"Matino"}, {username:"Zubi"}, {username:"Lignja"},{username:"Kate"}, {username:"Mirko"}, {username:"Gacelele"}, {username:"Matino"}, {username:"Zubi"}, {username:"Lignja"}]
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
