import express from 'express'
import webpack from 'webpack'
import main from './routes/main'
import auth_github from './routes/auth_github'
import helmet from 'helmet'
import router from './routes/router'

const cors = require('cors')
const bodyParser = require('body-parser')

require('./db/mongoDB')

require('dotenv').config()

const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.use(express.static(`${__dirname}/public`))
app.use('/api', router())

if (ENV === 'development') {
  console.log('loading dev config')
  const webpackConfig = require('./../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = {
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
  }
  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
} else {
  console.log('Loading production config')
  app.use(helmet())
  app.use(helmet.permittedCrossDomainPolicies)
  app.disable('x-powered-by')
}

app.get('/auth-github', auth_github)

app.get('/logout', (req, res) => {
  res.redirect('/')
})

app.get('*', main)

app.use((error, request, response, next) => {
  console.error(error.name)
  switch (error.name) {
    case 'CastError':
      response.status(400).send({ error: 'id mal formado' })
      break
    case 'ReferenceError':
      response.status(500).send({ error: 'Error interno' })
      break
    default:
      response.status(500).end()
      break
  }
})

app.listen(PORT, (error) => {
  if (error) console.log(error)
  console.log(`Server Running on ${PORT}`)
})
