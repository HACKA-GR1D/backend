const { Router } = require('express')
const ControllerGrid = require('./controllers/apiGrid')
const routes = Router()

routes.get('/products', ControllerGrid.products)

module.exports = routes
