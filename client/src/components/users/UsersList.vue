<template>
    <div class="users-list">
        <p style="font-size:20px">Users: {{users.length}}</p>
        <div v-for="user in users" v-bind:key="user.id">
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

<style scoped>
.users-list {
  color: white;
  background-color: #42b883;
  padding: 8px;
  border-radius: 7px;
  float: right;
  width: 20%;
}
</style>