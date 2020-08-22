const { Router } = require('express')
const apiTecban = require('./controllers/apiTecban')
const routes = Router()

routes.get('/', apiTecban.offerts)

module.exports = routes
