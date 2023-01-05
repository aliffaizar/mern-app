const mongoose = require('mongoose')
const { connect, disconnect } = require('./mongoDB')

describe('MongoDB', () => {
  beforeAll(async () => {
    await connect()
  })
  afterAll(async () => {
    await disconnect()
  })
  it('should connect to the mongoDB database', () => {
    expect.assertions(1)
    expect(mongoose.connection.readyState).toEqual(1)
  })
})
