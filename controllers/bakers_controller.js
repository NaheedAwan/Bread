// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/bakers.js')
const bakerSeedData = require('../models/baker_seed.js')

// creating Route=> inserting many => sending response to breads
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
        // .catch(err => {
        //     res.send('404')
        // })

}
)
// Index: 

baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})
// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

// delting the baker
baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id) 
      .then(deletedBaker => { 
        res.status(303).redirect('/breads')
      })
})
// export
module.exports = baker                    