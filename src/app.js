const path = require('path')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { default: helmet } = require('helmet')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(morgan('combined'))
app.use(cors())
app.use(helmet())

app.use(express.static('public'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
