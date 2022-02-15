import ReactDom from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { IndexRoutes } from './routes/index.routes'
import { ThemeContextProvider } from './app/context/theme.context'
import { UserProvider } from './app/context/user.context'
ReactDom.hydrate(
  <BrowserRouter>
    <UserProvider>
      <ThemeContextProvider>
        <IndexRoutes />
      </ThemeContextProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('app')
)
