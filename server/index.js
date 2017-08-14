import Nuxt from 'nuxt'
import express from 'express'

import api from './api'

const app = express()
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
app.use('/api', api)

// Start nuxt.js
async function start () {
    // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
        // Instanciate nuxt.js
  const nuxt = new Nuxt(config)
        // Add nuxt.js middleware
  process.env.DEBUG = 'nuxt:*'
  app.use(nuxt.render)
        // Listen the server
  app.listen(port)
  console.log('Server started ' + port) // eslint-disable-line no-console
}

start()
