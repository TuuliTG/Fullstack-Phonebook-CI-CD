const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Person = require('../models/person')
const api = supertest(app)

describe('When database has one', () => {
  beforeEach(async () => {
    await Person.deleteMany({})
    const testPerson = {
      name: 'Test Person',
      number: '040123123',
    }
    await api
      .post('/api/persons')
      .send(testPerson)
  })

  test('persons are returned as json', async () => {
    await api
      .get('/api/persons')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  }, 100000)
  
  test('person gets created', async () => {
    const testPerson2 = {
      name: 'Test Person 2',
      number: '12345678',
    }
  
    await api
      .post('/api/persons')
      .send(testPerson2)
      .expect(201)
      .expect('Content-Type', /application\/json/)
  
    const response = await api.get('/api/persons')
  
    const name = response.body.map(r => r.name)
    const number = response.body.map(r => r.number)
  
    expect(response.body).toHaveLength(2)
    expect(name).toContain(
      'Test Person 2'
    )
    expect(number).toContain(
      '12345678'
    )
  }, 100000)
})

afterAll(async () => {
  await mongoose.connection.close()
})