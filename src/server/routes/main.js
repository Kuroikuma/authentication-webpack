import React from 'react'
import { renderToString } from 'react-dom/server'
import render from '../render'
import { HolaMundo } from '../../frontend/hola-mundo/hola-mundo'

const main = (req, res, next) => {
  try {
    const html = renderToString(<HolaMundo />)
    res.send(render(html))
  } catch (error) {
    next(error)
  }
}

export default main
