import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { HolaMundo } from '../app/containers/hola-mundo'

export const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HolaMundo />} />
      <Route path='/about' element={<h1>About</h1>} />
      <Route path='/contact' element={<h1>Contact</h1>} />
    </Routes>
  )
}
