<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

import Header from "./components/layout/Header.vue"
export default {
  name: "app",
  components: {
    Header
  }
}
</script>

<style scoped>
div {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
