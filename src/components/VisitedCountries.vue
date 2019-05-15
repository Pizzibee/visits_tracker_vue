<template>
  <div id="visitedComp" class="scrollable-half">
    <h1>Visited</h1>
    <div>
      <ul>
        <li v-for="(visit, index) in visits" v-bind:key="index">
          {{ visit.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'VisitedCountries',
  created(){
    //normal app should dispatch action to fetch visits
  },
  computed:{
    ...mapGetters([
      'visits',
    ])
  },
}
</script>
<style>

.scrollable-half{
  height:35vh; 
  overflow:auto;
}
</style>
