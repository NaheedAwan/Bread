const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
// NEW

breads.get('/', (req, res) => {
  res.render('Index',
    {
      'breads': Bread
    }
  )
  // res.send(Bread)
})
// CREATE
breads.post('/', (req, res) => {
  console.log(req.body)
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten === 'true'
  } else {
    req.body.hasGlutten === 'false'
  }
  Bread.push(req.body)
  res.redirect('/breads')
})
// DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})
// UPDATE
// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})
// edit
// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})


// show
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    })
  } else {
    res.send('404')
  }
})


module.exports = breads