const express = require('express')
const swaggerUi = require('swagger-ui-express')

const app = express()
const cors = require('cors')
const openApiDocumentation = require('../swagger.json')

app.use(express.json())

app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocumentation))
const routes = require('./routes')
app.use(cors({
  credentials: true,
  origin: true
}))

app.use(routes)

module.exports = app
