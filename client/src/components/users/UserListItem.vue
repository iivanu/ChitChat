<template>
    <div class="user-item" v-bind:class="{'own-item':$store.state.user.username === user.username}">
        <p>{{user.username}}</p>
    </div>
</template>

<script>
export default {
    name: "UserListItem",
    props: ["user"],
}
</script>

<style scoped>
.user-item {
    text-align: center;
    background-color: #2c3e50;
    width: 95%;
    display: flex;
    flex-direction: column;
    height: 1.5rem;
    border-top: 1px solid transparent;
    border-radius: 6px;
    margin: 1px;
}

.own-item {
    background-color: #596c80
}

 p {
    margin: 0px auto;
    margin-top: 3px;
    color: white;
}
</style>