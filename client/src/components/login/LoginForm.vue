<template>
  <div class="main">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
    <div class="mainrect">
      <LoginDescription />
      <LoginAsideRight />
    </div>
    <br />
    <br />
    <footer>Created by TestThis Team @ FESB</footer>
  </div>
</template>

<script>
import LoginDescription from "./LoginDescription.vue";
import LoginAsideRight from "./LoginAsideRight.vue";

export default {
  name: "Login",
  components: {
    LoginDescription,
    LoginAsideRight
  }
};
</script>

<style scoped>
.main {
  background-color: rgb(243, 243, 243);
  height: 100vh;
  margin: 0px auto;
}

.mainrect {
  display: inline-block;
  box-shadow: 0px 0px 20px rgb(95, 92, 92);
  width: 60%;
  border-radius: 16px;
  margin: 8% auto;
}

.mainrect {
  display: flex;
  flex-direction: row;
}

footer {
  font-family: "Montserrat", sans-serif;
  margin-left: 35px;
  font-weight: bold;
}
</style>