<template>
  <div>
    <h1>All Countries</h1>
    <input type="text" placeholder="Search..." v-model="search" class="width-100">
    
    <div class="scrollable-full">
      <div
        v-bind:key="country.alpha2Code"
        v-for="country in searchedCountries"
        class="mt-2">
        <Country v-bind:country=country></Country>
      </div>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import Country from './Country';
export default {
  components:{
    Country
  },
  data(){
    return {
      search:'',
    }
  },
  computed:{
    searchedCountries(){
      return this.countries.filter(country => {
        return country.name.toLowerCase().includes(this.search.toLowerCase())
      });
    },
    ...mapGetters([
      'countries',
    ])
  },
}
</script>

<style>
.scrollable-full{
  height:90vh; 
  overflow:auto;
}
.width-100{
  width: 100%;
}
</style>
