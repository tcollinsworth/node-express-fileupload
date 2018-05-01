import 'babel-polyfill'

import express from 'express'
// import bodyParser from 'body-parser'
import compression from 'compression'
import path from 'path'

import swagger from './app/middleware/swagger'
import upload from './app/upload/upload-rest'

const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || '3000'
const HOST = process.env.HOST || 'localhost'// '0.0.0.0'

const app = express()

app.use(compression())
app.use(express.static(path.join(__dirname, './public')))

app.use(swagger)

app.use(upload)

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server is listening on ${HOST}:${PORT} (${NODE_ENV})\n`)
})
  .on('error', (err) => {
    process.stdout.write(`Error occurred: ${err}\n`)
    setTimeout(() => process.exit(1), 5000)
  })
