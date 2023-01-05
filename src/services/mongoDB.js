const mongoose = require('mongoose')

require('dotenv').config()

const { MONGO_URI } = process.env

mongoose.set('strictQuery', true)

const connect = () => {
  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  })
}

const disconnect = () => {
  return mongoose.connection.close()
}

module.exports = { connect, disconnect }
