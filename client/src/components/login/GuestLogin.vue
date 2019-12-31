<template>
    <div>
    <form class="LoginAsUser">
        <br>
        <i class="glyphicon glyphicon-user"></i>
        <input type = "text" name= "Username" placeholder= "Username"><br><br>
        <br><br><br> 
    </form>
    <button id = "loginb">Login</button> <br><br>
        <a id = "signup" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Don't have an account? Sign up here!</a><br><br><br><br>
    </div>
</template>

<script>
export default {
    name: "GuestLogin"
}
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
    background-color: white ;
    border-radius: 5px;
    border: 0;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    text-indent: 78%;
    }

    #loginb:hover {
    opacity: 0.7;
    }

    #signup {
    padding: 10px;
    }

    a {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold; 
    }
</style>