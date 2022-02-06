import ReactDom from 'react-dom'
import React from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { IndexRoutes } from './routes/index-routes'

const history = createBrowserHistory()

ReactDom.hydrate(
  <Router history={history}>
    <IndexRoutes />
  </Router>,
  document.getElementById('app')
)
