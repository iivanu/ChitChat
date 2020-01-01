<template>
  <div>
    <a v-on:click="registerFormChange('REGISTER')" id="signup">Don't have an account? Sign up here!</a>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "AccountRegister",
  data() {
    return {
      registerValue: "REGISTER"
    };
  },

  methods: {
    registerFormChange(type) {
      this.registerValue = type;
      this.$emit("registerFormChange", this.registerValue);
    }
  }
};
</script>

<style scoped>
#signup {
  padding: 10px;
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