<template>
  <div class="messages-window">
    <MessageBox v-for="message in messages" v-bind:key="message.id" v-bind:message="message" />
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
  border-width: 0.2px;
  border-color: black;
  padding: 6px;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}


/* Track */
::-webkit-scrollbar-track {
  background: #D3D3D3;
  border-radius: 6px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #808080; 
  border-radius: 6px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #999999; 
}
</style>