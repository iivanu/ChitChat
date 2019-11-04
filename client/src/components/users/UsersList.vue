<template>
    <div class="users-list">
        <p>Users: {{users.length}}</p>
        <div v-bind:key="user.id" v-for="user in users">
            <UserListItem v-bind:user="user"/>
        </div>
    </div>
</template>

<script>
import UserListItem from './UserListItem.vue'

export default {
  name: 'UsersList',
  components: {
    UserListItem,
  },
  props: ["users"],
}
</script>

<style>
.users-list {
  float: right;
  width: 20%;
  background: lightblue;
}
</style>