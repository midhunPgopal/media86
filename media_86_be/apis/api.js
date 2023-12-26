const app = require('express')()

const basicRoute = require('../routes/basicRoute')
//middleware to check the api user name and password
const apiBasicAuth = require('../middleware/basicAuth')

app.use('/', apiBasicAuth, basicRoute)

module.exports = app