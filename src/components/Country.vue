<template>
  <div class="card p-1" >
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <img class="flag-img" :src="country.flag">
        </b-col>
        <b-col cols="9">
          <b-row>
            <b-col cols="8">
              <h5 class="card-title mt-1">{{country.name}}</h5>
            </b-col>
            <b-col v-if="!visits.includes(country)">
              <button v-on:click="addVisit(country)">
                <img src="../assets/add.png">
              </button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  props:{
    country: Object,
  },
  methods:{
    addVisit(country){
      this.$store.dispatch('addVisit', country);
    }
  },
  computed:{
    ...mapGetters([
      'visits',
    ])
  },
}
</script>

<style>
.flag-img {
  width: 100px;
  height: 70px;
}
</style>
