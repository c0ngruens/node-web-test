const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

/**
 * Middlewares
 */
app.use(morgan('combined'))
app.use(bodyParser.json())

/**
 * Routes
 */
app.use('/user', require('../routes/user'))

/**
 * Start server
 */
const port = process.env.PORT || 8081
app.listen(port)
console.log(`Server listening at port ${port}`)
