<template>
    <div class="user-item">
        <p>{{user.username}}</p>
        <hr>
    </div>
</template>

<script>
export default {
    name: "UserListItem",
    props: ["user"],
}
</script>

<style scoped>
    .user-item{
        text-align: center;
        border: 1px solid #2c3e50;
        /*border-radius: 7px;*/
        background-color: #2c3e50;
        /*margin-top: 5px;*/
        width: 100%;
        height: auto;
    }

    hr {
        width: 100%;
        height: 2px;
        margin-left: auto;
        margin-right: auto;
        background-color:#6995c2;
        border: 0 none;
    }
</style>