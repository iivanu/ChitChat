<template>
  <div class="messages-window" id="messw">
    <div v-for="message in messages" v-bind:key="message.id">
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
}

</script>

<style>

.messages-window {

  width: 905px;
  height:750px;
  max-height:750px;
  overflow-y:scroll;
  background:white;
  border-width:1px black;
  margin:0px auto;
  padding:6px;
}
</style>