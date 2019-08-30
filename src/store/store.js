import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict:true,
  state: {
    countries: [],
    visits: [],
    geolocation: null
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
    },
    geolocation: (state)=>{
      let found = state.countries.find(function(country){
        return country.alpha2Code === state.geolocation.countryCode;
      });
      return found;
    }
  },
  mutations: {
    setCountries: (state, countries)=>{
      state.countries = countries;
    },
    addVisit:(state, country)=>{
      state.visits.push(country);
    },
    setGeoLocation: (state, location)=>{
      state.geolocation = location;
    }
  },
  actions: {
    fetchCountries: (context) => {
      return new Promise((resolve, reject) => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
          .then(res => {
            context.commit('setCountries', res.data);
            resolve(res.data);
          }, error=>{
            reject(error);
          });
      });
    },
    addVisit:(context, country) => {
      if (!context.state.visits.includes(country)){
        context.commit("addVisit", country);
      }
    },
    fetchLocation: (context) => {
      return new Promise((resolve, reject)=>{

        axios.get('http://api.db-ip.com/v2/free/self')
        .then(res => {
          context.commit('setGeoLocation' ,res.data);
          resolve(res.data);
        }, error=>{
          reject(error);
        });
      }
      );
    }
  },
});