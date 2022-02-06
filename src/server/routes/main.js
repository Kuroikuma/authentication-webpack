import React from 'react'
import { renderToString } from 'react-dom/server'
import render from '../render'
import { HolaMundo } from '../../frontend/app/containers/hola-mundo'

const main = (req, res, next) => {
  console.log('estas aqui')
  try {
    const html = renderToString(<HolaMundo />)
    res.send(render(html))
  } catch (error) {
    next(error)
  }
}

export default main
