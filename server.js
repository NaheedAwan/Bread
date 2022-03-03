
// CONFIG
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT
const app = express()
 
// DEPENDENCIES
const methodOverride = require('method-override')
const breadsController = require('./controllers/breads_controller.js')

// view engine
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// routes
app.get('/',(req,res)=>{
    res.send("That is it")
})

  // 404 Page
app.get('*', (req, res) => {
  res.send('404')
})
// database
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('db connected'))
  .catch(e => console.log(e))
// listen
app.listen(PORT,()=>{
    console.log('at port', PORT)
})
