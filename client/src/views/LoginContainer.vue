<template>
  <LoginForm />
</template>

<script>
import LoginForm from "../components/login/LoginForm.vue";
export default {
  name: "LoginContainer",
  components: {
    LoginForm
  },

  created() {
    if (this.$store.state.user != null) {
      this.$router.push("/chat-room");
    }
  }
};
</script>

<style scoped>
</style>