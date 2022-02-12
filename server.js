const express = require('express')

// CONFIG
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

// routes
app.get('/',(req,res)=>{
    res.send("That is it")
})
// Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
// listen
app.listen(PORT,()=>{
    console.log('at port', PORT)
})