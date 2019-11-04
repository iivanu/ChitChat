<template>
  <div class="message-input">
    <form v-on:submit.prevent="sendMessage" autocomplete="off">
      <input
        id="message-field"
        type="text"
        class="form-control"
        v-model="messageContent"
        placeholder="Enter message here"
      />
      <input type="submit" value="Send" id="send-button" />
    </form>
  </div>
</template>

<script>
import uuid from "uuid";
export default {
  name: "MessageInput",
  props: ["username"],

  data() {
    return {
      messageContent: ""
    };
  },

  methods: {
    sendMessage() {
      const inputField = document.getElementById("message-field");
      inputField.value = "";
      inputField.focus();

      const newMessage = {
        id: uuid.v4(),
        content: this.messageContent,
        username: this.username,
        type: 0
      };
      this.$emit("send-message", newMessage);

      this.messageContent = "";
    }
  }
};
</script>

<style>
#message-field {
  width: 89%;
}

#send-button {
  width: 10%;
}

.message-input {
  float: left;
  width: 70%;
}
</style>