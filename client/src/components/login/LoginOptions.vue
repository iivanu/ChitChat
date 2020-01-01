<template>
  <div class="login-tabs-wrapper">
    <div v-on:click="loginFormChange('GUEST')" class="option-tab1">Login as Guest</div>
    <div v-on:click="loginFormChange('USER')" class="option-tab2">Login as User</div>
  </div>
</template>

<script>
export default {
  name: "LoginOptions",
  data() {
    return {
      loginFormType: "GUEST"
    };
  },
  methods: {
    loginFormChange(type) {
      this.loginFormType = type;
      this.$emit("loginFormChange", this.loginFormType);
    }
  },

  created() {
    this.$emit("loginFormChange", this.loginFormType);
  }
};
</script>

<style scoped>
.login-tabs-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
}

.option-tab1 {
  width: 50%;
  background-color: #2dd298;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
}

.option-tab1:hover {
  border-bottom: 3px solid white;
}

.option-tab2 {
  width: 50%;
  background-color: #2dd298;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-right-radius: 16px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
}

.option-tab2:hover {
  border-bottom: 3px solid white;
}
</style>