const path = require('path')
const apiGetter = require('./controllers/apiGetter')

require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
 })
const express = require('express')
const app = express()
const {SERVER_PORT, API_CMP_KEY} = process.env

app.use(express.json())
app.use(express.static(`${__dirname}/../build`))

app.get('/api/latest', apiGetter.getLatest)

app.listen(SERVER_PORT, ()=>{
    console.log(`Serving on port ${SERVER_PORT}`)
})

