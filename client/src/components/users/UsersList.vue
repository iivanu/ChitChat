<template>
  <div class="container">
    <div class="users-list">
        <p style="font-size:20px">Users: {{users.length}}</p>
        <div align="center" v-for="user in users" v-bind:key="user.id">
            <UserListItem v-bind:user="user"/>
        </div>
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
.container {
  overflow-y: hidden;
}

.users-list {
  box-sizing: border-box;
  color: #2c3e50;
  background-color: #2DD298;
  overflow-y: scroll;
  margin: 0 auto;
  width: 100%;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #D3D3D3; 
  border-radius: 6px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #808080; 
  border-radius: 6px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #999999; 
}
</style>