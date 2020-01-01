<template>
  <div>
    <form class="LoginAsUser">
      <br />
      <br />
      <i class="glyphicon glyphicon-user"></i>
      <input type="text" name="Username" placeholder="Username" />
      <br />
      <br />
      <i class="glyphicon glyphicon-info-sign"></i>
      <input type="password" name="Password" placeholder="Password" />
      <br />
      <br />
      <i class="glyphicon glyphicon-envelope"></i>
      <input type="email" name="Email" placeholder="Email" />
      <br />
      <br />
      <button id="registerb">Register</button>
      <br />
      <br />
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm"
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