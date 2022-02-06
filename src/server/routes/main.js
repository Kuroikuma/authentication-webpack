import React from 'react'
import { renderToString } from 'react-dom/server'
import render from '../render'
import { StaticRouter } from 'react-router'
import { IndexRoutes } from '../../frontend/routes/index.routes'
import serverRoutes from '../../frontend/routes/server.routes'
import { renderRoutes } from 'react-router-config'

const main = (req, res, next) => {
  try {
    const html = renderToString(
      <React.StrictMode>
        <StaticRouter location={req.url}>
          <IndexRoutes />
        </StaticRouter>
      </React.StrictMode>
    )
    console.log(html)
    res.send(render(html))
  } catch (error) {
    next(error)
  }
}

export default main
