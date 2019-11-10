<template>
    <div class="users-list">
        <p style="font-size:20px">Users: {{users.length}}</p>
        <div align="center" v-for="user in users" v-bind:key="user.id">
            <hr>
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
  margin-right: 50px;
  width: 13rem;
  height: 25rem;
  overflow-y: scroll;
}

hr {
  width: 100%;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1px;
  margin-bottom: -4px;
  background-color:#2c3e50;
  border: 0 none;
}
</style>