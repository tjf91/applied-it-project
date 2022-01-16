
// const latestData = require('./../../mockData/resLatest.json')
const axios = require('axios')
const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
 })
 const {API_CMP_KEY} = process.env
 
module.exports={
    getLatest:async(req,res)=>{
        let results=await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_CMP_KEY}`)
        .then(res=>res.data)
        .catch(e=>console.log(e))  
        return  res.status(200).send(results)
        // return res.status(200).send(latestData)

    }
}

