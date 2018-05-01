import swaggerJSDoc from 'swagger-jsdoc'
import express from 'express'

import passport from 'passport'
import { BasicStrategy } from 'passport-http'

const SWAGGER_AUTH_USER = process.env.SWAGGER_AUTH_USER || 'test'
const SWAGGER_AUTH_PASS = process.env.SWAGGER_AUTH_PASS || 'test123!'

const app = new express.Router()
export default app

// Don't want auth in the way during local development, only enable when deployed in production mode
if (process.env.NODE_ENV === 'production') {
  passport.use(new BasicStrategy((userid, password, done) => {
    if (userid === SWAGGER_AUTH_USER && password === SWAGGER_AUTH_PASS) {
      return done(null, true)
    }
    return done(null, false)
  }))

  app.use(passport.initialize())

  app.get('/swagger.json', passport.authenticate('basic', { session: false }), swaggerHandler)
} else {
  app.get('/swagger.json', swaggerHandler)
}

const options = {
  swaggerDefinition: {
    info: { // API informations (required)
      title: 'File upload Service',
      version: '1.0.0',
      description: 'file upload',
    },
    // host: 'localhost:3000', // Host (optional)
    basePath: '/', // Base path (optional)
  },
  apis: [
    // /api-docs will error till some <module>.js with swagger is added, /swagger.json will work though
    './app/upload/upload-rest.js',
  ],
}

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options)

// Serve swagger docs the way you like (Foo: swagger-tools)
function swaggerHandler(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send(swaggerSpec)
}
