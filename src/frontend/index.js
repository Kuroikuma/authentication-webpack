import ReactDom from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { IndexRoutes } from './routes/index.routes'
import { ThemeContextProvider } from './app/context/theme.context'
ReactDom.hydrate(
  <BrowserRouter>
    <ThemeContextProvider>
      <IndexRoutes />
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('app')
)
