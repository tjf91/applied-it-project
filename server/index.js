const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
 })
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
console.log('hi '+ process.env.SERVER_PORT)
app.use(express.json())
//app.use(express.static(`${__dirname}/../build`))





app.listen(SERVER_PORT, ()=>{
    console.log(`Serving on port ${SERVER_PORT}`)
})

