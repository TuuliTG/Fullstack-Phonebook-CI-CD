const homeRouter = require('express').Router()
const Person = require('../models/person')

homeRouter.get('/info', (req,res, next) => {
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

homeRouter.get('/health', (req,res, next) => {
  res.send('ok')
})

module.exports = homeRouter