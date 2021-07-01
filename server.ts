const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

require('dotenv').config()

const { PORT = 4000, MONGODB_URL } = process.env

mongoose
  .connect(MONGODB_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(console.error)

//express likes to call the server "app"
const app = express()

app.use(function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header(
    'Access-Control-Allow-Methods',
    'PUT, POST, GET, DELETE, OPTIONS, PATCH'
  )
  next()
})
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use('/', express.json()) // (req, res, next) => {...}
app.use('/api/users', require('./routes/users'))

app.use(express.static(path.join(__dirname, './client/build')))

// redirect to index.html
app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, './client/build'))
})

// error route
app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
