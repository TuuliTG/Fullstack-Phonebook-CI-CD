const homeRouter = require('express').Router()
const Person = require('../models/person')
const personRouter = require('./persons')
personRouter.get('/info', (req,res, next) => {
  const date = new Date()
  Person.find({})
    .then(p => {
      res.send(
        `<p>Phonebook has info for ${p.length} people.</p>
         <p>${date}</p>
                `
      )
    })
    .catch(error => next(error))
})

module.exports = homeRouter