<template>
  <header class="header">
    <h1>ChitChat</h1>
    <div id="nav">
      <router-link class="header-link" to="/choose-a-room">Choose a room</router-link>
      <router-link class="header-link" to="/chat-room">Room</router-link>
      <router-link class="header-link" to="/">Login</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>