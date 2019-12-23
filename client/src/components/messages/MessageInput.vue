<template>
  <div class="message-container">
    <form v-on:submit.prevent="sendMessage" autocomplete="off" class="form-inline">
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
  props: ["user"],

  data() {
    return { 
      messageContent: ""
    };
  },

  methods: {
    sendMessage() {
      if (this.messageContent.trim() == '') {
        return
      }
      const inputField = document.getElementById("message-field");
      inputField.value = "";
      inputField.focus();

      const today = new Date();
      const h = (today.getHours() < 10 ? '0' : '') + today.getHours();
      const m = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
      const time = h + ':' + m;

      const newMessage = {
        id: uuid.v4(),
        type: 1,
        username: this.user.username,
        content: this.messageContent,
        timestamp: time,
        color: this.user.color
      };
      this.$emit("send-message", newMessage);

      this.messageContent = "";
    }
  },
  
};
</script>

<style scoped>
#message-field {
  box-sizing: border-box;
  width: 90%;
  height: 44px;
  border-radius: 10px;
  border: solid gray 1px;
  border-radius: 10px 0px 0px 10px;
  padding: 6px;
}

#send-button {
  width: 10%;
  height: 44px;
  background-color: Lavender;
  border-radius: 0px 10px 10px 0px;
  border: solid gray 1px;
}

.message-container {
  box-sizing: border-box;
  align-content: center;
  width: 100%;
  margin: 3px 0px;
}

:focus { 
  outline: none; 
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
</style>