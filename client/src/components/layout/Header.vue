<template>
  <header class="header" v-if="this.$store.state.user != null">
    <div id="leftContainer">
      <router-link id="roomchooser" to="/choose-a-room" v-if="this.$store.state.user != null">Choose a room</router-link>
      <router-link id="chatroom" to="/chat-room" v-if="this.$store.state.user != null">{{this.$store.state.room.name}}</router-link>
    </div>
    <h2>ChitChat</h2>
    <router-link id="logout" to="/" v-on:click.native="logout" v-if="this.$store.state.user != null">Logout</router-link>
  </header>
</template>

<script>
export default {
  name: "Header",

  methods: {
    logout() {
      console.log("logOut");
      this.$router.push("/");
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  },
};
</script>

<style scoped>
.header {
  background-color: #e6edec;
  margin-bottom: 10px;
  display: flex;
}

#leftContainer {
  flex: 0.25;
  padding-top: 16px;
  display: flex;
}

#roomchooser {
  flex: 0.5;
}

#chatroom {
  flex: 0.5;
}

h2 {
  padding: 0px;
  padding-top: 2px;
  display: inline;
  margin: 10px auto;
  flex: 0.5;
}

#logout {
  flex: 0.25;
  padding-top: 16px;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #42b983;
}

</style>