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
import { mapGetters } from 'vuex';
export default {
  name: "GoogleMap",
  computed: {
    center(){
      let countryLoc = this.$store.getters.geolocation;
      if (countryLoc){
        return {lat: 42.83333333, lng: countryLoc.latlng[1]};
      }else{
        // default to Europe
        return { lat: 42.83333333, lng: 12.83333333 };
      }
    },
    markers(){
      return this.$store.getters.visitsCoord;
    }
  }
};
</script>