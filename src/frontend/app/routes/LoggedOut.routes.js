import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/login/login'
import { Layout } from '../containers/layout'
import { Register } from '../pages/register/register'
export const LoggetOut = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
}
