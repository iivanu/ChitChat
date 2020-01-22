<template>
  <div>
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
        { name: "WorldChat", capacity:126},
        { name: "Hrvatska", capacity:15},
        { name: "BiH", capacity:13},
        { name: "Gana", capacity:25 },
        { name: "Šivcarska", capacity:53},
        { name: "USA", capacity:45},
        { name: "Gana", capacity:42},
        { name: "Nogomet", capacity:75},
        { name: "košarka", capacity:234},
        { name: "rukomet", capacity:123},
        { name: "odbojka", capacity:64},
        { name: "šah", capacity:64},
        { name: "posao", capacity:114},
        { name: "kuhanje", capacity:132},
        { name: "PC", capacity:255},
        { name: "skijanje", capacity:123},
        { name: "izbori", capacity:0}
      ]
    };
  },

  created() {}
};
</script>

<style scoped>
</style>