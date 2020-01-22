<template>
  <div class="room-item">
    <div class ="name-and-capacity">
      <p>{{room.name}}</p>
      <p>{{room.capacity}}</p>
    </div>
    <button v-on:click="joinRoom()" id="joinButton" ><b>JOIN</b></button>
  </div>
</template>

<script>
export default {
  name: "RoomListItem",
  props: ["room"],

  methods: {
    joinRoom() {
        this.$router.push("/chat-room");
       // console.log("SUCCESS");
    }
  }

};
</script>

<style scoped>
.room-item {
  background-color: #42b983;
  width: 90%;
  display: flex;
  flex-direction: row;
  height: 3rem;
  border-radius: 10px;
  margin: 6px;
  justify-content: space-between;
}

.name-and-capacity{
  text-align: center;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
}

.name-and-capacity p{
  margin-right: 1rem;
  margin-left: 1rem;
}

.room-item button {
  margin: none;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  width: 25%;
  outline: none; 
}
</style>