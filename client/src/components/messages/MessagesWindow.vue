<template>
  <div class="messages-window">
    <div v-bind:key="message.id" v-for="message in messages">
      <MessageBox v-bind:message="message" />
    </div>
  </div>
</template>

<script>
import MessageBox from "./MessageBox.vue";

export default {
  name: "MessagesWindow",
  components: {
    MessageBox
  },
  props: ["messages"]
};
</script>

<style>
.messages-window {
  float: left;
  width: 70%;
}
</style>