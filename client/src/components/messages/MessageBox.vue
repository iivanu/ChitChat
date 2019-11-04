<template>
  <div class="message-box" v-bind:class="{'own-message':message.type === 0}">
    <em v-if="message.type === 1">{{message.username}}</em>
    <p>{{message.content}}</p>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: ["message"]
};
</script>

<style scoped>
.message-box {
  background: lightgray;
}

em {
  color: darkblue;
}

p {
  color: black;
}

.own-message {
  text-align: right;
}
</style>