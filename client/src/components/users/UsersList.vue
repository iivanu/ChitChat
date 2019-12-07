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
  color: #2c3e50;
  background-color: #2DD298;
  padding: 8px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  position: absolute;
  right: 50px;
  width: 13rem
  height: 25rem;
  border-left: 1px solid #2c3e50;
  border-top: 1px solid #2c3e50;
  border-bottom: 1px solid #2c3e50;

  overflow-y: scroll;
}
</style>