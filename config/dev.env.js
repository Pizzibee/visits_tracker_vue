'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_API_KEY : '"AIzaSyDm52jwvI3-w3fJ5N24zKwGeovh4Gf_Qh4"',
})
