const app = require('./app')
const supertest = require('supertest')

describe('App', () => {
  describe('GET /', () => {
    it('sould responds with 200 containing "Hello, world!"', () => {
      return supertest(app).get('/').expect(200)
    })
  })
})
