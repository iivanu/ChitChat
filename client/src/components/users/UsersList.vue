<template>
    <div class="users-list">
        <p style="font-size:20px">Users: {{users.length}}</p>
        <div align="center" v-for="user in users" v-bind:key="user.id">
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
  position: absolute;
  right: 50px;
  width: 13rem;
  height: 25rem;
  overflow-y: scroll;
}
</style>