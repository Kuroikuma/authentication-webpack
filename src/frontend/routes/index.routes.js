import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../app/page/login'
import { Layout } from '../app/containers/layout'
export const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  )
}
