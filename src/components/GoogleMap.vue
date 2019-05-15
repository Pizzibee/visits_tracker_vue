<template>
  <div>
    <h1>Google Map</h1>
    <gmap-map
      :center="center"
      :zoom="2.7"
      style="width:100%;  height: 700px;"
    >
      <gmap-marker 
        v-for="(m, index) in markers" 
        v-bind:key="index" 
        :position="m"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Italy
      center: { lat: 42.83333333, lng: 12.83333333 },

    };
  },
  computed: {
    markers(){
      return this.$store.getters.visitsCoord;
    }
  }
};
</script>