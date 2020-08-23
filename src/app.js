const express = require('express')
const swaggerUi = require('swagger-ui-express')

const app = express()
const cors = require('cors')
const openApiDocumentation = require('../swagger.json')
const routes = require('./routes')

app.use(express.json())

app.use(cors({
  credentials: true,
  origin: true
}))

app.use(routes)
app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocumentation))

module.exports = app
