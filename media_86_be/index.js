const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

//sample api for checking
app.get('/', (req, res) => {
    return res.status(200).json({ message: `Api's Working` })
})

const api = require('./apis/api')
app.use('/media86', api)

const host = 'localhost'
const port = 3001
const prefix = 'http'

//server creating
const httpServer = http.createServer(app);

httpServer.listen(port, host, (err) => {   
    if (err) throw console.error(err);
    console.log(`HTTP Server running on ${prefix}://${host}:${port}`);
})
