import ReactDom from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { IndexRoutes } from './routes/index.routes'

ReactDom.hydrate(
  <BrowserRouter>
    <IndexRoutes />
  </BrowserRouter>,
  document.getElementById('app')
)