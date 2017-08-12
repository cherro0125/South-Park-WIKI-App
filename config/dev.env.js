var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyAHgAGpYkXr3mqT_u7nLLbiWTnQ3TzmuzY"',
  AUTH_DOMAIN: '"south-park-wiki-app.firebaseapp.com"',
  DATABASE_URL: '"https://south-park-wiki-app.firebaseio.com"',
  PROJECT_ID: '"south-park-wiki-app"',
  STORAGE_BUCKET: '"south-park-wiki-app.appspot.com"
})
