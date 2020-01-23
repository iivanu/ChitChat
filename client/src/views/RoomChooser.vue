<template>
  <div class="container">
    <RoomList class="rooms-list" v-bind:rooms="rooms" />
  </div>
</template>



<script>
import RoomList from "../components/rooms/RoomList.vue";

export default {
  name: "RoomChooser",
  components: {
    RoomList
  },

  data() {
    return {
      // test values
      rooms: [
        { name: "WorldChat", id: "1", capacity:40 },
        { name: "Hrvatska", id: "2", capacity:15},
        { name: "BiH", id: "3", capacity:13},
        { name: "Gana", id: "4", capacity:25 },
        { name: "Šivcarska", id: "5", capacity:53},
        { name: "USA", id: "6", capacity:45},
        { name: "Gana", id: "7", capacity:42},
        { name: "Nogomet", id: "8", capacity:75},
        { name: "košarka", id: "9", capacity:13},
        { name: "rukomet", id: "10", capacity:76},
        { name: "šah", id: "11", capacity:12},
        { name: "posao", id: "12", capacity:114},
        { name: "PC", id: "13", capacity:255},
      ]
    };
  },

  created() {
    if (this.$store.state.user == null) {
      this.$router.push("/")
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
};
</script>

<style scoped>
</style>