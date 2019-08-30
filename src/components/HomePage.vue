<template>
  <div id="homepage">
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <AllCountries/>
        </b-col>
        <b-col cols="9">
          <GoogleMap/>
          <VisitedCountries/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GoogleMap from "./GoogleMap";
import VisitedCountries from "./VisitedCountries";
import AllCountries from "./AllCountries";

export default {
  name: 'App',
  beforeCreate(){
    this.$store.dispatch('fetchCountries');
    this.$store.dispatch('fetchLocation');
  },
  components: {
    AllCountries,
    GoogleMap,
    VisitedCountries
  },
}
</script>

<style>
</style>
