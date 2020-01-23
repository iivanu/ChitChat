<template>
  <div class="container">
    <div class="rooms-list">
      <p style="font-size:20px">Rooms: {{rooms.length}}</p>
      <div align="center" v-for="room in rooms" v-bind:key="room.id">
        <RoomListItem v-bind:room="room" />
      </div>
    </div>
  </div>
</template>

<script>
import RoomListItem from "./RoomListItem.vue";

export default {
  name: "RoomList",
  components: {
    RoomListItem
  },
  props: ["rooms"]
};
</script>

<style scoped>
.container {
  overflow-y: auto;
}

.rooms-list {
  background-color: transparent;
  margin: 0 auto;
  width: 100%;
}
</style>