<template>
  <div>
    <form class="LoginAsUser">
      <br />
      <br />
      <i class="glyphicon glyphicon-user"></i>
      <input type="text" name="Username" placeholder="Username" v-model="username" />
      <br />
      <br />
      <i class="glyphicon glyphicon-info-sign"></i>
      <input type="password" name="Password" placeholder="Password" v-model="password" />
      <br />
      <br />
      <i class="glyphicon glyphicon-envelope"></i>
      <input type="email" name="Email" placeholder="Email" v-model="email" />
      <br />
      <br />
      <button v-on:click="register()" type="button" id="registerb">Register</button>
      <br />
      <br />
      <br />
    </form>
  </div>
</template>

<script>
import AuthenticationService from '../../services/AuthenticationService.js';
export default {
  name: "RegisterForm",

  data() {
    return {
      username: "",
      email: "",
      password: ""
    }
  },

  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password,
          /*password2: this.password2,*/
        });
        this.$store.dispatch('setUser',  response.data.user)
        this.$store.dispatch('setToken', response.data.token)
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

#registerb {
  padding: 8px 70px 8px 7px;
  cursor: pointer;
  background-color: white;
  border-radius: 5px;
  border: 0;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  text-indent: 50%;
}

#registerb:hover {
  opacity: 0.7;
}
</style>