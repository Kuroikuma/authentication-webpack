import React from 'react'
import { renderToString } from 'react-dom/server'
import render from '../render'
import { StaticRouter } from 'react-router-dom/server'
import { IndexRoutes } from '../../frontend/routes/index.routes'
import { ThemeContextProvider } from '../../frontend/app/context/theme.context'

const main = (req, res, next) => {
  try {
    const html = renderToString(
      <StaticRouter location={req.url}>
        <ThemeContextProvider>
          <IndexRoutes />
        </ThemeContextProvider>
      </StaticRouter>
    )
    res.send(render(html))
  } catch (error) {
    next(error)
  }
}

export default main
