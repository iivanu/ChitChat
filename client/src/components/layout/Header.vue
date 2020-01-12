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
  name: "Header",

  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    }
  },
};
</script>

<style scoped>
#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  margin-top: 2px;
  padding: 8px;
}
</style>