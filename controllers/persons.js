const personRouter = require('express').Router()
const Person = require('../models/person')
const logger = require('../utils/logger')
personRouter.get('/',(req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

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

personRouter.get('/:id', (req, res, next) => {
  const id = req.params.id
  Person.findById(id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

personRouter.delete('/:id', (req, res, next) => {
  const id = req.params.id
  Person.findByIdAndRemove(id)
    .then(() => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

personRouter.put('/:id', (req, res, next) => {
  const body = req.body
  const id = req.params.id
  logger.info('Updating person with id:',id)
  const person = {
    name: body.name,
    number: body.number
  }
  logger.info('UPDATING', person)
  Person.findByIdAndUpdate(id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

personRouter.post('/', (req, res, next) => {
  const body = req.body
  if (!body.name) {
    return res.status(400).json({
      error: 'Name missing'
    })
  } else if (!body.number) {
    return res.status(400).json({
      error: 'Number missing'
    })
  }
  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    res.status(201).json(savedPerson)
  })
    .catch(error => next(error))
})

module.exports = personRouter