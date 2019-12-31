<template>
    <div class = "rectangle1">
          <br><br><br>
          <p>Welcome to ChitChat!</p><br>
          <img alt="Vue logo" src="../../assets/ChitChat_logo.jpg"/><br><br>
          <p id = "desc">Chat with anyone around the world! See what it has to offer you!</p>
        </div>
</template>

<script>
export default {
    name: "LoginDescription"
}
</script>

<style scoped>

    .rectangle1 {
      background-color: #2DD298;
      width: 70%;
      border-top-left-radius: 16px;
      border-bottom-left-radius: 16px;  
      padding-right: 15px;
      padding-left: 10px;
    }

    #desc {
    font-weight: bold;
    color: white;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        padding: 5px;
        color: white;
        font-size: 16px;
    }
</style>