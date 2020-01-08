<template>
  <div>
    <form class="LoginAsUser">
      <br />
      <i class="glyphicon glyphicon-user"></i>
      <input type="text" name="Username" placeholder="Username" v-model="username" />
      <br />
      <br />
      <br />
      <i class="glyphicon glyphicon-info-sign"></i>
      <input type="password" name="Password" placeholder="Password" v-model="password" />
      <br />
      <br />
    </form>
    <button v-on:click="login()" id="loginb">Login</button>
    <br />
    <br />
    <a id="forgot" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot password?</a>
    <br />
    <br />
  </div>
</template>

<script>
import AuthenticationService from '../../services/AuthenticationService.js';
export default {
  name: "UserLogin",

  data() {
    return {
      username: "",
      password: ""
    }
  },

  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password,
          guest: false
        });
        this.$store.dispatch("setUser", response.data.user);
        this.$store.dispatch("setToken", response.data.token);
        this.$router.push({
          name: "chatroom"
        }); 
        console.log("SUCCESS");
      } catch(error) {
        console.log(error);
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.textfields {
  padding: 5px;
}

input {
  text-align: left;
  padding: 5px 85px 5px 7px;
  height: 40px;
  border: 0;
  background-color: white;
  border-radius: 5px;
}

i {
  color: white;
  margin-right: 8px;
  transform: scale(1.25);
}

#loginb {
  padding: 8px 70px 8px 7px;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  border: 0;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  text-indent: 78%;
}

#loginb:hover {
  opacity: 0.7;
}

#forgot {
  position: center;
}

a {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
</style>