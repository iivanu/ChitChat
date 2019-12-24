<template>
  <div class="message-input">
    <form v-on:submit.prevent="sendMessage" autocomplete="off">
      <input
        id="message-field"
        type="text"
        class="form-control"
        v-model="messageContent"
        placeholder="Type your message here..."
      />
      <button class="btn" id="send-button" type="submit">Send</button>
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

      const today = new Date();
      const h = (today.getHours()<10?'0':'') + today.getHours();
      const m = (today.getMinutes()<10?'0':'') + today.getMinutes();
      const time = h + ':' + m;

      const newMessage = {
        id: uuid.v4(),
        type: 1,
        username: this.username,
        content: this.messageContent,
        timestamp: time,
       // color: "#000000"
      };
      this.$emit("send-message", newMessage);

      this.messageContent = "";
    }
  },
  
};
</script>

<style>
#message-field {
  width: 900px;
  height: 30px;
  border-radius: 10px;
  border-color: lightgrey;
  border-width: 1px;
  border-style: solid none solid solid;
  margin: 0px auto;
  padding: 6px;
}

#send-button {
  width: 101px;
  height: 43px;
  background-color: Lavender;
  border-radius: 0px 10px 10px 0px;
  border-width: 1px;
  border-style: solid solid solid none;
  border-style: hidden;
  margin: 0px 0px 0px -101px;
}

.message-input {
  align-content: center;
  float: left;
  width: 100%;
}
</style>