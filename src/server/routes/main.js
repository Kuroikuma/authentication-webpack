import React from 'react'
import { renderToString } from 'react-dom/server'
import render from '../render'
import { StaticRouter } from 'react-router-dom/server'
import { IndexRoutes } from '../../frontend/routes/index.routes'

const main = (req, res, next) => {
  try {
    const html = renderToString(
      <StaticRouter
        location={req.url}
      >
        <IndexRoutes />
      </StaticRouter>
    )
    console.log(html)
    res.send(render(html))
  } catch (error) {
    next(error)
  }
}

export default main
