import express from 'express'
import dotenv from 'dotenv'
import { webpack } from 'webpack'
import main from './routes/main'
import helmet from 'helmet'

dotenv.config()
const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static(`${__dirname}/public`))

if (ENV === 'development') {
  console.log('loading dev config')
  const webpackConfig = require('./../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
    port: { PORT },
    publicPath: webpackConfig.output.publicPath,
    hot: true,
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

app.get('*', main)

app.listen(PORT, (error) => {
  if (error) console.log(error)
  console.log(`Server Running on ${PORT}`)
})
