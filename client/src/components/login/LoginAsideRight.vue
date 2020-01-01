<template>
  <div class="rectangle2">
    <LoginOptions @loginFormChange="formTypeChange" />
    <UserLogin v-if="loginFormType == 'USER'" />
    <GuestLogin v-if="loginFormType == 'GUEST'" />
    <AccountRegister v-if="loginFormType != 'REGISTER'" @registerFormChange="formTypeChange" />
    <RegisterForm v-if="loginFormType == 'REGISTER'" />
  </div>
</template>

<script>
import LoginOptions from "./LoginOptions.vue";
import UserLogin from "./UserLogin.vue";
import GuestLogin from "./GuestLogin.vue";
import AccountRegister from "./AccountRegister.vue";
import RegisterForm from "./RegisterForm.vue";

export default {
  name: "LoginAsideRight",
  components: {
    LoginOptions,
    UserLogin,
    GuestLogin,
    AccountRegister,
    RegisterForm
  },
  data() {
    return {
      loginFormType: null
    };
  },
  methods: {
    formTypeChange(loginFormType) {
      this.loginFormType = loginFormType;
    }
  }
};
</script>

<style scoped>
.rectangle2 {
  width: 140%;
  background-color: #2dd298;
  border-left: 3px solid white;
  border-top: 0;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>