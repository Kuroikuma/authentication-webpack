import ReactDom from 'react-dom'
import React from 'react'
import { HolaMundo } from './hola-mundo/hola-mundo'

ReactDom.hydrate(<HolaMundo />, document.getElementById('app-react'))
