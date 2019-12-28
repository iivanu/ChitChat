<template>
  <div class="container">
    <div class="messages-window" v-chat-scroll="{always: false, smooth: true}">
      <MessageBox v-for="message in messages" v-bind:key="message.id" v-bind:message="message" />
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
.container {
  overflow-y: hidden;
}

.messages-window {
  background-color: #f5f5f5;  
  box-sizing: border-box;
  width: 100%;
  overflow-y: scroll;
  border-width: 0.2px;
  border-color: black;
  padding: 6px;
  overflow-y: scroll;
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