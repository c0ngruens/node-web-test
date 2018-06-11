const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const config = require('./config/config')

const app = express()

/**
 * Middleware
 */
app.use(morgan('combined'))
app.use(bodyParser.json())

/**
 * Routes
 */
require('./routes')(app)

/**
 * Start applicatoin
 */
app.listen(config.app.port)
console.log(`Server listening at port ${config.app.port}`)
