import React from 'react'
import { renderToString } from 'react-dom/server'
import render from '../render'
import { StaticRouter } from 'react-router-dom/server'
import { IndexRoutes } from '../../frontend/app/routes/index.routes'
import { ThemeContextProvider } from '../../frontend/app/context/theme.context'
import { UserProvider } from '../../frontend/app/context/user.context'

const main = (req, res, next) => {
  try {
    const html = renderToString(
      <StaticRouter location={req.url}>
        <UserProvider>
          <ThemeContextProvider>
            <IndexRoutes />
          </ThemeContextProvider>
        </UserProvider>
      </StaticRouter>
    )
    res.send(render(html))
  } catch (error) {
    next(error)
  }
}

export default main
