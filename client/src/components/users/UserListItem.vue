<template>
    <div class="user-item">
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
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 1.5rem;
        border-top: 1px solid transparent;
        border-radius: 8px;
        margin-bottom: 1.5px;
    }

    p {
        margin: 0px auto;
        margin-top: 3px;
        color: white;
    }
</style>