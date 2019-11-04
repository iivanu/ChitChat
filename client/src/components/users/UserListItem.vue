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

</style>