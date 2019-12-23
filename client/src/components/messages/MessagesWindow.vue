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

<style scoped>
.messages-window {
  background-color: transparent;
  box-sizing: border-box;
  width: 100%;
  overflow-y: scroll;
  border-width: 1px black;
  padding: 6px;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}


/* Track */
::-webkit-scrollbar-track {
  background: #999;
  border-radius: 6px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #004a0a; 
  border-radius: 6px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #346b3c; 
}
</style>