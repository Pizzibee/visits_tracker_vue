import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict:true,
  state: {
    countries: [],
    visits: [],
  },
  getters:{
    countries: (state)=>{
      return state.countries;
    }, 
    visits:(state)=>{
      return state.visits;
    },
    visitsCoord: (state)=>{
      return state.visits.map(country => {
        return {"lat":country.latlng[0], "lng":country.latlng[1]}
      });
    }
  },
  mutations: {
    setCountries: (state, countries)=>{
      state.countries = countries;
    },
    addVisit:(state, country)=>{
      state.visits.push(country);
    }
  },
  actions: {
    fetchCountries: (context) =>{
      axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(res => {
          context.commit('setCountries', res.data);
        });
    },
    addVisit:(context, country)=>{
      if (!context.state.visits.includes(country)){
        context.commit("addVisit", country);
      }
    }
  },
});