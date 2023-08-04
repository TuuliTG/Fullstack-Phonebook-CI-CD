const testingRouter = require('express').Router()
const Person = require('../models/person')

testingRouter.post('/reset', async (request, response) => {
  await Person.deleteMany({})

  response.status(204).end()
})

module.exports = testingRouter