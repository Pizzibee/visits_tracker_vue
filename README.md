# Visits Tracker

# Features : 
  - Displays a list of countries with an "add" button
  - "Add" button adds the country to the country you have visited
  - Display markers of countries you have visited on a google map
  
Before running the project make sure to add your Google API Key in the ./config/dev.env.js file as : 
```
'use strict'
const merge = require('webpack-merge')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_API_KEY : "'YOUR_KEY'",
})
```

# Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# App screenshot : 

![alt text](https://github.com/Pizzibee/visits_tracker_vue/blob/master/docs/screen.png)
