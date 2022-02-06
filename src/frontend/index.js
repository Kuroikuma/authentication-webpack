import ReactDom from 'react-dom'
import React from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { IndexRoutes } from './routes/index.routes'

const history = createBrowserHistory()

ReactDom.hydrate(
  <React.StrictMode>
    <IndexRoutes />
  </React.StrictMode>,
  document.getElementById('app')
)
